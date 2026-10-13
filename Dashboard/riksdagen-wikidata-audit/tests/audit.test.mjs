import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {checks,filterKeys,defaults,parseState,stateUrl,filterRows,stats,compareRows,safeUrl,wikiUrl,csv} from '../dist/model.mjs';
const root=new URL('../',import.meta.url);
const read=p=>JSON.parse(readFileSync(new URL(p,root),'utf8'));
const data=read('dist/data.json');
const raw=read('data/source/riksdagen_audit_20261009_v15/bildkontroll_resultat.json');
const latest=data.snapshots.at(-1).records;
const state=defaults(data);
const withFilters=filters=>({...state,...filters});

test('Upstream source files match the inspected GitHub blobs',()=>{
  const expected=['623080131bb826fbbe8d9304794985518bcd9d6f','16de3e001a7d10bd1eb3afdc6db94339521e6f87','a0e8db081bcf385fd465416e7177cdee093df18c','0ee753c7ad19f3dd18cd77b9e313894ccfa79921','6f3b52b2cfee96dea527e8ec484e961f3746a527'];
  data.sources.forEach((s,i)=>{const bytes=readFileSync(new URL('data/source/'+s.path.replace(/^Notebook\//,''),root));const sha=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');assert.equal(sha,expected[i]);assert.equal(s.blob,sha);});
});
test('13 chronological snapshots, 349 unique IDs per snapshot, 21 counties',()=>{
  assert.equal(data.snapshots.length,13);assert.equal(Object.keys(data.people).length,350);
  assert.equal(new Set(latest.map(r=>r.county)).size,21);
  data.snapshots.forEach((s,i)=>{assert.equal(s.records.length,349);assert.equal(new Set(s.records.map(r=>r.id)).size,349);if(i)assert.ok(new Date(s.date)>new Date(data.snapshots[i-1].date));});
});
test('Latest totals and known party/county intersections match source report',()=>{
  assert.equal(filterRows(latest,state).length,349);
  assert.equal(filterRows(latest,withFilters({status:'free'})).length,169);
  assert.equal(filterRows(latest,withFilters({status:'no_free'})).length,180);
  assert.equal(filterRows(latest,withFilters({svwiki:'nej'})).length,0);
  assert.equal(filterRows(latest,withFilters({riksdagsmall:'saknas'})).length,0);
  assert.equal(filterRows(latest,withFilters({infobox:'saknas'})).length,88);
  assert.equal(filterRows(latest,withFilters({party:'L',status:'free'})).length,6);
  assert.equal(filterRows(latest,withFilters({party:'L',infobox:'saknas'})).length,9);
  assert.equal(filterRows(latest,withFilters({county:'Stockholms län',status:'free'})).length,47);
  assert.equal(filterRows(latest,withFilters({party:'M',county:'Stockholms län',status:'no_free'})).length,10);
});
test('All party × county × image intersections use AND and agree with raw upstream rows',()=>{
  for(const party of new Set(raw.map(r=>r.parti)))for(const county of new Set(raw.map(r=>r.lan)))for(const free of [true,false]){
    const expected=raw.filter(r=>r.parti===party&&r.lan===county&&r.fri_commons_bild===free).map(r=>r.sourceid).sort();
    const actual=filterRows(latest,withFilters({party,county,status:free?'free':'no_free'})).map(r=>r.id).sort();
    assert.deepEqual(actual,expected);
  }
});
test('Every template filter agrees with source status, including combined filters',()=>{
  const mapping={riksdagsmall:'riksdagsmall_status',infobox:'infobox_status',authority:'auktoritetsdata_status',illustration:'illustrationsbehov_status',partikategori:'partikategori_status',p39:'p39_status',p8388:'p8388_status',p1214:'p1214_status'};
  for(const [key,source] of Object.entries(mapping))for(const value of ['finns','saknas','ej_aktuell','okant','ej_kontrollerat']){
    assert.deepEqual(filterRows(latest,withFilters({[key]:value})).map(r=>r.id).sort(),raw.filter(r=>r[source]===value).map(r=>r.sourceid).sort());
  }
  const expected=raw.filter(r=>r.parti==='L'&&r.infobox_status==='saknas'&&r.partikategori_status==='saknas'&&!r.fri_commons_bild).map(r=>r.sourceid).sort();
  assert.deepEqual(filterRows(latest,withFilters({party:'L',infobox:'saknas',partikategori:'saknas',status:'no_free'})).map(r=>r.id).sort(),expected);
});
test('Swedish search, Q-ID search and UUID search return the correct person',()=>{
  for(const q of ['åDAHL','Q114031247','59b84d84-3bc8-4175-a3b7-16f5ed8f6b25'])assert.equal(filterRows(latest,withFilters({q}))[0].name,'Anders Ådahl');
  assert.equal(filterRows(latest,withFilters({q:'not-a-member-9876'})).length,0);
});
test('Older article observations and unmeasured templates remain distinct',()=>{
  const first=data.snapshots[0].records;
  assert.equal(filterRows(first,withFilters({svwiki:'nej'})).length,24);
  assert.equal(filterRows(first,withFilters({riksdagsmall:'ej_kontrollerat'})).length,349);
  assert.equal(filterRows(first,withFilters({riksdagsmall:'saknas'})).length,0);
  assert.equal(stats(first,'riksdagsmall').unknown,349);
});
test('Shared URL restores all filters, measurement, view, sort and detail',()=>{
  const s={...state,q:'Ådahl & test / #',party:'C',county:'Västra Götalands län',status:'no_free',svwiki:'ja',riksdagsmall:'finns',infobox:'saknas',authority:'finns',illustration:'ej_aktuell',partikategori:'saknas',p39:'finns',p8388:'finns',p1214:'finns',snapshot:'v9',compare:'v12',view:'history',sort:'county',dir:'desc',metric:'infobox',person:raw[0].sourceid};
  const url=stateUrl('https://riksdagen-wikidata-audit.salgo60.chatgpt.site/?unrelated=1#old',s,data);
  assert.deepEqual(parseState(url,data),s);assert.ok(!url.includes('unrelated'));assert.ok(!new URL(url).hash);
  assert.equal(new URL(stateUrl('https://example.org',state,data)).searchParams.get('snapshot'),data.latest);
});
test('Original v15 hash conventions import, with query parameters taking precedence',()=>{
  const s=parseState('https://example.org/?party=L#party=C&svwiki=nej&status=Saknar%20bild%20(P18)&authority=saknas',data);
  assert.equal(s.party,'L');assert.equal(s.svwiki,'nej');assert.equal(s.status,'no_p18');assert.equal(s.authority,'saknas');
});
test('Invalid URL values recover to usable defaults; restoring back/forward URLs is deterministic',()=>{
  const s=parseState('https://example.org/?party=XXX&county=X&snapshot=bad&compare=bad&view=bad&sort=bad&dir=bad&metric=bad&svwiki=bad&infobox=bad&status=bad&person=bad',data);
  assert.deepEqual(s,state);
  const a=stateUrl('https://example.org',withFilters({party:'C'}),data),b=stateUrl(a,withFilters({party:'L'}),data);
  assert.equal(parseState(a,data).party,'C');assert.equal(parseState(b,data).party,'L');assert.equal(parseState(a,data).party,'C');
});
test('History matches by stable ID: 122 template fixes, one replacement and 24 articles',()=>{
  const baseline=data.snapshots.find(s=>s.kind==='history').records,ids=new Set([...latest,...baseline].map(r=>r.id));
  const changes=compareRows(baseline,latest,ids);
  const templates=changes.filter(c=>c.key==='riksdagsmall');assert.equal(templates.length,122);
  assert.ok(templates.every(c=>c.before==='saknas'&&c.after==='finns'));
  assert.equal(changes.filter(c=>c.key==='membership').length,2);
  assert.ok(changes.some(c=>c.id==='9842d41a-513d-4030-9799-7a44b6d775ce'&&c.key==='membership'&&c.after==='saknas'));
  assert.ok(changes.some(c=>c.id==='234d4dfe-48a4-44d3-8ff0-323454d8cc68'&&c.key==='membership'&&c.after==='finns'));
  const articles=compareRows(data.snapshots[0].records,latest,ids).filter(c=>c.key==='svwiki');assert.equal(articles.length,24);
  assert.equal(compareRows(latest,latest,ids).length,0);
  const partial=compareRows([],latest,new Set([latest[0].id]));assert.equal(partial[0].key,'membership');
});
test('CSV preserves leading-zero identifiers, Unicode and commas; prevents formula cells',()=>{
  const out=csv([{...latest[0],name:'=HYPERLINK("bad")'}]);
  assert.ok(out.startsWith('\ufeff'));assert.ok(out.includes('"\'=HYPERLINK(""bad"")"'));assert.ok(out.includes(latest[0].id));
  assert.equal(csv(latest).split('\r\n').length,350);
});
test('Every member and template link is a valid HTTPS destination; unsafe URL schemes rejected',()=>{
  assert.equal(safeUrl('javascript:alert(1)'),'');assert.equal(safeUrl('data:text/html,hello'),'');assert.equal(safeUrl('not-a-url'),'');
  assert.equal(safeUrl('http://commons.wikimedia.org/wiki/File:X'),'https://commons.wikimedia.org/wiki/File:X');
  for(const p of Object.values(data.people)){
    assert.match(p.id,/^[a-f0-9-]{36}$/);assert.match(p.qid,/^Q\d+$/);assert.match(p.iid,/^\d+$/);
    for(const value of [p.svurl,p.portrait,wikiUrl(p.template),wikiUrl(p.category),...p.commons.flatMap(c=>[c.commons_url,c.bild_url,c.licens_url])].filter(Boolean))assert.ok(safeUrl(value));
    assert.equal(new URL(p.svurl).hostname,'sv.wikipedia.org');
    assert.equal(new URL(p.portrait).hostname,'data.riksdagen.se');
  }
});
test('Static asset references and every filter control exist in the page',()=>{
  const html=readFileSync(new URL('dist/index.html',root),'utf8'),app=readFileSync(new URL('dist/app.mjs',root),'utf8');
  for(const k of [...filterKeys,'snapshot','compare','metric'])assert.ok(html.includes('id="'+k+'"'));
  for(const name of ['app.mjs','model.mjs','style.css','data.json'])assert.ok(existsSync(new URL('dist/'+name,root)));
  assert.ok(!html.includes('cdn.'));assert.ok(!app.includes('innerHTML = location'));assert.ok(html.includes('noindex,nofollow'));
});
