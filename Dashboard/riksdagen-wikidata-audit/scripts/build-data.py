"""Convert the repository's reports to a small, provenance-preserving browser dataset."""
import json, hashlib, pathlib, urllib.request, argparse, datetime

ROOT = pathlib.Path(__file__).resolve().parents[1]
REPO = 'salgo60/Wikidata_riksdagen-corpus'
FIELDS = {
    'illustration':'illustrationsbehov_status', 'authority':'auktoritetsdata_status',
    'riksdagsmall':'riksdagsmall_status', 'infobox':'infobox_status',
    'partikategori':'partikategori_status', 'p39':'p39_status',
    'p8388':'p8388_status', 'p1214':'p1214_status'
}
PATHS = [
    'Notebook/riksdagen_audit_20261007_v9/bildkontroll_resultat.json',
    'Notebook/riksdagen_audit_20261008_v12/bildkontroll_resultat.json',
    'Notebook/riksdagen_audit_20261009_v15/bildkontroll_resultat.json',
    'Notebook/riksdagen_audit_20261009_v15/svwiki_status_historik.json',
    'Notebook/riksdagen_audit_20261009_v15/svwiki_status.json'
]
PINNED = '01ff41dc40ba7bca16eabab5e716f2388eb3dc68'
parser = argparse.ArgumentParser()
parser.add_argument('--ref', default=PINNED, help='Commit SHA, or main to resolve the latest commit')
parser.add_argument('--refresh', action='store_true', help='Download source JSON from GitHub')
args = parser.parse_args()
ref = args.ref
if ref == 'main':
    ref = json.load(urllib.request.urlopen('https://api.github.com/repos/'+REPO+'/commits/main'))['sha']
sources = []
raw = []
for path in PATHS:
    local = ROOT/'data/source'/path.removeprefix('Notebook/')
    if args.refresh:
        b = urllib.request.urlopen('https://raw.githubusercontent.com/'+REPO+'/'+ref+'/'+path, timeout=40).read()
        local.parent.mkdir(parents=True, exist_ok=True)
        local.write_bytes(b)
    b = local.read_bytes()
    sha = hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest()
    sources.append({'path':path, 'blob':sha, 'url':'https://github.com/'+REPO+'/blob/'+ref+'/'+path})
    raw.append(json.loads(b))
latest = raw[2]
people = {}
catalog = {}
for source_index in [0, 1, 2]:
    for p in raw[source_index]:
        catalog[p['sourceid']] = (p, source_index)
for p, source_index in catalog.values():
    sv = next((w for w in p.get('wikipedia',[]) if w['sprak']=='sv'), {})
    people[p['sourceid']] = {
        'id':p['sourceid'], 'name':p['namn'], 'party':p['parti'], 'county':p.get('lan',''),
        'constituency':p.get('valkrets',''), 'qid':p.get('qid',''), 'iid':p.get('intressent_id',''),
        'svurl':sv.get('url',''), 'svtitle':sv.get('titel',''), 'portrait':p.get('riksdagen_bild',''),
        'commons':p.get('commons_bilder',[]), 'template':p.get('riksdagsmall_forvantad',''),
        'category':p.get('partikategori_forvantad',''),
        'checked':{k:v for k,v in p.items() if k.endswith('_kontrollerad') and v},
        'metadataSource':sources[source_index]['url'],
        'metadataVersion':['v9','v12','v15'][source_index],
    }
def status(v):
    return v if v in ['finns','saknas','ej_aktuell','okant'] else 'ej_kontrollerat'
def normalize(p, pid):
    meta = people.get(pid, {})
    return {'id':pid, 'name':p.get('namn',meta.get('name',pid)), 'party':p.get('parti',meta.get('party','')),
        'county':p.get('lan',meta.get('county','')), 'qid':p.get('qid',''),
        'free':p.get('fri_commons_bild'),
        'p18':True if p.get('status')=='Har bild (P18)' else False if p.get('status')=='Saknar bild (P18)' else None,
        'svwiki':p.get('sv_wikipedia','okant'),
        **{k:status(p.get(v)) for k,v in FIELDS.items()}}
snapshots=[]
for i,version in [(0,'v9'),(1,'v12')]:
    rows=raw[i]
    # These are check times, not dates inferred from the directory name.
    date=max(v for p in rows for k,v in p.items() if k.endswith('_kontrollerad') and v)
    snapshots.append({'id':version, 'date':date, 'label':version, 'kind':'report',
        'source':sources[i]['url'], 'records':[normalize(p,p['sourceid']) for p in rows]})
history=raw[3]['matningar']
for i,m in enumerate(history):
    measurement_id = datetime.datetime.fromisoformat(m['matning_utc']).strftime('utc-%Y%m%dT%H%M%SZ')
    snapshots.append({'id':measurement_id, 'date':m['matning_utc'], 'label':'v15', 'kind':'history',
        'systemdate':m['systemdatum'], 'source':sources[3]['url'],
        'records':[normalize(p,pid) for pid,p in m['personer'].items()]})
# Verify that the most recent history record describes the same statuses as the report.
reported={p['sourceid']:normalize(p,p['sourceid']) for p in latest}
for row in snapshots[-1]['records']:
    for key in ['free','svwiki',*FIELDS]:
        assert row[key] == reported[row['id']][key], (row['id'],key)
snapshots[-1]['records']=list(reported.values())
snapshots[-1]['source']=sources[2]['url']
snapshots[-1]['kind']='latest'
out={'schema':1,'repository':'https://github.com/'+REPO,'commit':ref,'latest':snapshots[-1]['id'],
    'sources':sources, 'people':people, 'snapshots':snapshots,
    'notes':{'county_history':'Historiska mätningar saknar län. Län för dessa rader hämtas från den senaste rapporten.',
    'dates':'v9 och v12 använder senaste inspelade kontrolltid. v15 använder matning_utc.'}}
(ROOT/'dist/data.json').write_text(json.dumps(out,ensure_ascii=False,separators=(',',':')))
print(f"Built {len(people)} people, {len(snapshots)} measurements; {len(json.dumps(out,ensure_ascii=False)):,} characters")
