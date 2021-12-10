# Wikidata / riksdagen-corpus
repository for matching Wikidata with [riksdagen-corpus](https://github.com/welfare-state-analytics/riksdagen-corpus)

1. I will use [Open Refine](https://www.wikidata.org/wiki/Wikidata:Tools/OpenRefine) and match with Wikidata
1. The plan  
    1.  Issues I add to [Issues](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues) in this repository - (tag them if I need help from project [welfare-state-analytics](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues?q=is%3Aissue+is%3Aopen+label%3Awelfare-state-analytics))
    1. If a person is missing in WIkidata I add them
    1. create a mismatch Notebook to see where we have differencies

## Misc
* SPARQL query finding [all Wikidata external properties](https://w.wiki/4XQi) for people in Wikidata with [Property:P39](https://www.wikidata.org/wiki/Property:P39) "position held" Swedish "Riksdagen"  
* About [integrating with Wikidata](https://github.com/salgo60/Wikidata_riksdagen-corpus/discussions/4) "Wikidata good patterns #4"
* Interesting WIkidata projects 
   * [Wikidata:WikiProject_every_politician](https://www.wikidata.org/wiki/Wikidata:WikiProject_every_politician) 
      * "The overall aim of this WikiProject is to have complete and consistently structured data across the world on all elected representatives, from National to Local level"
   * [Wikidata:WikiProject every politician/Sweden](https://www.wikidata.org/wiki/Wikidata:WikiProject_every_politician/Sweden)
      * One active user is Tony Bowden (GITHUB [tmtmtmtm](https://coderstats.net/github/#tmtmtmtm)= he has created GITHUB repositories for wevscarping countries data example Sweden  [sweden-riksdag-api-current](https://github.com/every-politician-scrapers/sweden-riksdag-api-current) latest [diff](https://github.com/every-politician-scrapers/sweden-riksdag-api-current/blob/main/data/diff.csv) example ["Update data: Mon Dec 6 10:31:53 UTC 2021"](https://github.com/every-politician-scrapers/sweden-riksdag-api-current/commit/8f02afb9e82bf9643fdbb769820d3ca543f49ce4) 
   * [Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents](https://www.wikidata.org/wiki/Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents)
     * [Most common properties on a certain document type](https://www.wikidata.org/wiki/Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents/Most_common_properties_on_a_certain_document_type) 
       * Example [query](https://query.wikidata.org/embed.html#%23defaultView%3AGraph%0ASELECT%20%3Fauthor1%20%3Fauthor1Label%20%3Frgb%20%3Fauthor2%20%3Fauthor2Label%0AWITH%20%7B%0A%20SELECT%20(COUNT(%3Fitem)%20AS%20%3Fcount)%20%3Fauthor1%20%3Fauthor2%20%20WHERE%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP8433%20%3Friks.%0A%20%20%20%20%3Fitem%20wdt%3AP50%20%3Fauthor1%2C%3Fauthor2.%0A%20%20%20%20%3Fitem%20wdt%3AP577%20%3FpubDate%20%20%0A%20%20%20FILTER%20(%20Year(%3FpubDate)%20%3E%202018)%0A%20%20%7D%0A%20%20GROUP%20BY%20%3Fauthor1%20%3Fauthor2%20%0A%20%20ORDER%20BY%20DESC(%3Fcount)%0A%7D%0AAS%20%25authors%0AWITH%20%7B%0A%20%20SELECT%20%3Fauthor1%20%3Fauthor2%20%3Frgb%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25authors%0A%20%20%20%20%0A%20%20%20%20%23%20Exclude%20self-links%0A%20%20%20%20FILTER%20(%3Fauthor1%20!%3D%20%3Fauthor2)%0A%20%20%20%20%0A%20%20%20%20%23%20Color%20according%20to%20party%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fauthor1%20wdt%3AP102%20%3Fparty%20.%20%0A%20%20%20%20%20%20%3Fparty%20wdt%3AP465%20%3Frgb%20.%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%20AS%20%25result%0AWHERE%20%7B%0A%20%20INCLUDE%20%25result%0A%20%20%23%20Label%20the%20results%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22sv%2Cen%22.%20%7D%0A%20%20%7D) find all
   * One of the best MP project is [Wikidata:WikiProject British Politicians](https://www.wikidata.org/wiki/Wikidata:WikiProject_British_Politicians)
     * [Sample Queries](https://www.wikidata.org/wiki/Wikidata:WikiProject_British_Politicians/Sample_Queries)
     * Andrew gray twitter [@generalising](https://twitter.com/generalising) is worth follow see example [tweet queries](https://twitter.com/generalising/status/1127156761176223744)  
* The ShEx we have for Riksdagsledamöter in Wikidata [EntitySchema:E134](https://www.wikidata.org/wiki/EntitySchema:E134)
  * Video when this schema was created "[Wikipedia Weekly Network - Entity Schemas and Shape Expressions (ShEx)](https://www.youtube.com/watch?v=nM8kXuZM3lQ)"
* Wikidata related objects to the Swedish PM
  * befattning [P39](https://www.wikidata.org/wiki/Property:P39)
     * [Q33071890](https://www.wikidata.org/wiki/Q33071890?uselang=sv) "förstakammarledamot" - [graf](https://w.wiki/4Xch) 
     * [Q81531912](https://www.wikidata.org/wiki/Q81531912?uselang=sv) "andrakammarledamot"  - [graf](https://w.wiki/4Xcf)
     * [Q10655178](https://www.wikidata.org/wiki/Q10655178?uselang=sv) "ledamot av Sveriges riksdag" - [graf](https://w.wiki/4Xcj) 
     * [Q82697153](https://www.wikidata.org/wiki/Q82697153?uselang=sv) "ledamot av Sveriges ståndsriksdag" - [graf](https://w.wiki/4Xct) 
  * parlamentsgrupp [P4100](https://www.wikidata.org/wiki/Property:P4100)   
* [Creating parliament charts with wikidata](https://blog.k-nut.eu/wikidata-parliament-svg)
## Scholia
Scholia is a service that creates visual scholarly profiles for topics, people, organizations, species, chemicals, etc using bibliographic and other information in Wikidata - [satistics](https://scholia.toolforge.org/statistics) = 37,436,027Scholarly articles
  * latest Wikidata [related research papers](https://scholia.toolforge.org/topic/Q2013)
     * exam ple SPARQL [co-authors graph for topic Wikidata](https://w.wiki/3Jhi) 
  * latest research paper in Wikidata [from Uppsala Uniuversity](https://scholia.toolforge.org/organization/Q185246)
