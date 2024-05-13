DOI: [10.5281/zenodo.11183634](https://zenodo.org/doi/10.5281/zenodo.11183633)

# Wikidata / riksdagen-corpus

* [Riksdagens Öppna data skuggbacklog](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/50)
* [Sveriges Riksdag 1867–2022: Ett ekosystem av länkad öppen data](https://www.umu.se/nyheter/5-miljoner-till-forskning-om-lankad-parlamentariska-data_11678700)
   * [Malmö Universitet - Sveriges Riksdag 1867–2022: Ett ekosystem av länkad öppen data](https://mau.se/forskning/projekt/sveriges-riksdag-ett-ekosystem-av-lankad-oppen-data/)
   * [Party formations and party splits in the Swedish Riksdag 1867–1970](https://swerik-project.github.io/blog/2023/Party-formations-and-party-splits-in-the-Swedish-Riksdag-1867-1970/)

repository also for matching [Wikidata](https://www.youtube.com/watch?v=m_9_23jXPoE) with the [Welfare State Analytics project](https://www.westac.se/en/)(sv. Välfärdsstaten analyserad) and the [riksdagen-corpus](https://github.com/welfare-state-analytics/riksdagen-corpus)

![](https://lh3.googleusercontent.com/-z8P467ttHEk/Ybf9SpkK1pI/AAAAAAAA3bM/Kso3c_zmTMw_lSOoGPg_JKHL0MQ0WAjJQCNcBGAsYHQ/image.png)

## News 
* **2023-12** last edit on wikipedia - [stat salgo60](https://wikidata.wikiscan.org/user/Salgo60)
* **2023-10** [feedback researchproject Riksdagens Corpus #164](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/164)
* **2022-10-1** added a backlog of problems we see in the Swedish Riksdagens Open Data se [#50](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/50)
* **2022-04-04** connecting Wikidata to "Tvåkammar-riksdagen 1867-1970" see [issues/38](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/38) 
* **2022-02-21** connecting Wikidata to "Sveriges statskalender" see [issues/36](https://github.com/salgo60/Wikidata_riksdagen-corpus/issues/36) 
* **2022-01-04** the special name form used for the Swedish PM is now decided to also be moved down to Wikidata and accessable as [SPARQL questions](https://w.wiki/4dqM) and a Wikipedia [template](https://sv.wikipedia.org/wiki/Mall:Iriksdagenkallad), primary source used in the beginning are the books ["Tvåkammar-riksdagen 1867-"](https://portrattarkiv.se/advancedsearch;facts=PortraitCatalog:Tv%C3%A5kammar-riksdagen%201867-)
   * [video](https://www.youtube.com/watch?v=ovrIeyC4gsk) how this is implemented
   * [query](https://w.wiki/4dmG) finding Wikipedia articles with text "I riksdagen kallad" and this is missing in Wikidaya
* **2021-12-24** [Notebook](https://github.com/salgo60/Wikidata_riksdagen-corpus/blob/main/Notebook/Sveriges%20Riksdag%20i%20SPA.ipynb) with scanned pictures of Swedish PM at [portrattarkiv.se](https://portrattarkiv.se/)
* **2021-12-17** small test with 3037 lines matched with Wikidata see [members_of_parliament WD 20211217.csv](https://github.com/salgo60/Wikidata_riksdagen-corpus/blob/main/data/members_of_parliament%20WD%2020211217.csv)
  * when exporting I added the following columns from Wikidata
     * Wikidata qnumber 
     * [P2002](https://www.wikidata.org/wiki/Property:P2002?uselang=sv) - Twitteraccount we have in Wikidata for Swedish PM
     * [P1214](https://www.wikidata.org/wiki/Property:P1214?uselang=sv) - The old id in the Swedish PM that you have ""Riksdagens person-id"
     * [P8388](https://www.wikidata.org/wiki/Property:P8388?uselang=sv) -  The new id in the Swedish PM "Riksdagen person GUID"
     * [P3217](https://www.wikidata.org/wiki/Property:P3217?uselang=sv) - "Svenskt Biografiskt Lexikon-ID"
  * other candidates to be added
     * External properties for Swedish PM in Wikidata [query](https://w.wiki/4aAm) [sv](https://w.wiki/4XQi) = 329 properties
        * External properties for Swedish PM in Wikidata related to politicians [query](https://w.wiki/4aAh) [sv](https://w.wiki/4aAY) = 8 properties
        * External properties for Swedish PM in Wikidata that are Swedish [query](https://w.wiki/4aAj) [sv](https://w.wiki/4aAZ) = 37 properties
     * Wikidata (not external) properties for Swedish PM in Wikidata [query](https://w.wiki/4aAf) [sv](url) = 118 properties  
     * Position helds [en](https://w.wiki/4aAp) [sv](https://w.wiki/4aAq)
     * Member of parties [en](https://w.wiki/4aAt) [sv](https://w.wiki/4aAs)
# Planned activities
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
Scholia is a service that creates visual scholarly profiles for topics, people, organizations, species, chemicals, etc using bibliographic and other information in Wikidata - [statistics](https://scholia.toolforge.org/statistics) = 37,436,027Scholarly articles
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
## Locations graves and some other queries
* [Graves located in Stockholm on Norra Begravningsplatsen](https://query.wikidata.org/embed.html#%23%20Query%20Find%20in%20WikiData%20people%20with%20Place%20of%20Burial%20Q252312%20Norra%20Begravningsplatsen%0A%23%20and%20SBL%0A%23%20Show%20Wikitree%20ID%2C%20Find%20A%20Grave%20ID%20and%20if%20picture%20of%20the%20grave%20exist%0A%23%20version%202%20Google%20map%20link%0A%23defaultView%3AMap%0Aselect%20distinct%20%20%3Farticle%20%3Fperson%20%3FpersonLabel%20%20%3FpersonDescription%20%20%3Fgraveplot%20%20%3Fpic%20%3Fcoord%20%3FpicGrave%20%28floor%28year%28%3Fbirthdate%29%2F100%29%2a100%20as%20%3Flayer%29%20%0A%28IRI%28CONCAT%28%22https%3A%2F%2Fwww.google.com%2Fmaps%2F%3Fq%3D%22%2C%20STR%28%3Flat%29%2C%20%22%2C%22%2C%20STR%28%3Flon%29%29%29%20AS%20%3FGoogleMap%29%20%3FSBL%20%7B%0A%7B%0A%09%3Fperson%20wdt%3AP119%20wd%3AQ252312%3B%20%23Place%20of%20burial%0A%20%20%20%20%20%20%20%20%20%20%20%20p%3AP119%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20pq%3AP965%20%3Fgraveplot%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20pq%3AP625%20%3Fcoord%3B%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20pqv%3AP625%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wikibase%3AgeoLatitude%20%3Flat%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wikibase%3AgeoLongitude%20%3Flon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D.%20%20%20%20%20%20%20%20%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ81531912.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ33071890.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ82697153.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ10655178.%20%7D%0A%20%20%0A%0A%20%20%20OPTIONAL%20%7B%20%3Fperson%20wdt%3AP3217%20%3FSBLID%20.%7D%20%09%09%09%09%09%09%23%20SBL%0A%20%20%20OPTIONAL%20%7B%3Fperson%20wdt%3AP569%20%3Fbirthdate%7D%20%0A%20%20%20OPTIONAL%7B%20%3Fperson%20wdt%3AP18%20%3Fpic%20.%7D%20%09%09%09%09%09%23%20If%20we%20have%20an%20illustration%0A%20%20%20OPTIONAL%7B%20%3Fperson%20wdt%3AP1442%20%3FpicGrave%20.%7D%20%09%09%09%23%20If%20we%20have%20a%20picture%20of%20the%20grave%0A%20%20%20BIND%20%28URI%28CONCAT%28%22https%3A%2F%2Fsok.riksarkivet.se%2Fsbl%2FPresentation.aspx%3Fid%3D%22%2C%3FSBLID%29%29%20AS%20%3FSBL%29%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Farticle%20schema%3Aabout%20%3Fperson%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AinLanguage%20%22sv%22%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AisPartOf%20%3Chttps%3A%2F%2Fsv.wikipedia.org%2F%3E%20.%0A%20%20%20%20%7D%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Farticle%20schema%3Aabout%20%3Fperson%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AinLanguage%20%22en%22%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AisPartOf%20%3Chttps%3A%2F%2Fsv.wikipedia.org%2F%3E%20.%0A%20%20%20%20%7D%0A%0A%20%20%20OPTIONAL%20%7B%20%3Fperson%20wdt%3AP106%20%3Fgroup%20.%7D%20%09%09%09%23%20Occupation%20in%20Layer%0A%0A%7D%20%20%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22sv%22%2C%22en%22%7D%0A%20%7D%0AOrder%20by%20%3FpersonLabel) for Swedish PMs we have in Wikidata = 165 graves

![](https://lh3.googleusercontent.com/-s05AHB74ovM/YbVkDiC6HjI/AAAAAAAA3ac/mu_g1ZRgSikJ-kjdC-piAWRsEwVIIaUYwCNcBGAsYHQ/image.png)

* [Graves located at Uppsala old cemetery](https://query.wikidata.org/embed.html#%23defaultView%3AMap%0Aselect%20distinct%20%20%3Farticle%20%3Fperson%20%3FpersonLabel%20%20%3FpersonDescription%20%20%3Fgraveplot%20%20%3Fpic%20%3Fcoord%20%3FpicGrave%20%28floor%28year%28%3Fbirthdate%29%2F100%29%2a100%20as%20%3Flayer%29%20%0A%28IRI%28CONCAT%28%22https%3A%2F%2Fwww.google.com%2Fmaps%2F%3Fq%3D%22%2C%20STR%28%3Flat%29%2C%20%22%2C%22%2C%20STR%28%3Flon%29%29%29%20AS%20%3FGoogleMap%29%20%3FSBL%20%7B%0A%7B%0A%09%3Fperson%20wdt%3AP119%20wd%3AQ4353116%3B%20%23Place%20of%20burial%0A%20%20%20%20%20%20%20%20%20%20%20%20p%3AP119%20%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20pq%3AP965%20%3Fgraveplot%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20pq%3AP625%20%3Fcoord%3B%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20pqv%3AP625%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wikibase%3AgeoLatitude%20%3Flat%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20wikibase%3AgeoLongitude%20%3Flon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D.%20%20%20%20%20%20%20%20%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ81531912.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ33071890.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ82697153.%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%20%3Fperson%20wdt%3AP39%20wd%3AQ10655178.%20%7D%0A%20%20%0A%0A%20%20%20OPTIONAL%20%7B%20%3Fperson%20wdt%3AP3217%20%3FSBLID%20.%7D%20%09%09%09%09%09%09%23%20SBL%0A%20%20%20OPTIONAL%20%7B%3Fperson%20wdt%3AP569%20%3Fbirthdate%7D%20%0A%20%20%20OPTIONAL%7B%20%3Fperson%20wdt%3AP18%20%3Fpic%20.%7D%20%09%09%09%09%09%23%20If%20we%20have%20an%20illustration%0A%20%20%20OPTIONAL%7B%20%3Fperson%20wdt%3AP1442%20%3FpicGrave%20.%7D%20%09%09%09%23%20If%20we%20have%20a%20picture%20of%20the%20grave%0A%20%20%20BIND%20%28URI%28CONCAT%28%22https%3A%2F%2Fsok.riksarkivet.se%2Fsbl%2FPresentation.aspx%3Fid%3D%22%2C%3FSBLID%29%29%20AS%20%3FSBL%29%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Farticle%20schema%3Aabout%20%3Fperson%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AinLanguage%20%22sv%22%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AisPartOf%20%3Chttps%3A%2F%2Fsv.wikipedia.org%2F%3E%20.%0A%20%20%20%20%7D%0A%20%20%20OPTIONAL%20%7B%0A%20%20%20%20%20%20%3Farticle%20schema%3Aabout%20%3Fperson%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AinLanguage%20%22en%22%20.%0A%20%20%20%20%20%20%3Farticle%20schema%3AisPartOf%20%3Chttps%3A%2F%2Fsv.wikipedia.org%2F%3E%20.%0A%20%20%20%20%7D%0A%0A%20%20%20OPTIONAL%20%7B%20%3Fperson%20wdt%3AP106%20%3Fgroup%20.%7D%20%09%09%09%23%20Occupation%20in%20Layer%0A%0A%7D%20%20%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22sv%22%2C%22en%22%7D%0A%20%7D%0AOrder%20by%20%3FpersonLabel) for Swedish PM = graves 24

### Signatures
* Property [P109](https://www.wikidata.org/wiki/Property:P109) is a picture of a signature --> [Swedish PM signatures in Wikidata](https://w.wiki/4Y76)
![](https://lh3.googleusercontent.com/-OtqsH6GOxI0/YbVsqJ-FjAI/AAAAAAAA3ak/JDakze2uLoMGc1EnOUxo9yRK8jhRyjqqgCNcBGAsYHQ/image.png)

### Locations named after...
* [Locations named after a Swedish Parlament member](https://w.wiki/4Y7D)
   * Spatial search [location near me named...](https://w.wiki/4Y7k)
![](https://lh3.googleusercontent.com/-teb7pofhwss/YbWHgutlcpI/AAAAAAAA3as/mqv0iv72OjISZJcrom050s0OUIqFbVujQCNcBGAsYHQ/image.png)
## Wikibase a free "empty" Wikidata
* [wikiba.se](https://wikiba.se)
* [Show cases](https://wikiba.se/showcase/) research
  * [FactGrid](https://database.factgrid.de/wiki/Main_Page)  Gotha Research Centre - [video](https://media.ccc.de/v/wikidatacon2019-5-wikibase_inspiration_panel#t=2550) 20 years research on the Illuminate

 <img src="https://database.factgrid.de/w/images/a/af/FactGrid-Logo.PNG" width="400" />

  * ["A Quarter of a Million Items on FactGrid – just a brief reflection"](https://blog.factgrid.de/archives/2231)
  * ["Einblicke in das interne Berichtswesen des Illuminaten-Ordens. Aus der Hand Hermann Schüttlers: 71 Dokumente der Jahre 1781 bis 1785"](https://blog.factgrid.de/archives/2032)
  * ["The Illuminati Correspondence Fast Forward"](https://database.factgrid.de/tools/illuminati.html) using [Kepler.gl](http://Kepler.gl)  / [blog](https://blog.factgrid.de/archives/1695)

 <img src="https://blog.factgrid.de/wp-content/uploads/2019/09/screenshot-Illuminatenkorrespondenz.png" width="700" />

* Announced is a Cloud version see [tweets](https://twitter.com/search?q=wikibase.cloud&f=live)

* [list of some implementations of Wikibase](https://airtable.com/shrDDdBmiBuHNtmSF/tblawy0LDa6V5ffCU)
## Misc2
* [ny gratis bok om KG](https://kgbook.org/)
 <img src="https://community.dataportal.se/assets/uploads/files/1638058593587-ee18c7ae-353e-4ea9-896f-2a20fb8c6abe-image.png" width="600" />

## Next step 
### Opinions in Wikidata
I would like to see that we not just describe birth, death about a person but also opinions with sources as Linked data
* Example a person in the Swedish Parliament who has [Q28528178](https://www.wikidata.org/wiki/Q28528178) "racist" opinions
   * [Q5573026](https://www.wikidata.org/wiki/Q5573026) "Olof Bergqvist" 
      *  [SVT](https://www.svt.se/nyheter/lokalt/norrbotten/biskopens-gata-kan-byta-namn-kranker-urfolken-och-samerna) "Gata i Gällivare kan få nytt namn – döpt efter rasistisk biskop"
      * "[Rastänkande och särskiljande av samer*](https://www.svenskakyrkan.se/filer/29%20Oscarsson.pdf)" 
      * Swedish SBL - Band 03 (1922), [page 655](https://sok.riksarkivet.se/sbl/Presentation.aspx?id=18653) dont mention this how do we describe that as linked data
### Enriching Claim Reviews - Sharing Experience From Factchecking
* see "[Enriching Claim Reviews - Sharing Experience From Factchecking](http://blog.schema.org/2021/12/enriching-claim-reviews-sharing.html)"
   * [schema.org ClaimReview](https://schema.org/ClaimReview)
### Document signficant persons, mentors for a person...
* [Svenskt kvinnobiografiskt lexikon SKBL](https://skbl.se/en/about-skbl) has added sections about signficant persons
   * Example [Alva Myrdal SKBL](https://skbl.se/en/article/AlvaMyrdal) [json](https://skbl.se/en/article/AlvaMyrdal.json) / [Wikidata graf](https://w.wiki/4YMZ)  
       ![](https://lh3.googleusercontent.com/-mH1LoXO74Ao/Ybbs-FEYzII/AAAAAAAA3bA/ijdhP8sQiBwkLkJ5HlGGFmtFI5KNi-EQACNcBGAsYHQ/image.png)
       ![](https://lh3.googleusercontent.com/-HB8-__hTp7I/YbbszHpMqdI/AAAAAAAA3a8/esO_ENioTpsyS-GhD1m-2U4skQQ4WA-0gCNcBGAsYHQ/image.png)
### "One click" - find all decisions in Europe regarding AI strategies
Can we classify all parliament documents to do them more findable?
 
[Paul-Olivier Dehaye](https://twitter.com/podehaye?lang=en) the person behind [Cambridge Analytica scandal](https://www.thelocal.ch/20180411/how-a-swiss-based-mathematician-helped-lift-the-lid-on-the-facebook-data-scandal/) has the vision that with one click [tweet](https://twitter.com/salgo60/status/1321253963946250248?s=20)

![](https://lh3.googleusercontent.com/-RVcQzeq31E8/YbgCdLLfC2I/AAAAAAAA3bU/z76TY1uyXSQX5f6SW2b-tl81v8HXf9ZEgCNcBGAsYHQ/image.png)

2019 I meet the Swedish parlament IT people 2019 ([T235527#5615454](https://phabricator.wikimedia.org/T235527#5615454)) and they had 2019 plans on using the  [Eurovoc](https://en.wikipedia.org/wiki/EuroVoc) a multilingual thesaurus maintained by the Publications Office of the European Union (Wikidata [Property:P5437](https://wikidata.org/wiki/Property:P5437) looks like nothing was done

# More parliamentary related data
* Parla-CLARIN
  * [Parliamentary Corpora in the CLARIN infrastructure ](https://ep.liu.se/ecp/147/007/ecp17147007.pdf)
  * [pyparlaclarin](https://welfare-state-analytics.github.io/pyparlaclarin/pyparlaclarin)
  * [TEI Schema ](https://clarin-eric.github.io/parla-clarin/)
* Welfare state: 
  * [Google Colab notebook](https://colab.research.google.com/drive/1C3e2gwi9z83ikXbYXNPfB6RF7spTgzxA?usp=sharing)
* [Plenary Debates of the Parliament of Finland as Linked Open Data and in Parla-CLARIN Markup](https://drops.dagstuhl.de/opus/volltexte/2021/14544/pdf/OASIcs-LDK-2021-8.pdf) 
* [hansard.hud.ac.uk/](https://hansard.hud.ac.uk/) substantially verbatim report of what was said in both houses of Parliament between 1803-2021 through various search functions and interactive visualisations.
