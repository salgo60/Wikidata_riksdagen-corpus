# Riksdagen–Wikidata Audit

Buildless audit dashboard, deployed at https://riksdagen-wikidata-audit.salgo60.chatgpt.site. The data comes from salgo60/Wikidata_riksdagen-corpus. Source is versioned in the Site's own Git repository; a sanitized source ZIP is available from the dashboard footer.

## Data

Source: salgo60/Wikidata_riksdagen-corpus at commit `01ff41dc40ba7bca16eabab5e716f2388eb3dc68`.
`scripts/build-data.py` downloads the upstream JSON files into data/source with --refresh. It verifies that the last historical measurement agrees with the latest report for every saved status and produces a compact dist/data.json. The downloadable ZIP contains application source, conversion script and tests; data files are generated from the existing upstream reports.

13 measurements cover 8–13 October 2026, using recorded check or measurement timestamps rather than directory names. No live Wikipedia/WDQS requests, scraping, automatic edits or scheduled refreshes are made by the dashboard.

History uses sourceid / P8388, never name matching. Historical v15 county filtering uses the most recent available report for each person's county metadata because history did not save it. Unmeasured checks remain distinct from missing checks. The history cohort follows party, county and search across the two compared measurements; status filters apply to the member table. Additions and removals are shown separately, and net changes are labelled when the roster changes. Portraits, Commons metadata and article links come from the most recent available report for the person and are explicitly labelled that way in the detail view. The catalog includes 350 people across time; each snapshot has 349 members.

## Local checks

```sh
python scripts/build-data.py --refresh
node --test tests/audit.test.mjs
```

For an intentional refresh, resolve the latest upstream SHA and download the same report paths:

```sh
python scripts/build-data.py --ref main --refresh
node --test tests/audit.test.mjs
```

Review changed counts and update dated regression expectations before deployment. The script expects the existing v15 schema and fails if the history and report disagree. If upstream report paths change, update PATHS.

## URL and access

Query parameters persist the selected measurement, party, county, image and article statuses, all template checks, search, sort, detail view, and comparison. Existing v15 hash parameters q, status, party, svwiki, illustration, authority, riksdagsmall, infobox and partikategori are also accepted. Browser back/forward restores state. CSV exports the entire filtered member set from the selected measurement.

Access is enforced by the hosting configuration. The deployed Site's access was public when inspected on 13 October 2026. The neutral "Prototyp" label is an application label, not an access indicator. Copying a filter URL does not change access settings. The source ZIP contains no Site identity, Git credentials or hosting configuration.

For another static host, serve dist/ after generating data.json. For a local browser preview outside the managed environment, run `python -m http.server 8000 --directory dist` and open http://localhost:8000.

Browser QA is unavailable in this managed environment because the control-browser skill is not installed. 14 tests cover provenance, all party/county/image intersections, independent template filters, search, URL restoration, old hash URLs, missing checks, roster changes, CSV and URL safety. HTML IDs and asset references were checked. Ten external destinations returned HTTP 200/206, including Wikidata, svWikipedia, the party template, Commons, a licence, Riksdagen portrait/persondata and the original v15 report; results are in tests/link-check-results.json.
