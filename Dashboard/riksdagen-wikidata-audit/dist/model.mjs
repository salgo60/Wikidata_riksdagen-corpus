export const checks = {
  riksdagsmall:'Riksdagsmall 2026–2030', infobox:'Infobox politiker',
  illustration:'Illustrationsbehov', authority:'Auktoritetsdata', partikategori:'Partikategori',
  p39:'Mandat · P39', p8388:'Person-ID · P8388', p1214:'Intressent-ID · P1214'
};
export const statusLabels={finns:'Finns',saknas:'Saknas',ej_aktuell:'Ej aktuell',okant:'Okänt',ej_kontrollerat:'Ej kontrollerat'};
export const filterKeys=['q','party','county','status','svwiki',...Object.keys(checks)];
export const metricLabels={free:'Fri Commons-bild',svwiki:'svWikipedia-artikel',...checks};
export function defaults(data){return {q:'',party:'',county:'',status:'',svwiki:'',...Object.fromEntries(Object.keys(checks).map(k=>[k,''])),snapshot:data.latest,compare:data.snapshots.find(s=>s.kind==='history')?.id||data.snapshots[0].id,view:'members',sort:'name',dir:'asc',metric:'riksdagsmall',person:''};}
export function parseState(url,data){
  const u=new URL(url,'https://audit.invalid');
  const params=new URLSearchParams(u.hash.slice(1));
  u.searchParams.forEach((v,k)=>params.set(k,v));
  const s=defaults(data);
  for(const k of Object.keys(s)) if(params.has(k)) s[k]=params.get(k);
  if(s.status==='Saknar bild (P18)')s.status='no_p18';
  if(s.status==='Har bild (P18)')s.status='has_p18';
  if(!data.snapshots.some(x=>x.id===s.snapshot))s.snapshot=data.latest;
  if(!data.snapshots.some(x=>x.id===s.compare))s.compare=defaults(data).compare;
  if(!['members','history'].includes(s.view))s.view='members';
  if(!['name','party','county','free','svwiki','riksdagsmall','infobox'].includes(s.sort))s.sort='name';
  if(!['asc','desc'].includes(s.dir))s.dir='asc';
  if(!(s.metric in metricLabels))s.metric='riksdagsmall';
  if(!['','free','no_free','unknown','no_p18','has_p18'].includes(s.status))s.status='';
  if(!['','ja','nej','okant'].includes(s.svwiki))s.svwiki='';
  for(const k of Object.keys(checks))if(s[k] && !(s[k] in statusLabels))s[k]='';
  const rows=data.snapshots.flatMap(x=>x.records);
  for(const k of ['party','county'])if(s[k]&&!rows.some(x=>x[k]===s[k]))s[k]='';
  if(s.person && !data.people[s.person])s.person='';
  s.q=s.q.slice(0,200);
  return s;
}
export function stateUrl(url,state,data){
  const u=new URL(url,'https://audit.invalid'), d=defaults(data);
  u.hash='';u.search='';
  for(const k of Object.keys(d))if(state[k]!==undefined && (state[k]!==d[k] || k==='snapshot') && state[k]!=='')u.searchParams.set(k,state[k]);
  return u.href;
}
export function matchesCohort(r,s){
  const q=s.q.trim().toLocaleLowerCase('sv');
  return (!s.party||r.party===s.party)&&(!s.county||r.county===s.county)&&(!q||[r.name,r.qid,r.id,r.party,r.county].join(' ').toLocaleLowerCase('sv').includes(q));
}
export function matches(r,s){
  return matchesCohort(r,s)&&(!s.svwiki||r.svwiki===s.svwiki)&&
    (!s.status || ({free:r.free===true,no_free:r.free===false,unknown:r.free==null,no_p18:r.p18===false,has_p18:r.p18===true})[s.status])&&
    Object.keys(checks).every(k=>!s[k]||r[k]===s[k]);
}
export function filterRows(rows,s){return rows.filter(r=>matches(r,s)).sort((a,b)=>{
  const v=String(a[s.sort]??'').localeCompare(String(b[s.sort]??''),'sv',{numeric:true});
  return (s.dir==='desc'?-v:v)||a.name.localeCompare(b.name,'sv');
});}
export function metric(r,key){
  if(key==='free')return r.free===true?'finns':r.free===false?'saknas':'ej_kontrollerat';
  if(key==='svwiki')return r.svwiki==='ja'?'finns':r.svwiki==='nej'?'saknas':'okant';
  return r[key]||'ej_kontrollerat';
}
export function stats(rows,key){
  const statuses=rows.map(r=>metric(r,key));
  return {total:rows.length,present:statuses.filter(s=>s==='finns').length,missing:statuses.filter(s=>s==='saknas').length,
    unknown:statuses.filter(s=>['okant','ej_kontrollerat'].includes(s)).length,na:statuses.filter(s=>s==='ej_aktuell').length};
}
export function compareRows(before,after,ids){
  const b=new Map(before.map(r=>[r.id,r])), a=new Map(after.map(r=>[r.id,r]));
  const fields=Object.keys(metricLabels),result=[];
  for(const id of ids){
    const prev=b.get(id),next=a.get(id);
    if(!prev&&!next)continue;
    if(!prev||!next){result.push({id,key:'membership',before:prev?'finns':'saknas',after:next?'finns':'saknas'});continue;}
    for(const key of fields){const v1=metric(prev,key),v2=metric(next,key);if(v1!==v2)result.push({id,key,before:v1,after:v2});}
  }
  return result;
}
export function safeUrl(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href.replace(/^http:/,'https:'):'';}catch{return '';}}
export function wikiUrl(title){return title?'https://sv.wikipedia.org/wiki/'+encodeURIComponent(title.replaceAll(' ','_')):'';}
export function csv(rows){
  const columns=['name','party','county','qid','id','free','svwiki',...Object.keys(checks)];
  const quote=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replaceAll('"','""')+'"';
  return '\ufeff'+[columns.map(quote).join(';'),...rows.map(r=>columns.map(k=>quote(r[k])).join(';'))].join('\r\n');
}
