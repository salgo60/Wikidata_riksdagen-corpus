# Wikidata / riksdagen-corpus
repository for matching [Wikidata](https://www.youtube.com/watch?v=m_9_23jXPoE) with [riksdagen-corpus](https://github.com/welfare-state-analytics/riksdagen-corpus)

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
      * One active user is Tony Bowden (GITHUB [tmtmtmtm](https://coderstats.net/github/#tmtmtmtm)) he has created GITHUB repositories for webscarping more countries data example Sweden [sweden-riksdag-api-current](https://github.com/every-politician-scrapers/sweden-riksdag-api-current) latest [diff](https://github.com/every-politician-scrapers/sweden-riksdag-api-current/blob/main/data/diff.csv) example ["Update data: Mon Dec 6 10:31:53 UTC 2021"](https://github.com/every-politician-scrapers/sweden-riksdag-api-current/commit/8f02afb9e82bf9643fdbb769820d3ca543f49ce4) 
     * [Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents](https://www.wikidata.org/wiki/Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents)
       * [Most common properties on a certain document type](https://www.wikidata.org/wiki/Wikidata:WikiProject_Sweden/Swedish_Riksdag_documents/Most_common_properties_on_a_certain_document_type) 
         * Example [query](https://query.wikidata.org/embed.html#%23defaultView%3AGraph%0ASELECT%20%3Fauthor1%20%3Fauthor1Label%20%3Frgb%20%3Fauthor2%20%3Fauthor2Label%0AWITH%20%7B%0A%20SELECT%20(COUNT(%3Fitem)%20AS%20%3Fcount)%20%3Fauthor1%20%3Fauthor2%20%20WHERE%20%7B%0A%20%20%20%20%3Fitem%20wdt%3AP8433%20%3Friks.%0A%20%20%20%20%3Fitem%20wdt%3AP50%20%3Fauthor1%2C%3Fauthor2.%0A%20%20%20%20%3Fitem%20wdt%3AP577%20%3FpubDate%20%20%0A%20%20%20FILTER%20(%20Year(%3FpubDate)%20%3E%202018)%0A%20%20%7D%0A%20%20GROUP%20BY%20%3Fauthor1%20%3Fauthor2%20%0A%20%20ORDER%20BY%20DESC(%3Fcount)%0A%7D%0AAS%20%25authors%0AWITH%20%7B%0A%20%20SELECT%20%3Fauthor1%20%3Fauthor2%20%3Frgb%20WHERE%20%7B%0A%20%20%20%20INCLUDE%20%25authors%0A%20%20%20%20%0A%20%20%20%20%23%20Exclude%20self-links%0A%20%20%20%20FILTER%20(%3Fauthor1%20!%3D%20%3Fauthor2)%0A%20%20%20%20%0A%20%20%20%20%23%20Color%20according%20to%20party%0A%20%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Fauthor1%20wdt%3AP102%20%3Fparty%20.%20%0A%20%20%20%20%20%20%3Fparty%20wdt%3AP465%20%3Frgb%20.%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%20AS%20%25result%0AWHERE%20%7B%0A%20%20INCLUDE%20%25result%0A%20%20%23%20Label%20the%20results%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22sv%2Cen%22.%20%7D%0A%20%20%7D) find all
       * SPARQL [Vilka skriver motioner ihop i Svenska Riksdagen 2018](https://w.wiki/YF7) - [tweet](https://twitter.com/salgo60/status/1288735899346509825?s=20)
![](https://pbs.twimg.com/media/EeKCSw6WoAURSlW?format=png&name=medium)

       * SPARQL [Just showing the interactions between two MPs not in the same party when writing a motion 2018 in the Swedish Parliament](https://w.wiki/YPN)
![](https://pbs.twimg.com/media/EeUEhoKXsAEAwQX?format=png&name=large) [tweet](https://twitter.com/salgo60/status/1289442989035728897?s=20)
       * SPARQL [birth and death places WIkidata has for Swedish MPs ](https://w.wiki/4XiX) see [video](https://www.youtube.com/watch?v=4__-DddldCw)
       
   <img src="https://lh3.googleusercontent.com/-RyM_7CgAT_Q/YbMdybZnaII/AAAAAAAA3aM/MHGb7MpK9VEqYwXu0zjXux9ILo5EG-BfgCNcBGAsYHQ/image.png" width="400" />
    
     * [Wikidata:WikiProject British Politicians](https://www.wikidata.org/wiki/Wikidata:WikiProject_British_Politicians) one of the best country MP projects 
       * [Sample Queries](https://www.wikidata.org/wiki/Wikidata:WikiProject_British_Politicians/Sample_Queries)
       * Andrew gray twitter [@generalising](https://twitter.com/generalising) is worth follow see example [tweet queries](https://twitter.com/generalising/status/1127156761176223744)  
   * [Wikidata:WikiProject Country subdivision](https://www.wikidata.org/wiki/Wikidata:WikiProject_Country_subdivision) "Any geographically based political division within a country is covered by this WikiProject" 
      * [List of administrative divisions by country](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country)
        * [Svenska Församlingar i Wikidata](https://salgo60.github.io/Svenskaforsamlingar) 
* The ShEx we have for Riksdagsledamöter in Wikidata [EntitySchema:E134](https://www.wikidata.org/wiki/EntitySchema:E134)
  * Video when this schema was created "[Wikipedia Weekly Network - Entity Schemas and Shape Expressions (ShEx)](https://www.youtube.com/watch?v=nM8kXuZM3lQ)"
* Wikidata related objects for Swedish PMs
  * befattning [P39](https://www.wikidata.org/wiki/Property:P39)
     * [Q33071890](https://www.wikidata.org/wiki/Q33071890?uselang=sv) "förstakammarledamot" - [graf](https://w.wiki/4Xch) 
     * [Q81531912](https://www.wikidata.org/wiki/Q81531912?uselang=sv) "andrakammarledamot"  - [graf](https://w.wiki/4Xcf)
     * [Q10655178](https://www.wikidata.org/wiki/Q10655178?uselang=sv) "ledamot av Sveriges riksdag" - [graf](https://w.wiki/4Xcj) 
     * [Q82697153](https://www.wikidata.org/wiki/Q82697153?uselang=sv) "ledamot av Sveriges ståndsriksdag" - [graf](https://w.wiki/4Xct) 
  * parlamentsgrupp [P4100](https://www.wikidata.org/wiki/Property:P4100)   
  * ....
  * Europaparlamentariker-ID [P1186](https://www.wikidata.org/wiki/Property:P1186) --> [SPARQL nationality Swedish](https://w.wiki/4Xei) = 105
  * Twitter property [P2002](https://www.wikidata.org/wiki/Property:P2002)  - [sparql Swedish PM](https://w.wiki/4Xep)
* [Creating parliament charts with wikidata](https://blog.k-nut.eu/wikidata-parliament-svg)

  <img src="https://blog.k-nut.eu/static/parliament.svg" width="400" />

## Scholia https://scholia.toolforge.org/
Scholia is a service that creates visual scholarly profiles for topics, people, organizations, species, chemicals, etc using bibliographic and other information in Wikidata - [satistics](https://scholia.toolforge.org/statistics) = 37,436,027Scholarly articles
  * Example
    * latest Wikidata [related research papers](https://scholia.toolforge.org/topic/Q2013)
      * example SPARQL [co-authors graph for topic Wikidata](https://w.wiki/3Jhi) 
 
 <img src="https://lh3.googleusercontent.com/-kwVeh3zlLww/YbLYD1ogiFI/AAAAAAAA3Z0/MKGANDsTxCQ3sXCpQid_xZQlbHfQrIangCNcBGAsYHQ/image.png" width="600" />

    
    * latest research paper in Wikidata [from Uppsala University](https://scholia.toolforge.org/organization/Q185246)

 <img src="https://lh3.googleusercontent.com/-W-Eguv9QGnM/YbLYu2dXqiI/AAAAAAAA3Z8/SiXSxxpNugIejdJeobRaIOGT_Z44Qt-5QCNcBGAsYHQ/image.png" width="600" />


## Svenskt Porträtt arkiv
* [portrattarkiv.se](https://portrattarkiv.se/about) "En person" har scannat in 880 000 bilder --> massor med bilder på Riksdagsledamöter som jag långsamt kopplar ihop med Wikidata se verktyg jag byggt till deras API [github.com/salgo60/spa2Commons](https://github.com/salgo60/spa2Commons) - video in [swedish/english](https://www.youtube.com/watch?v=aCPzWF0aYmw)

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Theodor_Adelsw%C3%A4rd_SPA27.jpg/1599px-Theodor_Adelsw%C3%A4rd_SPA27.jpg" width="600" />

* Wikidata [Q5542641](https://www.wikidata.org/wiki/Q5542641) / bilder [Wikicommons](https://commons.wikimedia.org/wiki/Category:Theodor_Adelsw%C3%A4rd) 

 <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Erik_Abrahamsson_SPA.jpg" width="600" />

* Wikidata [Q5627413](https://www.wikidata.org/wiki/Q5627413) / bilder [Wikicommons](https://commons.wikimedia.org/wiki/Category:Erik_Abrahamsson_1873) 

 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Anders_Pers_1860_SPA3.jpg" width="600" />

* Wikidata [Q6042371](https://www.wikidata.org/wiki/Q6042371) / bilder [Wikicommons](https://commons.wikimedia.org/wiki/Category:Anders_Pers_1860) 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Johan_Bergman_SPA4.jpg/1599px-Johan_Bergman_SPA4.jpg" width="600" />

* Wikidata [Q5572691](https://www.wikidata.org/wiki/Q5572691) / bilder [Wikicommons](https://commons.wikimedia.org/wiki/Category:Johan_Bergman_1864) 

<img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ingebrikt_Bergman_SPA.jpg" width="600" />

* Wikidata [Q5572670](https://www.wikidata.org/wiki/Q5572670) / bilder [Wikicommons](https://commons.wikimedia.org/wiki/Category:Ingebrikt_Bergman) 

## Koppla Högsta Domstolens domar till Wikidata  

 * se [tweet](https://twitter.com/Belteshassar/status/1416063302669672450?s=20) / [SPARQL](https://w.wiki/3eF6) / [video](https://www.youtube.com/watch?t=5083&v=yMtP64yFKn0&feature=youtu.be9) / [lördagsintervju](https://sverigesradio.se/avsnitt/632809)

 <img src="https://lh3.googleusercontent.com/-V6PE2YRp_SY/YXF7gOEdWxI/AAAAAAAA3XQ/UGZTABI-YsYUGj8C8X0skUkG600YTJ01gCLcBGAsYHQ/image.png" width="600" />
 <img src="https://community.dataportal.se/assets/uploads/files/1637157955177-d691283b-95bf-462c-be0f-d8e998a093bb-image.png" width="600" />

## Wikidata Workshops for research
* "Workshop for the scientific Wikidata community @ ISWC 2021 24 October 2021. Online" [wikidataworkshop.github.io/2021](https://wikidataworkshop.github.io/2021/)

"Wikidata is an open knowledge base hosted by the Wikimedia Foundation that can be read and edited by both humans and machines. Wikidata acts as the central source of common, open structured data used by Wikipedia, Wiktionary, Wikisource, and others. It is used in a variety of academic and industrial applications.

In recent years, we have seen an increase in the number of scientific publications around Wikidata. While there are a number of venues for the Wikidata community to exchange, none of those publish original research. We want to bridge the gap between these communities and the research events and give the research-focused part of the Wikidata community a venue to meet and exchange information and knowledge.

The Wikidata Workshop 2021 focuses on the challenges and opportunities of working on a collaborative open-domain knowledge graph such as Wikidata, which is edited by an international and multilingual community. We encourage submissions that observe the influence such a knowledge graph has on the web of data, as well as those working on improving this knowledge graph itself. This workshop brings together everyone working around Wikidata in both the scientific field and industry to discuss trends and topics around this collaborative knowledge graph."
## Histropedia Timeline
[Histropedia](http://histropedia.com/) tool using Wikidata to displays timelines

![](https://lh3.googleusercontent.com/-gZhQUentEos/YbVhHEawN_I/AAAAAAAA3aU/JSgq0jPXgSEgpoYqxWEV7VG4pXvpHj3-gCNcBGAsYHQ/image.png)
* example [Swedish PM in Wikidata on a timeline](http://www.histropedia.com/showcase/wikidata-viewer.html?q=SELECT%20?person%20?personLabel%20%0A(SAMPLE(?birth_date)%20AS%20?birth_date)%20%0A(SAMPLE(?death_date)%20AS%20?death_date)%20%0A(SAMPLE(?image)%20AS%20?image)%20%0A(SAMPLE(?party)%20AS%20?party)%20%0A(COUNT(?article)%20AS%20?rank)%20%0A?article%0A%0AWHERE%20%7B%0A%7B%0A%20%20%20%20%7B%20?person%20wdt:P39%20wd:Q81531912.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20?person%20wdt:P39%20wd:Q33071890.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20?person%20wdt:P39%20wd:Q82697153.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20?person%20wdt:P39%20wd:Q10655178.%20%7D%0A%20%20%7D%0A?person%20p:P569/psv:P569%20?birth_date_node%20.%0A?birth_date_node%20wikibase:timeValue%20?birth_date%20.%20%0A?birth_date_node%20wikibase:timePrecision%20?birth_date_precision.%0A%0AOPTIONAL%20%7B%20%0A?person%20p:P570/psv:P570%20?death_date_node.%0A?death_date_node%20wikibase:timeValue%20?death_date%20.%0A%7D%0A%0AOPTIONAL%20%7B%20%0A?person%20p:P570/psv:P570%20?death_date_node.%0A?death_date_node%20wikibase:timeValue%20?death_date%20.%0A%7D%0A%0AOPTIONAL%20%7B%20?person%20wdt:P18%20?image%7D%0A%20%20%0AOPTIONAL%7B%0A?person%20wdt:P102%20?partyid.%20%0A?partyid%20rdfs:label%20?party.%0AFILTER((LANG(?party))%20%3D%20%22sv%22)%0A%7D%0A%20OPTIONAL%20%7B%0A%20%20%20%20%20%20?article%20schema:about%20?person%20.%0A%20%20%20%20%20%20?article%20schema:inLanguage%20%22sv%22%20.%0A%20%20%20%20%20%20?article%20schema:isPartOf%20%3Chttps://sv.wikipedia.org/%3E%20.%0A%20%20%20%20%7D%20%20%0ASERVICE%20wikibase:label%20%7B%20bd:serviceParam%20wikibase:language%20%22sv%22,%22en%22.%20%7D%0A%7D%0AGROUP%20BY%20?person%20?personLabel%20?article%0A%0AORDER%20BY%20DESC(?rank)%0A&d=2&md=true&g=person&l=article&t=personLabel&s=birth_date&e=death_date&i=image&r=rank&c=party&f=party&v=t)
## Wikibase a free "empty" Wikidata
* [wikiba.se](https://wikiba.se)
* [Show cases](https://wikiba.se/showcase/) research
  * [FactGrid](https://database.factgrid.de/wiki/Main_Page)  Gotha Research Centre - [video](https://media.ccc.de/v/wikidatacon2019-5-wikibase_inspiration_panel#t=2550) 20 years research on the Illuminate

 <img src="https://database.factgrid.de/w/images/a/af/FactGrid-Logo.PNG" width="400" />

  * ["A Quarter of a Million Items on FactGrid – just a brief reflection"](https://blog.factgrid.de/archives/2231)
  * ["Einblicke in das interne Berichtswesen des Illuminaten-Ordens. Aus der Hand Hermann Schüttlers: 71 Dokumente der Jahre 1781 bis 1785"](https://blog.factgrid.de/archives/2032)
  * ["The Illuminati Correspondence Fast Forward"](https://database.factgrid.de/tools/illuminati.html) using [Kepler.gl](http://Kepler.gl)  / [blog](https://blog.factgrid.de/archives/1695)

* Announced is a Cloud version see [tweets](https://twitter.com/search?q=wikibase.cloud&f=live)
## Misc2
* [ny gratis bok om KG](https://kgbook.org/)
 <img src="https://community.dataportal.se/assets/uploads/files/1638058593587-ee18c7ae-353e-4ea9-896f-2a20fb8c6abe-image.png" width="600" />

