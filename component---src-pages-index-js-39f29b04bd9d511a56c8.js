(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0VgB":function(e,t,a){e.exports=a.p+"static/Dixit_Keshavbhai_Patel_2019-ac2846c211548701586e0fe7f15a21a9.pdf"},OGtf:function(e,t,a){var n=a("XKFU"),i=a("eeVq"),r=a("vhPU"),o=/"/g,l=function(e,t,a,n){var i=String(r(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Zttt"),o=a("wtQ5"),l=a("vOnD"),s=a("nDrJ"),c=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("UeZE")),d=(a("tUrg"),a("xpKI")),m=a("LMky"),u=function(e){var t=e.id,a=e.title,n=e.link,r=e.tags,o=e.body,l=e.images,s=e.html,c=e.toggleOpen,u=e.open,p=e.active,h=e.index;return i.a.createElement(d.b,{active:p,index:h,open:u,cardId:t},i.a.createElement(d.c,{open:u},i.a.createElement(d.h,{index:h,open:u,cardId:t,onClick:function(){return c(t)}},a),i.a.createElement(m.a,{images:l}),i.a.createElement(d.a,{ariaLabel:"Project Overview"},o)),i.a.createElement(d.e,{cardId:t,open:u},i.a.createElement(d.f,{open:u,dangerouslySetInnerHTML:{__html:s}}),i.a.createElement(d.j,{open:u},r.map((function(e,t){return i.a.createElement(d.i,{key:"card-tag-"+t+"-"+e},e)})),i.a.createElement(d.k,{as:"button","aria-label":"View more details",target:"_blank",referrer:"noopener noreferrer",onClick:function(e){return function(e,t){e.stopPropagation(),window.open(t)}(e,n)}},"View More ➡")),i.a.createElement(d.g,{onClick:function(e){return function(e,t){e.stopPropagation(),c(t)}(e,t)}},i.a.createElement(d.d,null))))},p=function(e){return i.a.createElement(u,e)};var h=function(e){var t=e.data,a=e.cardNumber,n=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["data","cardNumber"]),r=t.projects.edges;return i.a.createElement(f,null,i.a.createElement(g,null,r.map((function(e,t){var r=e.node,o=r.excerpt,l=r.frontmatter,s=r.html;return i.a.createElement(p,Object.assign({key:"project-card-"+t,id:t,index:t,open:a===t,active:-1!==a,html:s,body:o},l,n))}))))},g=l.c.ul.attrs({role:"list","aria-label":"Projects"}).withConfig({displayName:"ProjectsView__ProjectCardsContainer",componentId:"lkntyh-0"})(["margin:0;@media ","{max-width:40vw;display:flex;flex-flow:row wrap;height:100%;}@media ","{display:flex;padding:0;flex-direction:column;}"],c.a.desktop,c.a.mobile),f=l.c.main.withConfig({displayName:"ProjectsView__MainContainer",componentId:"lkntyh-1"})(["@media ","{max-width:40vw;}"],c.a.screen4k),b=a("Wbzz"),w=function(){var e=Object(n.useState)(-1),t=e[0],a=e[1],r=function(e){return a(t===e?-1:e)};return i.a.createElement(b.StaticQuery,{query:"1107525976",render:function(e){return i.a.createElement(h,{cardNumber:t,toggleOpen:r,data:e})},data:s})},y=a("oQHK"),v=a("7Qib"),x=a("InJ6"),k=l.c.div.withConfig({displayName:"HomeView__HomeViewContainer",componentId:"sc-1786o7o-0"})(["margin:0;display:flex;justify-content:center;background-color:",";background:",";color:",";padding:0 ",";@media ","{height:100vh;}@media ","{height:100%;}@media ","{flex-direction:column;overflow-x:hidden;}"],x.e,x.f,x.h,Object(v.b)(.75),v.a.screen4k,v.a.desktop,v.a.mobile),I=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){setTimeout((function(){var t;return window.scrollTo(0,null===(t=e.current)||void 0===t?void 0:t.offsetTop)}),1e3)}),[]),i.a.createElement(k,{ref:e},i.a.createElement(y.a,null),i.a.createElement(w,null))},E=a("lXoy");t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,null),i.a.createElement(E.f,{background:!0}),i.a.createElement(I,null))}},nDrJ:function(e){e.exports=JSON.parse('{"data":{"projects":{"edges":[{"node":{"id":"52ca6447-38a7-5be3-b28c-6396eaecb821","html":"<p>I am currently a console developer on OCI(Oracle Cloud Infrastructure).</p>\\n<ul>\\n<li>We build and maintain next generation console applications on OCI.</li>\\n</ul>","frontmatter":{"title":"What I do today @ Oracle","date":"05 May, 2020","link":"https://console.us-phoenix-1.oraclecloud.com/","tags":["react","redux","typescript","react-hooks","oui"],"images":["react","typescript","redux"]},"excerpt":"I am currently a console developer on OCI(Oracle Cloud Infrastructure). We build and maintain next generation console applications on OCI."}},{"node":{"id":"cd52d1da-8669-5e0f-b277-f93582d86f12","html":"<p>A project demonstrating covid visualization with worldometer data and react-map-gl. The entire project is hosted on heroku dynos using Redis &#x26; Heroku Scheduler.\\nCo-authored w/ <a href=\\"https://github.com/bansalrachita\\">@bansalrachita</a></p>\\n<p>Express routes serve data which is updated within Redis via Heroku Scheduler every hour and cheerio based scrapper.</p>\\n<p>Read more about it <a href=\\"https://medium.com/@rachitabansal/visualizing-covid-19-159e86e6ac06\\">here</a>.</p>","frontmatter":{"title":"Covid Visualization","date":"01 April, 2020","link":"http://covid-visual.herokuapp.com/","tags":["nodeJS","react","redis","scheduler","heroku"],"images":["node","react","redis"]},"excerpt":"A project demonstrating covid visualization with worldometer data and react-map-gl. The entire project is hosted on heroku dynos using Redis…"}},{"node":{"id":"feddba5f-8d49-540c-a2c2-ffd0a15105a4","html":"<p>PeopleList using Typescript and React.</p>\\n<ul>\\n<li>Build a custom Accordian for re-usability purposes.</li>\\n<li>Uses custom React hooks and Typescript for educational purposes.</li>\\n<li>Deployed on herokuapp.</li>\\n</ul>","frontmatter":{"title":"People List","date":"01 January, 2020","link":"http://people-list.herokuapp.com/","tags":["react","typescript","react-hooks"],"images":["react","typescript","heroku"]},"excerpt":"PeopleList using Typescript and React. Build a custom Accordian for re-usability purposes. Uses custom React hooks and Typescript for…"}},{"node":{"id":"32d80fe6-1d96-5287-9d29-d36b60d5758e","html":"<p>I worked on a Web Application based on Flask, MongoDB, MySQL,\\nReact &#x26; Redux.</p>\\n<ul>\\n<li>We use blueprintJS for UI Components and follow Airbnb standards for ECMAScript 6</li>\\n<li>I have unilaterally implemented a custom notification system, using SNS/SQS\\nand AWS Lambda, which notifies based on the latest record, insufficient state,\\nthreshold levels, etc.</li>\\n<li>Spearheaded the team to achieve CATO(Cloud Allowed to Operate),\\na security process by Cisco, for operating in an external cloud.</li>\\n<li>Designed an Admin System to grant access control for the entire organization.</li>\\n<li>Integrated cflow into automation code base system to achieve code-coverage.</li>\\n</ul>","frontmatter":{"title":"What I did @ Cisco","date":"01 January, 2019","link":"https://cafy.io","tags":["react","redux","javascript","blueprintjs","sql","python","mongodb","aws","cloudfront"],"images":["react","redux","javascript","blueprintjs","sql","python"]},"excerpt":"I worked on a Web Application based on Flask, MongoDB, MySQL,\\nReact & Redux. We use blueprintJS for UI Components and follow Airbnb…"}},{"node":{"id":"7cee97e4-c260-579a-8680-b9abd5bf98b2","html":"<p>A basic application which started with learning GraphQL and is transforming as a TODOs app</p>\\n<ul>\\n<li>Query and view markdowns via graphQL backend</li>\\n<li>WIP: Implementing a typing box where user can type markdown text in realtime</li>\\n</ul>","frontmatter":{"title":"Markdown TO-DOs","date":"02 December, 2018","link":"https://simple-graphql.herokuapp.com/","tags":["apollo","graphql","axios","react"],"images":["apollo","graphql","react"]},"excerpt":"A basic application which started with learning GraphQL and is transforming as a TODOs app Query and view markdowns via graphQL backend WIP…"}},{"node":{"id":"580ffbf1-02c1-5d3d-83c4-3b99b71174c8","html":"<ul>\\n<li>A basic application with server side rendering for ReactJS.</li>\\n<li>Again using my favorite boilerplate, CRA.</li>\\n</ul>","frontmatter":{"title":"Server Side Rendering","date":"17 June, 2018","link":"https://github.com/dixitk13/basic-react-server-side","tags":["react","styled-components","cra","reactdom"],"images":["react","styled-components","cra"]},"excerpt":"A basic application with server side rendering for ReactJS. Again using my favorite boilerplate, CRA."}},{"node":{"id":"bf7e32ce-6a71-5129-99be-569799722652","html":"<ul>\\n<li>Creating a custom service worker in a simple PWA(Progressive Web Application) just because, Steve Jobs dreamed of it long ago, its going to be the future!</li>\\n<li>Its a React Application with a CRA boilerplate, ejected to enable writing custom service worker.</li>\\n</ul>","frontmatter":{"title":"Service Workers in PWA","date":"21 August, 2017","link":"https://github.com/dixitk13/toggle-me","tags":["react","cra","pwa","service workers"],"images":["react","cra","pwa"]},"excerpt":"Creating a custom service worker in a simple PWA(Progressive Web Application) just because, Steve Jobs dreamed of it long ago, its going to…"}},{"node":{"id":"e303a2e3-ac40-56c1-a5ba-aa5ff28d09e4","html":"<p>Personal project where I\'ve implemented a few graph algorithms on a famous data set, Enron Data Set.</p>\\n<ul>\\n<li>\\n<p>Algorithms viz.</p>\\n<ul>\\n<li>Freeman\'s Degree Centrality</li>\\n<li>Closeness Centrality</li>\\n<li>Farness Centrality</li>\\n<li>Betweenness Centrality</li>\\n<li>EigenVector Centrality - using JBLAS library</li>\\n<li>Transitive Closure</li>\\n<li>FloydWarshall\'s Algorithm</li>\\n</ul>\\n</li>\\n</ul>","frontmatter":{"title":"Enron Social Graph","date":"26 November, 2015","link":"https://github.com/dixitk13/readmes.md/blob/master/personal-projects.md","tags":["graph","java","d3js","algorithms"],"images":["graph","java","d3js"]},"excerpt":"Personal project where I\'ve implemented a few graph algorithms on a famous data set, Enron Data Set. Algorithms viz. Freeman\'s Degree…"}},{"node":{"id":"678f9221-7e8d-58ce-abf0-a1f75450e8d5","html":"<p>As an intern I was tasked with improving the operations and debugging experience with the core application of Genesys(Soundbite) at the center of the task.</p>\\n<ul>\\n<li>I designed a scalable data architecture using open-source software to collect logs generated via the application into a centralized logging system. The architecture comprised of Log-courier, Logstash, Elasticsearch &#x26; Kibana (ELK) with searchers, masters, data-nodes &#x26; indexers. The architecture was capable of ingesting 11,000 events per second.</li>\\n<li>I\'ve also customized Logstash filters in Ruby (JRuby), developed Perl &#x26; Java indexing modules to ingest synthesized data.</li>\\n</ul>","frontmatter":{"title":"My Internship @ Genesys","date":"04 April, 2015","link":"https://www.linkedin.com/company/genesys/","tags":["logstash","linux","elasticsearch","kibana","genesys","logcourier"],"images":["logstash","linux","elasticsearch","kibana","genesys"]},"excerpt":"As an intern I was tasked with improving the operations and debugging experience with the core application of Genesys(Soundbite) at the…"}},{"node":{"id":"c3b380c7-a98a-5724-ae35-effaa98bf865","html":"<ul>\\n<li>I studied computer science at Northeastern University during the Fall \'14 Semester.</li>\\n<li>GPA ④</li>\\n<li>I was also the teaching assistant for Information Retrieval for 3 terms.</li>\\n<li>\\n<p>I attended the following courses:</p>\\n<ul>\\n<li>Web Development</li>\\n<li>Computer Systems</li>\\n<li>Algorithms</li>\\n<li>Natural Language Processing</li>\\n<li>Information Retrieval</li>\\n<li>Data Mining Techniques</li>\\n<li>Parallel Data Processing with Map-Reduce</li>\\n<li>Programming Design Paradigm</li>\\n</ul>\\n</li>\\n</ul>","frontmatter":{"title":"What I did @ Northeastern","date":"15 August, 2014","link":"https://www.khoury.northeastern.edu/program/computer-science-ms/","tags":["northeastern","cs","algorithms","datascience"],"images":["northeastern","hat","computerscience"]},"excerpt":"I studied computer science at Northeastern University during the Fall \'14 Semester. GPA ④ I was also the teaching assistant for Information…"}},{"node":{"id":"989ab612-f2f7-5bd4-a4bf-d0b9bc1ae3e4","html":"<p>I was an Application Developer for a J2EE application which dealt with “VPN automation” automating the entire VPN order processing till the step of provisioning.</p>\\n<p>There\'s a lot one does in 3 years, so I\'ll mention a few highlights:</p>\\n<ul>\\n<li>Designed and developed a lot of web-services to integrate in the application.</li>\\n<li>Reduced redundancy in code and number of database connections by implementing a Generic Database Service in Hibernate using JAX-WS framework &#x26; Java Reflections.</li>\\n<li>Spearheaded the migration of Web Services &#x26; Web Applications from Tomcat 6.0 to Weblogic 12c.</li>\\n</ul>","frontmatter":{"title":"What I did @ Infosys","date":"25 September, 2011","link":"https://www.infosys.com/","tags":["java","sql","hibernate","reflections","infosys","soa","jaxws"],"images":["java","sql","hibernate","reflections","infosys"]},"excerpt":"I was an Application Developer for a J2EE application which dealt with “VPN automation” automating the entire VPN order processing till the…"}}]}}}')},oQHK:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=a("l3cv"),l=a.n(o),s=a("UeZE"),c=r.c.div.withConfig({displayName:"RealFlexView__RealFlexDiv",componentId:"sc-1hvlvrs-0"})(["@media "," and (min-height:","px){flex-basis:","px;transition:height 0.5s ease-all;}@media ","{display:none;}"],s.a.desktop,830,(function(e){return e.height||0}),s.a.mobile),d=function(e){var t=e.y,a=Math.min(920,t);return i.a.createElement(c,{height:a})},m=a("cKtk"),u=function(){return i.a.createElement(m.a.Consumer,null,(function(e){var t=e.y;return i.a.createElement(d,{y:t})}))},p=(a("f3/d"),a("a1Th"),a("XfO3"),a("HEwt"),a("rE2o"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("wXPw")),h=a("7Qib"),g=a("InJ6");function f(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var w=r.c.div.withConfig({displayName:"LogosView__Mentions",componentId:"sc-1j6ouug-0"})(["display:flex;justify-content:space-around;flex-direction:row;"," min-height:48px;margin-bottom:1rem;flex:0 1 auto;"],(function(e){return e.enableLayout&&Object(r.b)(["flex-direction:column;@media ","{flex-direction:row;}"],h.a.mobile)})),y=r.c.img.withConfig({displayName:"LogosView__MentionsLogo",componentId:"sc-1j6ouug-1"})(["width:",";height:48px;margin-bottom:0;"],(function(e){return e.width||"48px"})),v=r.c.a.withConfig({displayName:"LogosView__Link",componentId:"sc-1j6ouug-2"})(["text-decoration:none;transform:",";transition:all 0.2s ease-in-out;&:hover{transform:",";}&:hover,&:active{box-shadow:0 0 0 0;}"],(function(e){return e.scale}),(function(e){return e.transform})),x=r.c.span.withConfig({displayName:"LogosView__TitleLogo",componentId:"sc-1j6ouug-3"})(["color:",";font-weight:500;font-size:16px;&:hover{color:",";}"],g.h,g.i),k=function(e){var t=e.href,a=e.title,n=e.imgsrc,r=e.scale,o=e.transform,l=e.alt,s=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["href","title","imgsrc","scale","transform","alt"]);return i.a.createElement(v,{alt:l,"aria-label":l,transform:o,scale:r,rel:"noopener noreferrer",target:"_blank",href:t},n?i.a.createElement(y,Object.assign({src:n,alt:l},s),a):i.a.createElement(x,null,a))},I=function(e){var t=e.extraMentions,a=void 0===t?[]:t,n=e.enableLayout,r=[{href:"https://www.quora.com/profile/Dixit-Patel-4",imageName:"quora",alt:"Quora",width:"75px",transform:"scale(0.95)",scale:"scale(0.85)"},{href:"https://www.strava.com/athletes/19109068",imageName:"strava",alt:"Strava",transform:"scale(0.75)",scale:"scale(0.65)"},{href:"https://twitter.com/dixitk13",imageName:"twitter",alt:"Twitter",transform:"scale(0.75)",scale:"scale(0.65)"},{href:"https://github.com/dixitk13",imageName:"github",alt:"Github",width:"48px",transform:"scale(0.75)",scale:"scale(0.85)"}];return a&&(r=[].concat(f(r),f(a))),i.a.createElement(w,{enableLayout:n},r.map((function(e,t){return i.a.createElement(k,Object.assign({key:"mentions-"+t},e,{imgsrc:p.a[e.imageName]}))})))},E=function(e){var t=e.enableLayout,a=e.extraMentions;return i.a.createElement(I,{extraMentions:a,enableLayout:t})},C=[{name:"gatsby",url:"https://www.gatsbyjs.org/"},{name:"react",url:"https://reactjs.org/"},{name:"graphql",url:"http://graphql.org/"},{name:"styledcomponents",url:"https://styled-components.com",background:"#e0a90eba"},{name:"webpack",url:"https://webpack.js.org/"},{name:"babel",url:"https://babeljs.io/"},{name:"github",url:"https://www.github.com/"}],j=r.c.div.withConfig({displayName:"MadeWithView__Footer",componentId:"h2i4qv-0"})(["justify-self:flex-end;display:flex;flex-direction:column;margin-top:auto;a{transition:all 0.5s;&:hover{color:#555;z-index:1;}}"]),A=r.c.span.withConfig({displayName:"MadeWithView__Heart",componentId:"h2i4qv-1"})(['color:#d32f2f;&:after{content:"❤";}']),_=r.c.ul.attrs({role:"list"}).withConfig({displayName:"MadeWithView__IconList",componentId:"h2i4qv-2"})(["display:flex;justify-content:center;flex-wrap:wrap;margin:9px;"]),O=r.c.li.attrs({role:"listitem"}).withConfig({displayName:"MadeWithView__Icon",componentId:"h2i4qv-3"})(["list-style:none;margin-bottom:3px;"]),S=r.c.a.withConfig({displayName:"MadeWithView__Link",componentId:"h2i4qv-4"})(["padding:10px;"]),N=r.c.img.withConfig({displayName:"MadeWithView__IconImage",componentId:"h2i4qv-5"})(["width:22px;height:22px;margin-bottom:0;background:",";"],(function(e){return e.background||""})),M=r.c.button.withConfig({displayName:"MadeWithView__Title",componentId:"h2i4qv-6"})(["text-align:center;border:none;background:none;color:",";font-size:",";"],g.h,Object(h.b)(.65)),P=function(){return i.a.createElement(j,null,i.a.createElement(M,null,"Made with ",i.a.createElement(A,null)," using"),i.a.createElement(_,null,C.map((function(e){return i.a.createElement(O,{key:e.name},i.a.createElement(S,{href:e.url,alt:"Image","aria-label":"Technology Image "+e.name,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(N,{alt:e.name,src:p.a[e.name],background:e.background})))}))))},V=function(){return i.a.createElement(P,null)},L=a("0VgB"),D=a.n(L),R=a("kCjN"),W=a("YZYa"),T=Object(r.c)(W.a).withConfig({displayName:"DownloadButtonsView__DownloadButton",componentId:"sc-1toqj75-0"})(["text-align:center;&:hover{background:rgb(226,227,228);box-shadow:none;transition-delay:0.2s;color:transparent;}&:before{opacity:0;position:absolute;color:black;content:attr(data-hover);transform:translate(0,0);transition:0.4s,opacity 0.6s;}&:hover:before{opacity:1;transform:translate(-6px,0);transition-delay:0.2s;}"]),q=r.c.div.attrs({role:"group","aria-label":"Resume and Theme Button"}).withConfig({displayName:"DownloadButtonsView__ButtonGroup",componentId:"sc-1toqj75-1"})(["display:flex;flex-direction:row;margin-bottom:1rem;justify-content:space-evenly;"]),J=function(e){var t=e.theme,a=e.toggleOn;return i.a.createElement(q,null,i.a.createElement(T,{type:"button",ariaLabel:"Download Resume",onClick:function(){return window.open(D.a)},"data-hover":"Download"},"Resume"),i.a.createElement(R.a,{toggleOn:a},t))},z=function(e){return i.a.createElement(m.a.Consumer,null,(function(t){var a=t.theme;return i.a.createElement(J,{theme:a,toggleOn:e.toggleOn})}))},B=(a("PHbM"),a("jBtN")),F=r.c.aside.attrs({"aria-label":"About me",tabIndex:"0"}).withConfig({displayName:"AboutMeCardView__AboutMeFlex",componentId:"sc-1xbm32a-0"})(["display:flex;flex-direction:column;@media ","{max-width:20vw;}"],h.a.screen4k),G=r.c.div.withConfig({displayName:"AboutMeCardView__AboutMeContainer",componentId:"sc-1xbm32a-1"})(["display:flex;flex-direction:column;width:20vw;min-width:275px;padding:",";border-radius:3px;background:",";box-shadow:",";z-index:2;@media ","{margin:0 10px "," 10px;}@media ","{height:unset;margin-right:unset;width:100%;margin-bottom:5px;}"],Object(h.b)(.25),g.a,g.c,h.a.desktop,Object(h.b)(.25),h.a.mobile),Q=r.c.button.attrs({tabIndex:0}).withConfig({displayName:"AboutMeCardView__Name",componentId:"sc-1xbm32a-2"})(["color:",";font-size:",";margin:0 0 "," 0;cursor:pointer;font-weight:600;padding:0;&:hover{color:",";}"],g.h,Object(h.b)(1.5),Object(h.b)(.5),g.i),U=r.c.img.attrs({tabIndex:0}).withConfig({displayName:"AboutMeCardView__Image",componentId:"sc-1xbm32a-3"})(["flex:1 5 30%;min-height:0;max-height:350px;width:350px;align-self:center;margin-bottom:1rem;background-size:cover;clip-path:polygon(0,0);"]),H=Object(r.c)(B.a).attrs({tabIndex:0}).withConfig({displayName:"AboutMeCardView__Quote",componentId:"sc-1xbm32a-4"})(["margin-left:unset;color:",";font-size:",";border-left-color:",";margin-bottom:1rem;"],g.h,Object(h.b)(.65),g.h),K=r.c.span.withConfig({displayName:"AboutMeCardView__ToggleHeartContainer",componentId:"sc-1xbm32a-5"})(['display:flex;height:0;width:0;transform:rotate(45deg);margin-left:auto;@keyframes heart{0%,17.5%{font-size:0;}}[for="toggle-heart"]{color:#aab8c2;font-size:2em;cursor:pointer;visibility:hidden;}[id="toggle-heart"]{display:none;transition:1s ease-all;&:checked + label{color:#e2264d;visibility:unset;will-change:font-size;animation:heart 1s cubic-bezier(0.17,0.89,0.32,1.49);}}']),X=function(e){var t=e.on,a=e.toggleOn;return i.a.createElement(F,null,i.a.createElement(u,null),i.a.createElement(G,null,i.a.createElement(K,null,i.a.createElement("input",{id:"toggle-heart",checked:t,onChange:a,type:"checkbox"}),i.a.createElement("label",{htmlFor:"toggle-heart"},"❤")),i.a.createElement(Q,{"aria-label":"Click to send Love",onClick:a},"Dixit Keshavbhai Patel"),i.a.createElement(U,{src:l.a,alt:"Dixit"}),i.a.createElement(H,{"aria-label":"My Quote just another software engineer"},"just another software engineer"),i.a.createElement(E,null),i.a.createElement(z,{toggleOn:a}),i.a.createElement(V,null)))},Z=r.c.main.withConfig({displayName:"FlatView__FlatViewMain",componentId:"sc-1xvyckv-0"})(["display:flex;flex-direction:row;padding:20px;@media ","{flex-direction:column;}"],h.a.mobile),Y=r.c.section.withConfig({displayName:"FlatView__DetailSection",componentId:"sc-1xvyckv-1"})(["columns:2;flex:2 1 60%;h1{column-span:all;}"]),$=r.c.aside.withConfig({displayName:"FlatView__AsideDetails",componentId:"sc-1xvyckv-2"})(["flex:1 1 30%;margin-top:70px;div{align-items:center;}"]),ee=[{href:"/rss.xml",title:"RSS",alt:"RSS",width:"48px",transform:"scale(0.75)",scale:"scale(0.85)"}],te=function(){return i.a.createElement(Z,null,i.a.createElement(Y,null,i.a.createElement("h1",null,"Yello, I am Dixit"),i.a.createElement("p",null,"I am a software engineer currently in Greater Seattle Area working with Oracle. Prior to this I've worked with companies like Cisco Systems @ San Jose - CA, Genesys Telecommunications @ Burlington - MA and Infosys Ltd. @ Pune - India."),i.a.createElement("p",null,"I have a Masters in Computer Science from Northeastern University @ Boston - MA, and a Bachelor of Engineering in Computer Engineering @ University of Mumbai, India.")),i.a.createElement($,null,i.a.createElement(E,{enableLayout:!0,extraMentions:ee})))};t.a=function(e){var t=e.flat,a=Object(n.useState)(!1),r=a[0],o=a[1],l=void 0;return Object(n.useEffect)((function(){return function(){return clearTimeout(l)}}),[l]),t?i.a.createElement(te,null):i.a.createElement(X,{on:r,toggleOn:function(){o(!0),l=setTimeout((function(){o(!1)}),1e3)}})}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-39f29b04bd9d511a56c8.js.map