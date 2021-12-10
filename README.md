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
      * ""   
   * [Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents](https://www.wikidata.org/wiki/Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents)
     * [Most common properties on a certain document type](https://www.wikidata.org/wiki/Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents/Most_common_properties_on_a_certain_document_type) 
   * One of the best MP project is [Wikidata:WikiProject British Politicians](https://www.wikidata.org/wiki/Wikidata:WikiProject_British_Politicians)
     * [Sample Queries](https://www.wikidata.org/wiki/Wikidata:WikiProject_British_Politicians/Sample_Queries)  
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
