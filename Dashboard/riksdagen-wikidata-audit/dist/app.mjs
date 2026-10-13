import {checks,statusLabels,filterKeys,metricLabels,defaults,parseState,stateUrl,filterRows,matchesCohort,metric,stats,compareRows,safeUrl,wikiUrl,csv} from './model.mjs';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=d=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Stockholm',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date(d));
const partyNames={C:'Centerpartiet',KD:'Kristdemokraterna',L:'Liberalerna',M:'Moderaterna',MP:'Miljöpartiet',S:'Socialdemokraterna',SD:'Sverigedemokraterna',V:'Vänsterpartiet'};
const colors={C:'#399568',KD:'#304b84',L:'#47a8d7',M:'#1766a0',MP:'#7a943b',S:'#bd4e5f',SD:'#8c783c',V:'#b04939'};
const link=(url,label,cl='')=>safeUrl(url)?`<a class="${esc(cl)}" href="${esc(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:'';
const badge=(s)=>`<span class="status ${s==='finns'?'ok':s==='saknas'?'missing':s==='ej_aktuell'?'na':'unknown'}">${s==='finns'?'✓ ':s==='saknas'?'− ':''}${esc(statusLabels[s]||s)}</span>`;
const party=p=>`<span class="party-badge" style="--party-color:${colors[p]||'#7b8585'}"><span class="party-dot" aria-hidden="true"></span>${esc(p)}</span>`;
let data,state,filtered=[],page=1,group='party';const pageSize=50;
let searchTimer,toastTimer;
try{
  const response=await fetch('./data.json');
  if(!response.ok)throw new Error('HTTP '+response.status);
  data=await response.json();
  if(data.schema!==1||!data.snapshots?.length)throw new Error('Unknown schema');
  state=parseState(location.href,data);
  setup();render();updateUrl(false);
}catch(error){
  $('result-count').textContent='Data kunde inte laddas.';
  $('latest-date').textContent='Data saknas';
  $('notice').className='error';$('notice').textContent='Data kunde inte laddas. Ladda om sidan och kontrollera anslutningen. '+error.message;
  document.querySelectorAll('button,input,select').forEach(el=>el.disabled=true);
  console.error(error);
}
function snapshot(){return data.snapshots.find(s=>s.id===state.snapshot);}
function setup(){
  const all=data.snapshots.flatMap(s=>s.records);
  for(const k of ['party','county']){
    const opts=[...new Set(all.map(r=>r[k]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'sv'));
    $(k).insertAdjacentHTML('beforeend',opts.map(v=>`<option value="${esc(v)}">${esc(k==='party'?v+' · '+(partyNames[v]||v):v)}</option>`).join(''));
  }
  for(const select of document.querySelectorAll('.status-select'))select.innerHTML='<option value="">Alla statusar</option>'+Object.entries(statusLabels).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  const snapshotOptions=[...data.snapshots].reverse().map(s=>`<option value="${esc(s.id)}">${esc(date(s.date))} · ${esc(s.label)}${s.id===data.latest?' · senaste':''}</option>`).join('');
  $('snapshot').innerHTML=snapshotOptions;$('compare').innerHTML=snapshotOptions;
  $('metric').innerHTML=Object.entries(metricLabels).map(([k,v])=>`<option value="${k}">${esc(v)}</option>`).join('');
  $('latest-date').textContent=date(data.snapshots.at(-1).date)+' 2026';
  $('total-badge').textContent=data.snapshots.at(-1).records.length;
  $('snapshot-badge').textContent=data.snapshots.length;
  $('repo-link').href=data.repository;
  $('provenance').innerHTML=`Importerad commit: ${link(data.repository+'/commit/'+data.commit,data.commit.slice(0,8))}. Senaste mätning: ${esc(date(data.snapshots.at(-1).date))}. ${data.snapshots.length} mätningar · ${data.snapshots.at(-1).records.length} personer i senaste mätningen · ${Object.keys(data.people).length} person-ID över tid. v9/v12-datum avser senast registrerade kontrolltid, v15-datum avser matning_utc. Tider visas i Europe/Stockholm.`;
  $('source-list').innerHTML=data.sources.map(s=>`<li>${link(s.url,s.path)}<br><code>Git blob ${esc(s.blob)}</code></li>`).join('');
  $('source-list').insertAdjacentHTML('beforeend','<li>'+link('https://salgo60.github.io/Wikidata_riksdagen-corpus/Notebook/riksdagen_audit_20261009_v15/riksdagen_saknar_bild.html','Öppna den ursprungliga v15-rapporten ↗')+'</li>');
  for(const k of filterKeys){
    $(k).addEventListener(k==='q'?'input':'change',()=>{
      if(k==='q'){clearTimeout(searchTimer);searchTimer=setTimeout(()=>setState({[k]:$(k).value}),180);}
      else setState({[k]:$(k).value});
    });
  }
  for(const k of ['snapshot','compare','metric'])$(k).addEventListener('change',()=>setState({[k]:$(k).value}));
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setState({view:b.dataset.view})));
  document.querySelectorAll('[data-sort]').forEach(b=>b.addEventListener('click',()=>setState({sort:b.dataset.sort,dir:state.sort===b.dataset.sort&&state.dir==='asc'?'desc':'asc'})));
  document.querySelectorAll('[data-group]').forEach(b=>b.addEventListener('click',()=>{group=b.dataset.group;renderBreakdown();}));
  $('reset').addEventListener('click',reset);$('empty-reset').addEventListener('click',reset);
  $('prev').addEventListener('click',()=>{page--;renderMembers();});$('next').addEventListener('click',()=>{page++;renderMembers();});
  $('share').addEventListener('click',async()=>{
    // Commit a pending search before copying, even if the debounce has not run.
    clearTimeout(searchTimer);if($('q').value!==state.q)setState({q:$('q').value});
    const url=stateUrl(location.href,state,data);
    try{await navigator.clipboard.writeText(url);toast('Filterlänken är kopierad.');}
    catch{$('share-fallback').hidden=false;$('share-fallback').value=url;$('share-fallback').focus();$('share-fallback').select();toast('Kopiera den markerade länken med Ctrl+C eller ⌘C.');}
  });
  $('export').addEventListener('click',()=>{
    clearTimeout(searchTimer);if($('q').value!==state.q)setState({q:$('q').value});
    const url=URL.createObjectURL(new Blob([csv(filtered)],{type:'text/csv;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='riksdagen-audit-'+snapshot().date.slice(0,10)+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(filtered.length+' ledamöter exporterade från vald mätning.');
  });
  document.addEventListener('click',e=>{
    const open=e.target.closest('[data-person]');if(open)setState({person:open.dataset.person});
    const groupLink=e.target.closest('[data-filter-group]');if(groupLink)setState({[groupLink.dataset.filterGroup]:groupLink.dataset.value,view:'members'});
    const timeline=e.target.closest('[data-measurement]');if(timeline)setState({snapshot:timeline.dataset.measurement});
    const preset=e.target.closest('[data-preset]');if(preset)setState({[preset.dataset.preset]:preset.dataset.value});
  });
  $('close-dialog').addEventListener('click',()=>setState({person:''}));
  $('person-dialog').addEventListener('cancel',e=>{e.preventDefault();setState({person:''});});
  $('person-dialog').addEventListener('close',()=>{if(state.person)setState({person:''},false);});
  window.addEventListener('popstate',restore);window.addEventListener('hashchange',restore);
}
function toast(text){clearTimeout(toastTimer);$('notice').textContent=text;toastTimer=setTimeout(()=>{$('notice').textContent='';},6000);}
function reset(){clearTimeout(searchTimer);const d=defaults(data);setState(Object.fromEntries(filterKeys.map(k=>[k,d[k]])));$('q').focus();}
function restore(){clearTimeout(searchTimer);state=parseState(location.href,data);page=1;render();}
function updateUrl(push=true){const url=stateUrl(location.href,state,data);if(url!==location.href)history[push?'pushState':'replaceState'](null,'',url);}
function setState(change,push=true){
  if(!Object.hasOwn(change,'q') && $('q').value!==state.q)change={q:$('q').value,...change};
  clearTimeout(searchTimer);state={...state,...change};page=1;updateUrl(push);render();
}
function render(){
  for(const k of [...filterKeys,'snapshot','compare','metric'])$(k).value=state[k];
  const extra=Object.keys(checks).filter(k=>k!=='riksdagsmall'&&state[k]).length;
  $('advanced-count').textContent=extra?extra+' aktiva':'';
  if(extra)$('advanced').open=true;
  $('members-view').hidden=state.view!=='members';$('history-view').hidden=state.view!=='history';
  document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===state.view);if(b.dataset.view===state.view)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  const snap=snapshot();
  $('measurement-note').innerHTML=(snap.kind==='history'?'Historiskt län = senaste rapportens län. ':snap.kind==='report'?'Äldre rapport; vissa kontroller saknas. ':'Riksdagens systemdatum: '+esc(snap.systemdate||'se källa')+'. ')+link(snap.source,'Öppna källdata ↗');
  filtered=filterRows(snap.records,state);
  renderKpis();renderMembers();renderBreakdown();
  if(state.view==='history')renderHistory();
  renderDialog();
}
function renderKpis(){
  const free=stats(filtered,'free'),sv=stats(filtered,'svwiki'),infobox=stats(filtered,'infobox');
  const card=(label,value,note,preset='',val='',accent=false)=>`<${preset?'button':'div'} class="kpi ${accent?'accent':''}" ${preset?`data-preset="${preset}" data-value="${val}"`:''}><span class="kpi-label">${label}${preset?'<span aria-hidden="true">↗</span>':''}</span><span class="kpi-number">${value}</span><span class="kpi-note">${note}</span></${preset?'button':'div'}>`;
  $('kpis').innerHTML=card('Ledamöter i urvalet',filtered.length,'av '+snapshot().records.length+' i vald mätning')+
    card('Fri Commons-bild',free.present,filtered.length?(free.present/filtered.length*100).toFixed(1).replace('.',',')+' % av urvalet':'Inget urval','status','free',true)+
    card('Saknar svWikipedia',sv.missing,sv.unknown?sv.unknown+' med okänd status':'Artiklar enligt rapportens matchning','svwiki','nej')+
    card('Saknar infobox',infobox.missing,infobox.unknown?infobox.unknown+' ej kontrollerade / okända':'Infobox politiker i svWikipedia','infobox','saknas');
}
function renderMembers(){
  const max=Math.max(1,Math.ceil(filtered.length/pageSize));page=Math.min(max,Math.max(1,page));
  $('result-count').textContent=filtered.length+' av '+snapshot().records.length+' ledamöter · '+date(snapshot().date);
  $('member-rows').innerHTML=filtered.slice((page-1)*pageSize,page*pageSize).map(r=>{
    const p=data.people[r.id]||{};
    return `<tr><td><button class="name-button" data-person="${esc(r.id)}">${esc(r.name)}</button><span class="qid">${esc(r.qid||'Ingen Wikidata-match')}</span></td><td>${party(r.party)}</td><td class="county-cell">${esc(r.county||'Okänt län')}</td><td>${badge(metric(r,'free'))}</td><td>${badge(metric(r,'svwiki'))}</td><td>${badge(r.riksdagsmall)}</td><td>${badge(r.infobox)}</td><td><div class="source-links">${r.qid?link('https://www.wikidata.org/wiki/'+r.qid,'WD'):''}${r.svwiki==='ja'?link(p.svurl,'WP'):''}<button class="text-button" data-person="${esc(r.id)}" aria-label="Detaljer för ${esc(r.name)}">↗</button></div></td></tr>`;
  }).join('');
  $('empty').hidden=filtered.length!==0;
  $('page-label').textContent=filtered.length?((page-1)*pageSize+1)+'–'+Math.min(page*pageSize,filtered.length)+' av '+filtered.length:'0 av 0';
  $('prev').disabled=page===1;$('next').disabled=page===max;
  document.querySelectorAll('[data-sort]').forEach(b=>{b.textContent=({name:'Ledamot',party:'Parti',county:'Län',free:'Fri bild',svwiki:'svWikipedia',riksdagsmall:'Riksdagsmall',infobox:'Infobox'})[b.dataset.sort]+(state.sort===b.dataset.sort?(state.dir==='asc'?' ↑':' ↓'):' ↕');b.parentElement.setAttribute('aria-sort',state.sort===b.dataset.sort?(state.dir==='asc'?'ascending':'descending'):'none');});
}
function renderBreakdown(){
  document.querySelectorAll('[data-group]').forEach(b=>b.classList.toggle('selected',b.dataset.group===group));
  const groups=[...new Set(filtered.map(r=>r[group]))].sort((a,b)=>a.localeCompare(b,'sv'));
  $('breakdown-table').innerHTML=`<table><thead><tr><th>${group==='party'?'Parti':'Län'}</th><th>Personer</th><th>Fri bild</th><th>Andel fri bild</th><th>Saknar artikel</th><th>Saknar riksdagsmall</th><th>Saknar infobox</th></tr></thead><tbody>${groups.map(g=>{const rows=filtered.filter(r=>r[group]===g),f=stats(rows,'free'),t=stats(rows,'riksdagsmall'),i=stats(rows,'infobox');return `<tr><td><button class="group-link" data-filter-group="${group}" data-value="${esc(g)}">${esc(g)} ↗</button></td><td>${rows.length}</td><td>${f.present}</td><td>${(f.present/rows.length*100).toFixed(1).replace('.',',')} %</td><td>${stats(rows,'svwiki').missing}</td><td>${t.unknown===rows.length?'Ej kontrollerat':t.missing+(t.unknown?' ('+t.unknown+' okända)':'')}</td><td>${i.unknown===rows.length?'Ej kontrollerat':i.missing+(i.unknown?' ('+i.unknown+' okända)':'')}</td></tr>`;}).join('')}</tbody></table>`;
}
function renderHistory(){
  const now=snapshot(),before=data.snapshots.find(s=>s.id===state.compare);
  const cohort=[...before.records,...now.records].filter(r=>matchesCohort(r,state)),ids=new Set(cohort.map(r=>r.id));
  const scoped=s=>s.records.filter(r=>ids.has(r.id));
  const old=scoped(before),current=scoped(now);
  const beforeIds=new Set(old.map(r=>r.id)),nowIds=new Set(current.map(r=>r.id));
  const added=[...nowIds].filter(id=>!beforeIds.has(id)).length,removed=[...beforeIds].filter(id=>!nowIds.has(id)).length;
  $('cohort-count').textContent=ids.size+' person-ID · '+added+' tillkomna · '+removed+' utgångna';
  $('comparison-label').textContent=date(before.date)+' → '+date(now.date)+(new Date(before.date)>new Date(now.date)?' · jämförelsen går bakåt i tiden':'');
  const statCell=(s)=>`${s.missing} saknas<span class="small-note">${s.present} finns${s.unknown?' · '+s.unknown+' okända / ej kontrollerade':''}${s.na?' · '+s.na+' ej aktuella':''}${s.total<ids.size?' · '+(ids.size-s.total)+' ej med i mätningen':''}</span>`;
  $('comparison-table').innerHTML=`<table class="comparison-table"><thead><tr><th>Kontroll</th><th>${esc(date(before.date))}</th><th>${esc(date(now.date))}</th><th>Förändring i antal saknade</th></tr></thead><tbody>${Object.keys(metricLabels).map(key=>{const b=stats(old,key),n=stats(current,key),d=n.missing-b.missing,valid=b.unknown===0&&n.unknown===0;return `<tr><td>${esc(metricLabels[key])}</td><td>${statCell(b)}</td><td>${statCell(n)}</td><td>${valid?`<span class="delta ${d<0?'good':d>0?'bad':''}">${d>0?'+':''}${d}</span>${added||removed?'<span class="small-note">Netto · personsammansättningen ändras</span>':''}`:'<span class="small-note">Ej jämförbart · kontroll saknas</span>'}</td></tr>`;}).join('')}</tbody></table>`;
  const list=data.snapshots.map(s=>({s,v:stats(scoped(s),state.metric)}));
  const max=Math.max(1,...list.map(x=>x.v.missing));
  $('timeline').innerHTML=list.map(({s,v})=>`<div class="timeline-row ${s.id===state.snapshot?'current':''}"><button class="timeline-label" data-measurement="${esc(s.id)}" aria-label="Visa mätning ${esc(date(s.date))}">${esc(date(s.date))} · ${esc(s.label)}</button><div class="bar-track" aria-hidden="true"><div class="bar-fill" style="width:${v.missing/max*100}%"></div></div><span class="timeline-value"><strong>${v.missing}</strong> saknas${v.unknown?'<br>'+v.unknown+' ej kontrollerade / okända':''}${v.total!==ids.size?'<br>'+(ids.size-v.total)+' saknar mätning':''}</span></div>`).join('');
  const changes=compareRows(before.records,now.records,ids);
  $('changes-count').textContent=changes.length+' ändrade kontroller / medlemskap hos '+new Set(changes.map(c=>c.id)).size+' personer. Ej kontrollerat → finns betyder en ny observation.';
  $('changes-table').innerHTML=changes.length?`<table><thead><tr><th>Ledamot</th><th>Parti</th><th>Kontroll</th><th>Före</th><th>Efter</th></tr></thead><tbody>${changes.map(c=>{const p=data.people[c.id]||{};return `<tr><td><button class="name-button" data-person="${esc(c.id)}">${esc(p.name||c.id)}</button></td><td>${party(p.party)}</td><td>${esc(metricLabels[c.key]||'Med i mätningen')}</td><td>${badge(c.before)}</td><td>${badge(c.after)}</td></tr>`;}).join('')}</tbody></table>`:'<div class="empty"><h3>Inga ändrade statusar i det här urvalet.</h3><p>Välj en annan jämförelsemätning eller ändra parti, län och sökning.</p></div>';
}
function renderDialog(){
  const dialog=$('person-dialog');
  if(!state.person){if(dialog.open)dialog.close();return;}
  const p=data.people[state.person];
  const recordSnap=snapshot().records.some(x=>x.id===state.person)?snapshot():data.snapshots.find(s=>s.id===state.compare);
  const r=recordSnap.records.find(x=>x.id===state.person);
  if(!p||!r){if(dialog.open)dialog.close();return;}
  const detailLink=(url,label)=>link(url,label+' ↗','button');
  const commons=p.commons?.[0];
  const image=(url,alt)=>safeUrl(url)?`<div class="portrait-wrap"><img src="${esc(safeUrl(url))}" alt="${esc(alt)}" loading="lazy" referrerpolicy="no-referrer"></div>`:'<div class="portrait-wrap image-placeholder">Ingen bild registrerad</div>';
  $('person-detail').innerHTML=`<h2 id="person-name">${esc(p.name)}</h2><p class="person-meta">${party(r.party)} · ${esc(r.county)}<br>Valkrets: ${esc(p.constituency)} · ${esc(date(recordSnap.date))}${recordSnap.id!==state.snapshot?' · ej med i vald mätning; visar jämförelsemätningen':''}</p><div class="detail-links">${r.qid?detailLink('https://www.wikidata.org/wiki/'+r.qid,'Wikidata'):''}${detailLink(p.svurl,'svWikipedia')}${detailLink('https://data.riksdagen.se/personlista/?iid='+encodeURIComponent(p.iid)+'&utformat=json','Riksdagens persondata')}${detailLink(wikiUrl(p.template),'Förväntad riksdagsmall')}${detailLink(wikiUrl(p.category),'Förväntad partikategori')}</div><div class="detail-statuses">${Object.keys(metricLabels).map(k=>`<div class="detail-status"><label>${esc(metricLabels[k])}</label>${badge(metric(r,k))}</div>`).join('')}</div><h3 style="font-size:14px">Jämför porträtt</h3><p class="method-note">Bilder, artikellänkar och licensmetadata hämtas från personens senaste tillgängliga rapport (${esc(p.metadataVersion)}), även när en äldre statusmätning är vald. Riksdagens porträtt har ingen fri Commons-licens registrerad i rapporten.</p><div class="images"><div class="image-card"><h3>Riksdagens porträtt</h3>${image(p.portrait,'Riksdagens porträtt av '+p.name)}<p>${link(p.portrait,'Öppna originalbild ↗')}</p></div><div class="image-card"><h3>Wikidata P18 / Commons</h3>${image(commons?.bild_url,'Commons-bild av '+p.name)}<p>${commons?link(commons.commons_url,commons.filnamn+' ↗')+'<br>Licens: '+(link(commons.licens_url,commons.licens)||esc(commons.licens||'Okänd'))+'<br>Fotograf: '+esc(commons.fotograf_upphovsperson||'Ej angiven'):'Ingen Commons-bild i personens senaste rapport.'}</p></div></div><details><summary>Senaste registrerade kontrolltider</summary><p class="method-note">${Object.entries(p.checked||{}).map(([k,v])=>esc(k)+': '+esc(date(v))).join('<br>')}</p></details><p class="detail-ids">sourceid / P8388: ${esc(p.id)}<br>intressent_id / P1214: ${esc(p.iid)}<br>Wikidata: ${esc(r.qid||'Ingen match')}<br>${link(recordSnap.source,'Källa för visad statusmätning ↗')} · ${link(p.metadataSource,'Källa för bilder och länkar ↗')}</p>`;
  $('person-detail').querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{const wrap=img.parentElement;wrap.textContent='Bilden kunde inte laddas. Använd originallänken.';wrap.classList.add('image-placeholder');},{once:true}));
  if(!dialog.open)dialog.showModal();
}
