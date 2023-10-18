
* [Riksdagens Öppna data](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/50)
* [Myndigheten DIGG](https://github.com/salgo60/DiggUptime/issues/47)
* [Nationell dataverkstad](https://github.com/salgo60/Anslagstavla/issues/3)
* [RAÄ](https://github.com/salgo60/SamlaLibris/issues/10)
* [Riksarkivet](https://github.com/salgo60/Svenskaforsamlingar/issues/2)
  * [Riksarkivet SBL](https://github.com/salgo60/Svenskaforsamlingar/issues/6)
* [Kungliga biblioteket LibrisXL](https://github.com/salgo60/spa2Commons/issues/15)
* Välfärdsstaten analyserad / riksdagen-corpus [feedback](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/164)


## Skuggbackloggar

Tanken med skuggbackloggar är att då informationsägaren inte kan hantera en publik prioriterad backlog så skapar vi "detta" med en skuggbacklog med saker vi ser saknas jmf [design pattern proxy](https://refactoring.guru/design-patterns/proxy)

* **NÄR** nedanstående organisationer börjar jobba agilt kan vi skicka in vår skuggbacklog till deras backlog och förhoppningsvis få en feedback vad som kommer att göras eller ej se video "[Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE)"

 ![image](https://github.com/salgo60/Wikidata_riksdagen-corpus/assets/14206509/44e76a1b-ed61-49cf-8308-1d657c2aa826)

<img width="881" alt="image" src="https://github.com/salgo60/Wikidata_riksdagen-corpus/assets/14206509/cd755cd2-97f9-4da9-81c2-81aebd61c804">


* **Skapa ett ekosystem** Co-Creation bygger på att strukturerad krav skickas mellan olika aktörer se [Riksdagen #96](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/96) / [Riksarkivet #25](https://github.com/salgo60/Svenskaforsamlingar/issues/25) / [SBL #26](https://github.com/salgo60/Svenskaforsamlingar/issues/25) / [RAÄ #29 Strukturerad kravinsamling](https://github.com/salgo60/SamlaLibris/issues/29) / [DIGG #99](https://github.com/salgo60/DiggUptime/issues/99)

* se [co-creation](https://forum.jobtechdev.se/t/har-ni-input-till-varens-meetups/263/3?u=salgo60) med scrum-of-scrums
   * **bra exempel på co-creation** projektet [Välfärdsstaten analyserad](https://www.westac.se/en/) som jobbar med Riksdagstrycket på GITHUB och där Riksdagens Öppna data, Riksarkivet, Kungliga biblioteket inte har bra data utan dom "måste" starta med det sm finns på Wikipedia/Wikidata se [Timeline](https://js.histropedia.com/apps/query-timeline/index.html?q=SELECT%20distinct%20?person%20?personLabel%20(SAMPLE(?SPA)%20AS%20?SPA)%20%20(sample(?bild)%20AS%20?bild)%20%0A?birth%20?death%20?partyLabel%20WHERE%20%7B%0A%0A%20%20VALUES%20?member%20%7B%0A%20%20%20%20wd:Q33071890%20%0A%20%20%20%20wd:Q81531912%20%0A%20%20%20%20wd:Q82697153%20%0A%20%20%20%20wd:Q10655178%20%0A%20%20%7D%0A%20%20?person%20wdt:P39%20?member;%0A%20%20%20%20wdt:P1343%20?source.%0A%20%20?person%20p:P1343%20?pTva.%0A%20%20OPTIONAL%7B?person%20wdt:P102%20?party%7D%0A%20%20OPTIONAL%7B?person%20wdt:P569%20?birth%7D%0A%20%20OPTIONAL%7B?person%20wdt:P570%20?death%7D%0A%20%20OPTIONAL%20%7B?pTva%20ps:P1343%20wd:Q110346241.%0A%20%20?pTva%20prov:wasDerivedFrom%20%5B%20pr:P4819%20?SPAid%20%5D.%7D%0A%0A%20%20OPTIONAL%20%7B?person%20wdt:P18%20?bild%7D.%0A%20%0A%20%20BIND(URI(CONCAT(%22https://portrattarkiv.se/details/%22,?SPAid))%20AS%20?SPA)%0A%0A%20%20SERVICE%20wikibase:label%20%7B%20bd:serviceParam%20wikibase:language%20%22sv,en%22.%20%7D%0A%7D%20GROUP%20BY%20%20?person%20?personLabel%20%20?death%20?birth%20?partyLabel%0Aorder%20by%20?partyLabel&md=true&g=article&l=SPA&t=personLabel&s=birth&e=death&i=bild&d=0&c=partyLabel&f=partyLabel&v=t) och jobba vidare med det [GITHUB yta](https://github.com/welfare-state-analytics/riksdagen-corpus/issues?q=is%3Aissue+sort%3Aupdated-desc)  och deras pressrelease "[Sveriges Riksdag 1867–2022: Ett ekosystem av länkad öppen data](https://www.umu.se/nyheter/5-miljoner-till-forskning-om-lankad-parlamentariska-data_11678700)"

[![image](https://github.com/salgo60/Wikidata_riksdagen-corpus/assets/14206509/581fd162-a733-4acf-8ec7-614a16ad825c)](https://forum.jobtechdev.se/t/har-ni-input-till-varens-meetups/263/3?u=salgo60)

[Exempel Riksdagsledamöter vad Wikidata redan har skapat](https://js.histropedia.com/apps/query-timeline/index.html?q=SELECT%20distinct%20?person%20?personLabel%20(SAMPLE(?SPA)%20AS%20?SPA)%20%20(sample(?bild)%20AS%20?bild)%20%0A?birth%20?death%20?partyLabel%20WHERE%20%7B%0A%0A%20%20VALUES%20?member%20%7B%0A%20%20%20%20wd:Q33071890%20%0A%20%20%20%20wd:Q81531912%20%0A%20%20%20%20wd:Q82697153%20%0A%20%20%20%20wd:Q10655178%20%0A%20%20%7D%0A%20%20?person%20wdt:P39%20?member;%0A%20%20%20%20wdt:P1343%20?source.%0A%20%20?person%20p:P1343%20?pTva.%0A%20%20OPTIONAL%7B?person%20wdt:P102%20?party%7D%0A%20%20OPTIONAL%7B?person%20wdt:P569%20?birth%7D%0A%20%20OPTIONAL%7B?person%20wdt:P570%20?death%7D%0A%20%20OPTIONAL%20%7B?pTva%20ps:P1343%20wd:Q110346241.%0A%20%20?pTva%20prov:wasDerivedFrom%20%5B%20pr:P4819%20?SPAid%20%5D.%7D%0A%0A%20%20OPTIONAL%20%7B?person%20wdt:P18%20?bild%7D.%0A%20%0A%20%20BIND(URI(CONCAT(%22https://portrattarkiv.se/details/%22,?SPAid))%20AS%20?SPA)%0A%0A%20%20SERVICE%20wikibase:label%20%7B%20bd:serviceParam%20wikibase:language%20%22sv,en%22.%20%7D%0A%7D%20GROUP%20BY%20%20?person%20?personLabel%20%20?death%20?birth%20?partyLabel%0Aorder%20by%20?partyLabel&md=true&g=article&l=SPA&t=personLabel&s=birth&e=death&i=bild&d=0&c=partyLabel&f=partyLabel&v=t) som sedan förädlas av [HUMLAB](https://www.umu.se/nyheter/5-miljoner-till-forskning-om-lankad-parlamentariska-data_11678700) där all aktivitet sker på [GITHUB](https://github.com/welfare-state-analytics/riksdagen-corpus/issues?q=is%3Aissue+sort%3Aupdated-desc)

[<img width="1365" alt="image" src="https://github.com/salgo60/Wikidata_riksdagen-corpus/assets/14206509/ff321034-2d65-419f-98bf-e99e4dd46abd">](https://js.histropedia.com/apps/query-timeline/index.html?q=SELECT%20distinct%20?person%20?personLabel%20(SAMPLE(?SPA)%20AS%20?SPA)%20%20(sample(?bild)%20AS%20?bild)%20%0A?birth%20?death%20?partyLabel%20WHERE%20%7B%0A%0A%20%20VALUES%20?member%20%7B%0A%20%20%20%20wd:Q33071890%20%0A%20%20%20%20wd:Q81531912%20%0A%20%20%20%20wd:Q82697153%20%0A%20%20%20%20wd:Q10655178%20%0A%20%20%7D%0A%20%20?person%20wdt:P39%20?member;%0A%20%20%20%20wdt:P1343%20?source.%0A%20%20?person%20p:P1343%20?pTva.%0A%20%20OPTIONAL%7B?person%20wdt:P102%20?party%7D%0A%20%20OPTIONAL%7B?person%20wdt:P569%20?birth%7D%0A%20%20OPTIONAL%7B?person%20wdt:P570%20?death%7D%0A%20%20OPTIONAL%20%7B?pTva%20ps:P1343%20wd:Q110346241.%0A%20%20?pTva%20prov:wasDerivedFrom%20%5B%20pr:P4819%20?SPAid%20%5D.%7D%0A%0A%20%20OPTIONAL%20%7B?person%20wdt:P18%20?bild%7D.%0A%20%0A%20%20BIND(URI(CONCAT(%22https://portrattarkiv.se/details/%22,?SPAid))%20AS%20?SPA)%0A%0A%20%20SERVICE%20wikibase:label%20%7B%20bd:serviceParam%20wikibase:language%20%22sv,en%22.%20%7D%0A%7D%20GROUP%20BY%20%20?person%20?personLabel%20%20?death%20?birth%20?partyLabel%0Aorder%20by%20?partyLabel&md=true&g=article&l=SPA&t=personLabel&s=birth&e=death&i=bild&d=0&c=partyLabel&f=partyLabel&v=t)


### Myndigheter et al där vi startat skapa en skuggbacklog
* [Riksdagens Öppna data](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/50)
* [Myndigheten DIGG](https://github.com/salgo60/DiggUptime/issues/47)
* [Nationell dataverkstad](https://github.com/salgo60/Anslagstavla/issues/3)
* [RAÄ](https://github.com/salgo60/SamlaLibris/issues/10)
* [Riksarkivet](https://github.com/salgo60/Svenskaforsamlingar/issues/2)
  * [Riksarkivet SBL](https://github.com/salgo60/Svenskaforsamlingar/issues/6)
* [Kungliga biblioteket LibrisXL](https://github.com/salgo60/spa2Commons/issues/15)
* Lagrummet.se och [överklagan till Regeringskansliet](https://github.com/salgo60/LagrummetLight/issues/3)
### Projekt
* Välfärden analyseras - kör själva [GUTHUB issues](https://github.com/welfare-state-analytics/riksdagen-corpus/issues?q=is%3Aissue+) arbetar hardcore med incheckningar som testdrivet letar fel i data exempel pull [0.8.0 där fel i Wikidata hittas](https://github.com/welfare-state-analytics/riksdagen-corpus/pull/258#issuecomment-1495631051)
* [Nationell dataverkstad](https://github.com/salgo60/Anslagstavla/issues/3) - finns lite spretigt på [GITLAB](https://gitlab.com/groups/sarskilt-viktiga-datamangder/-/issues) känns som ett projekt med begränsad kompetens och ovana att jobba strukturerat se [#26](https://github.com/salgo60/Anslagstavla/issues/26) är inte första gången Vinnova projekt körs med samma besättning som inte levererar [#77-3](https://github.com/salgo60/DiggUptime/issues/77#issuecomment-1308500384)
* ...
### Misc
* [Projektkyrkogården](https://github.com/salgo60/DiggUptime/issues/77)
