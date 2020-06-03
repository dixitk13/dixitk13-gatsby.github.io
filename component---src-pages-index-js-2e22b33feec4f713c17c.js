(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0VgB":function(e,t,n){e.exports=n.p+"static/Dixit_Keshavbhai_Patel_2019-ac2846c211548701586e0fe7f15a21a9.pdf"},E53F:function(e){e.exports=JSON.parse('{"data":{"blogs":{"edges":[{"node":{"id":"596d991f-212b-56c4-8a74-c501d64fa4bc","html":"<p>I believe in making small pull requests and they can be either of features, bug fixes, changes/updates and improvements.</p>\\n<p>I\'ve always felt that need to entitle my PR\'s with:</p>\\n<ul>\\n<li>\\n<p><code>[DO-NOT-MERGE]</code>:</p>\\n<ul>\\n<li>When i need to show it to my folks and get opinions or ideas and not having to send it out in an email/slack message.</li>\\n<li>Or when I need to get it reviewed from other managers out there if the behavior is finally what they asked for.</li>\\n<li>Or I need a build out prod version of my code</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>[NEEDS-TESTING]</code>: when I\'ve finished writing the code:</p>\\n<ul>\\n<li>but its 12am</li>\\n<li>or maybe my codebase lacks e2e for all the other code surrounding mine.\\nP.S: lets face it guys not everyone has strong e2e and pushes at 12 am, sets to auto-complete and sleeps the night.</li>\\n</ul>\\n</li>\\n</ul>\\n<p><code>[DRAFT]</code> is my rescuer here where any teammate isn\'t going to click merge/approve and call it a day but is definately going to have a look to leave out comments to chime and continue the discussions</p>\\n<p>Ref: <a href=\\"https://github.blog/2019-02-14-introducing-draft-pull-requests/\\">https://github.blog/2019-02-14-introducing-draft-pull-requests/</a></p>\\n<h2>What I follow as nomenclature for Pull Requests:</h2>\\n<p>Most of my PR\'s follow a nomenclature for branch naming as well, call me victim of OCD but that\'s me!</p>\\n<ul>\\n<li><code>&#x3C;username>/hotfix/&#x3C;branch-code-name></code> : for hot-fixes of course</li>\\n<li><code>&#x3C;username>/changes/&#x3C;branch-code-name></code> : for changes/improvements</li>\\n<li><code>&#x3C;username>/feature/&#x3C;branch-code-name></code>: for feature updates</li>\\n</ul>\\n<p>where branch code name is an at-most 3 letter word for what the branch is doing. I try not to name them like with prefix of an issue number since I am bad with numbers, but if you are that\'s the best way to do your nomenclature TBH.</p>\\n<p>I usually try to keep my commit messages short, so its readable in single line - about 50 or less should do it. If you\'d like to write more text, after the 50 lines a new line should be added and rest of the text should be wrapped at 72 lines-ish.</p>\\n<p>A good read about how I adopted the above <a href=\\"https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html\\">here</a></p>\\n<p>Some argue making the commit message like a summary helps them the below for sending (nicely formatted emails)[https://thoughtbot.com/blog/send-a-patch-to-someone-using-git-format-patch], but meh - email\'s not going to live long hopefully.</p>\\n<pre><code>git format-patch &#x3C;branch> --stdout\\n</code></pre>\\n<p>Adopt <strong>rebase</strong>. It seems to keep the history clean, coming from the <strong>merge</strong> guy who used merge for several years now :)</p>","frontmatter":{"path":"/draft-pull-requests","type":"blog","date":"May 10, 2020","title":"Draft pull requests"},"excerpt":"I believe in making small pull requests and they can be either of features, bug fixes, changes/updates and improvements. I\'ve always felt t…"}},{"node":{"id":"a8274742-fd3c-5b0c-bd21-4b0a3f9b49c5","html":"<p>Very often we have use-cases where we would like to use a single type <code>Union Type</code> but still be sure about the properties inside them.</p>\\n<pre><code class=\\"language-{javascript}\\">interface Employee {\\n  name: string;\\n    salary: number;\\n}\\n\\ninterface HumanResource {\\n  name: string;\\n  power: boolean;\\n}\\n\\nlet person: Employee | HumanResource;\\n</code></pre>\\n<p>But under the hood Typescript union\'s are more of \\"common\\" properties inside them instead of \\"having all the properties\\".</p>\\n<p>So when you try and use it like:</p>\\n<pre><code class=\\"language-{javascript}\\">let helloPerson = (person: Employee | HumanResource): void => {\\n   console.log(person.&#x3C;only has properties common to Employee &#x26; HumanResource aka name>);\\n}\\n</code></pre>\\n<p>where as you would expect person to have <code>{name, salary}</code> or <code>{name, power}</code> and choose between them depending on what person is.</p>\\n<p>This is where discriminators come in power-play. Bear with my variable nomenclature:</p>\\n<p>Lets define an enum to contain both the use-cases of Person\'s we have, calling it <code>PersonType</code> and then define a type combining <code>HumanResource</code> and <code>Employee</code>.</p>\\n<pre><code class=\\"language-{javascript}\\">enum PersonType { \\"EMPLOYEE\\" , \\"HR\\" }\\n\\ninterface Employee {\\n  name: string;\\n  type: PersonType.EMPLOYEE\\n    salary: number;\\n}\\n\\ninterface HumanResource {\\n  name: string;\\n  type: PersonType.HR\\n  power: boolean;\\n}\\n\\ntype Person = HumanResource | Employee;\\n\\nlet person: Employee | HumanResource;\\n\\nlet helloPerson = (person: Person): void => {\\n  switch(person.type) {\\n    case PersonType.EMPLOYEE:\\n      // this gives you both name/salary since now TS understands\\n      // and discriminates between the two types you have\\n      console.log(person.{gives you name, salary});\\n  }\\n}\\n</code></pre>","frontmatter":{"path":"/typescript-discriminator","type":"blog","date":"Apr 10, 2020","title":"Typescript discriminator"},"excerpt":"Very often we have use-cases where we would like to use a single type Union Type but still be sure about the properties inside them. But un…"}},{"node":{"id":"c7653b68-3d90-5977-8478-43647f104d0e","html":"<p>I was recently trying to make a simple countdown timer which counts from a specific time-interval and “finishes” itself.</p>\\n<p>I just found it amazing that a few lines of code could bring in such a thing!\\nthe code just uses a state called “minutes” which gets initialized with the total number of seconds for which the timer stays.</p>\\n<p>The component accepts minutes till which it must stay alive, converts that into seconds, runs the countdown and then clears the internal logic.</p>\\n<pre><code class=\\"language-{javascript}\\">&#x3C;Timer classNames=\\"time-text\\" minutes={Number(10)} />\\n</code></pre>\\n<p>And here’s the entire code.</p>\\n<pre><code class=\\"language-{javascript}\\">import React, { Fragment, useState, useEffect } from \'react\'\\n\\nconst Timer = ({ minutes, classNames }) => {\\n  if (!minutes) return null\\n\\n  const [seconds, setSeconds] = useState(minutes * 60)\\n\\n  useEffect(() => {\\n    let timeout = setInterval(() => {\\n      setSeconds(seconds - 1)\\n    }, 1000)\\n\\n    if (seconds &#x3C; 0) {\\n      clearTimeout(timeout)\\n    }\\n\\n    return () => {\\n      clearInterval(timeout)\\n    }\\n  }, [seconds])\\n\\n  const showMins = Math.floor(seconds / 60)\\n  const showSeconds = seconds % 60\\n\\n  const PadString = ({ number }) => String(number).padStart(2, \'0\')\\n\\n  if ((!showMins &#x26;&#x26; !showSeconds) || showMins &#x3C; 0)\\n    return &#x3C;span className={classNames}>Complete!&#x3C;/span>\\n\\n  return (\\n    &#x3C;Fragment>\\n      &#x3C;span className={classNames}>\\n        &#x3C;PadString number={showMins} />:&#x3C;PadString number={showSeconds} />\\n      &#x3C;/span>{\' \'}\\n      remaining\\n    &#x3C;/Fragment>\\n  )\\n}\\n\\nexport default Timer\\n</code></pre>","frontmatter":{"path":"/simple-count-downtimer","type":"blog","date":"Apr 24, 2019","title":"Simple Countdown Timer"},"excerpt":"I was recently trying to make a simple countdown timer which counts from a specific time-interval and “finishes” itself. I just found it am…"}}],"totalCount":3}}}')},OGtf:function(e,t,n){var a=n("XKFU"),o=n("eeVq"),i=n("vhPU"),r=/"/g,s=function(e,t,n,a){var o=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return ce}));var a=n("q1tI"),o=n.n(a),i=n("Zttt"),r=n("vOnD"),s=n("nDrJ"),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("UeZE")),c=(n("tUrg"),n("xpKI")),d=n("LMky"),u=function(e){var t=e.id,n=e.title,a=e.link,i=e.tags,r=e.body,s=e.images,l=e.html,u=e.toggleOpen,m=e.open,p=e.active,h=e.index;return o.a.createElement(c.b,{active:p,index:h,open:m,cardId:t},o.a.createElement(c.c,{open:m},o.a.createElement(c.h,{index:h,open:m,cardId:t,onClick:function(){return u(t)}},n),o.a.createElement(d.a,{images:s}),o.a.createElement(c.a,{ariaLabel:"Project Overview"},r)),o.a.createElement(c.e,{cardId:t,open:m},o.a.createElement(c.f,{open:m,dangerouslySetInnerHTML:{__html:l}}),o.a.createElement(c.j,{open:m},i.map((function(e,t){return o.a.createElement(c.i,{key:"card-tag-"+t+"-"+e},e)})),o.a.createElement(c.k,{as:"button","aria-label":"View more details",target:"_blank",referrer:"noopener noreferrer",onClick:function(e){return function(e,t){e.stopPropagation(),window.open(t)}(e,a)}},"View More ➡")),o.a.createElement(c.g,{onClick:function(e){return function(e,t){e.stopPropagation(),u(t)}(e,t)}},o.a.createElement(c.d,null))))},m=function(e){return o.a.createElement(u,e)};var p=function(e){var t=e.data,n=e.cardNumber,a=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data","cardNumber"]),i=t.projects.edges;return o.a.createElement(g,null,o.a.createElement(h,null,i.map((function(e,t){var i=e.node,r=i.excerpt,s=i.frontmatter,l=i.html;return o.a.createElement(m,Object.assign({key:"project-card-"+t,id:t,index:t,open:n===t,active:-1!==n,html:l,body:r},s,a))}))))},h=r.c.ul.attrs({role:"list","aria-label":"Projects"}).withConfig({displayName:"ProjectsView__ProjectCardsContainer",componentId:"lkntyh-0"})(["margin:0;@media ","{display:flex;flex-flow:row wrap;width:40vw;height:100%;}@media ","{width:90vw;display:flex;padding:0;flex-direction:column;}"],l.a.desktop,l.a.mobile),g=r.c.main.withConfig({displayName:"ProjectsView__MainContainer",componentId:"lkntyh-1"})(["@media ","{max-width:40vw;}"],l.a.screen4k),f=n("Wbzz"),b=function(){var e=Object(a.useState)(-1),t=e[0],n=e[1],i=function(e){return n(t===e?-1:e)};return o.a.createElement(f.StaticQuery,{query:"1107525976",render:function(e){return o.a.createElement(p,{cardNumber:t,toggleOpen:i,data:e})},data:s})},w=n("l3cv"),y=n.n(w),v=r.c.div.withConfig({displayName:"RealFlexView__RealFlexDiv",componentId:"sc-1hvlvrs-0"})(["@media "," and (min-height:","px){flex-basis:","px;transition:height 0.5s ease-all;}@media ","{display:none;}"],l.a.desktop,830,(function(e){return e.height||0}),l.a.mobile),x=function(e){var t=e.y,n=Math.min(920,t);return o.a.createElement(v,{height:n})},k=n("cKtk"),E=function(){return o.a.createElement(k.a.Consumer,null,(function(e){var t=e.y;return o.a.createElement(x,{y:t})}))},I=n("wXPw");var C=r.c.div.withConfig({displayName:"LogosView__Mentions",componentId:"sc-1j6ouug-0"})(["display:flex;height:48px;margin-bottom:1rem;flex-direction:row;justify-content:space-around;flex:0 1 auto;"]),j=r.c.img.withConfig({displayName:"LogosView__MentionsLogo",componentId:"sc-1j6ouug-1"})(["width:",";height:48px;margin-bottom:0;transition:all 0.2s ease-in-out;transform:",";&:hover{transform:",";}"],(function(e){return e.width||"48px"}),(function(e){return e.scale}),(function(e){return e.transform})),S=r.c.a.withConfig({displayName:"LogosView__Link",componentId:"sc-1j6ouug-2"})(["&:hover,&:active{box-shadow:0 0 0 0;}"]),O=function(e){var t=e.href,n=e.title,a=e.imgsrc,i=e.alt,r=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","title","imgsrc","alt"]);return o.a.createElement(S,{alt:i,"aria-label":i,rel:"noopener noreferrer",target:"_blank",href:t},a?o.a.createElement(j,Object.assign({src:a,alt:i},r),n):n)},P=function(){return o.a.createElement(C,null,[{href:"https://www.quora.com/profile/Dixit-Patel-4",imageName:"quora",alt:"Quora",width:"75px",transform:"scale(0.95)",scale:"scale(0.85)"},{href:"https://www.strava.com/athletes/19109068",imageName:"strava",alt:"Strava",transform:"scale(0.75)",scale:"scale(0.65)"},{href:"https://twitter.com/dixitk13",imageName:"twitter",alt:"Twitter",transform:"scale(0.75)",scale:"scale(0.65)"},{href:"https://github.com/dixitk13",imageName:"github",alt:"Github",width:"65px",transform:"scale(0.75)",scale:"scale(0.85)"}].map((function(e,t){return o.a.createElement(O,Object.assign({key:"mentions-"+t},e,{imgsrc:I.a[e.imageName]}))})))},A=function(){return o.a.createElement(P,null)},_=(n("f3/d"),n("7Qib")),N=n("InJ6"),R=[{name:"gatsby",url:"https://www.gatsbyjs.org/"},{name:"react",url:"https://reactjs.org/"},{name:"graphql",url:"http://graphql.org/"},{name:"styledcomponents",url:"https://styled-components.com",background:"#e0a90eba"},{name:"webpack",url:"https://webpack.js.org/"},{name:"babel",url:"https://babeljs.io/"},{name:"github",url:"https://www.github.com/"}],M=r.c.div.withConfig({displayName:"MadeWithView__Footer",componentId:"h2i4qv-0"})(["justify-self:flex-end;display:flex;flex-direction:column;margin-top:auto;a{transition:all 0.5s;&:hover{color:#555;z-index:1;}}"]),T=r.c.span.withConfig({displayName:"MadeWithView__Heart",componentId:"h2i4qv-1"})(['color:#d32f2f;&:after{content:"❤";}']),V=r.c.ul.attrs({role:"list"}).withConfig({displayName:"MadeWithView__Icons",componentId:"h2i4qv-2"})(["display:flex;justify-content:center;flex-wrap:wrap;margin:9px;"]),D=r.c.li.attrs({role:"listitem"}).withConfig({displayName:"MadeWithView__Icon",componentId:"h2i4qv-3"})(["list-style:none;margin-bottom:3px;"]),W=r.c.a.withConfig({displayName:"MadeWithView__Link",componentId:"h2i4qv-4"})(["padding:10px;"]),q=r.c.img.withConfig({displayName:"MadeWithView__IconImage",componentId:"h2i4qv-5"})(["width:22px;height:22px;margin-bottom:0;background:",";"],(function(e){return e.background||""})),L=r.c.button.withConfig({displayName:"MadeWithView__Title",componentId:"h2i4qv-6"})(["text-align:center;border:none;background:none;color:",";font-size:",";"],N.h,Object(_.b)(.65)),z=function(){return o.a.createElement(M,null,o.a.createElement(L,null,"Made with ",o.a.createElement(T,null)," using"),o.a.createElement(V,null,R.map((function(e){return o.a.createElement(D,{key:e.name},o.a.createElement(W,{href:e.url,alt:"Image","aria-label":"Technology Image "+e.name,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(q,{alt:e.name,src:I.a[e.name],background:e.background})))}))))},B=function(){return o.a.createElement(z,null)},J=n("0VgB"),F=n.n(J),H=n("kCjN"),G=n("YZYa"),Q=Object(r.c)(G.a).withConfig({displayName:"DownloadButtonsView__DownloadButton",componentId:"sc-1toqj75-0"})(["text-align:center;&:hover{background:rgb(226,227,228);box-shadow:none;transition-delay:0.2s;color:transparent;}&:before{opacity:0;position:absolute;color:black;content:attr(data-hover);transform:translate(0,0);transition:0.4s,opacity 0.6s;}&:hover:before{opacity:1;transform:translate(-6px,0);transition-delay:0.2s;}"]),U=r.c.div.attrs({role:"group","aria-label":"Resume and Theme Button"}).withConfig({displayName:"DownloadButtonsView__ButtonGroup",componentId:"sc-1toqj75-1"})(["display:flex;flex-direction:row;margin-bottom:1rem;justify-content:space-evenly;"]),K=function(e){var t=e.theme,n=e.toggleOn;return o.a.createElement(U,null,o.a.createElement(Q,{type:"button",ariaLabel:"Download Resume",target:"_blank","data-hover":"Download",href:F.a,as:"a",rel:"noopener noreferrer"},"Resume"),o.a.createElement(H.a,{toggleOn:n},t))},X=function(e){return o.a.createElement(k.a.Consumer,null,(function(t){var n=t.theme;return o.a.createElement(K,{theme:n,toggleOn:e.toggleOn})}))},Y=(n("PHbM"),n("jBtN")),Z=r.c.aside.attrs({"aria-label":"About me",tabIndex:"0"}).withConfig({displayName:"AboutMeView__AboutMeFlex",componentId:"sc-1uev3gr-0"})(["display:flex;flex-direction:column;@media ","{max-width:20vw;}"],_.a.screen4k),$=r.c.div.withConfig({displayName:"AboutMeView__AboutMeContainer",componentId:"sc-1uev3gr-1"})(["display:flex;flex-direction:column;width:20vw;padding:",";border-radius:",";background:",";box-shadow:",";z-index:2;@media ","{margin:0 10px "," 10px;}@media ","{height:unset;margin-right:unset;width:100%;margin-bottom:5px;}"],Object(_.b)(.25),Object(_.b)(.25),N.a,N.c,_.a.desktop,Object(_.b)(.25),_.a.mobile),ee=r.c.button.attrs({tabIndex:0}).withConfig({displayName:"AboutMeView__Name",componentId:"sc-1uev3gr-2"})(["color:",";font-size:",";margin:0 0 "," 0;cursor:pointer;font-weight:600;padding:0;&:hover{color:",";}"],N.h,Object(_.b)(1.5),Object(_.b)(.5),N.i),te=r.c.img.attrs({tabIndex:0}).withConfig({displayName:"AboutMeView__Image",componentId:"sc-1uev3gr-3"})(["flex:1 5 30%;min-height:0;max-height:350px;width:350px;align-self:center;margin-bottom:1rem;background-size:cover;clip-path:polygon(0,0);"]),ne=Object(r.c)(Y.a).attrs({tabIndex:0}).withConfig({displayName:"AboutMeView__Quote",componentId:"sc-1uev3gr-4"})(["margin-left:unset;color:",";font-size:",";border-left-color:",";margin-bottom:1rem;"],N.h,Object(_.b)(.65),N.h),ae=r.c.span.withConfig({displayName:"AboutMeView__ToggleHeartContainer",componentId:"sc-1uev3gr-5"})(['display:flex;height:0;width:0;transform:rotate(45deg);margin-left:auto;@keyframes heart{0%,17.5%{font-size:0;}}[for="toggle-heart"]{color:#aab8c2;font-size:2em;cursor:pointer;visibility:hidden;}[id="toggle-heart"]{display:none;transition:1s ease-all;&:checked + label{color:#e2264d;visibility:unset;will-change:font-size;animation:heart 1s cubic-bezier(0.17,0.89,0.32,1.49);}}']),oe=function(e){var t=e.on,n=e.toggleOn;return o.a.createElement(Z,null,o.a.createElement(E,null),o.a.createElement($,null,o.a.createElement(ae,null,o.a.createElement("input",{id:"toggle-heart",checked:t,onChange:n,type:"checkbox"}),o.a.createElement("label",{htmlFor:"toggle-heart"},"❤")),o.a.createElement(ee,{"aria-label":"Click to send Love",onClick:n},"Dixit Keshavbhai Patel"),o.a.createElement(te,{src:y.a,alt:"Dixit"}),o.a.createElement(ne,{"aria-label":"My Quote just another software engineer"},"just another software engineer"),o.a.createElement(A,null),o.a.createElement(X,{toggleOn:n}),o.a.createElement(B,null)))},ie=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=void 0;return Object(a.useEffect)((function(){return function(){return clearTimeout(i)}}),[i]),o.a.createElement(oe,{on:t,toggleOn:function(){n(!0),i=setTimeout((function(){n(!1)}),1e3)}})},re=r.c.div.withConfig({displayName:"HomeView__HomeViewContainer",componentId:"sc-1786o7o-0"})(["margin:0;display:flex;justify-content:center;background-color:",";background:",";color:",";padding:0 ",";@media ","{height:100vh;}@media ","{height:100%;}@media ","{flex-direction:column;overflow-x:hidden;}"],N.e,N.f,N.h,Object(_.b)(.75),_.a.screen4k,_.a.desktop,_.a.mobile),se=function(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){var t;console.log("scrolling?",null===(t=e.current)||void 0===t?void 0:t.offsetTop),window.scrollTo(0,200)}),[]),o.a.createElement(re,{ref:e},o.a.createElement(ie,null),o.a.createElement(b,null))},le=n("lXoy"),ce=(t.default=function(e){var t=e.data;return o.a.createElement(i.a,null,o.a.createElement(i.c,{siteMetadata:t.site.siteMetadata}),o.a.createElement(le.c,{background:!0}),o.a.createElement(se,null))},"22465933")},lXoy:function(e,t,n){"use strict";n.d(t,"b",(function(){return a.b})),n.d(t,"c",(function(){return a.c})),n.d(t,"a",(function(){return g}));var a=n("LKM1"),o=(n("gMHT"),n("E53F")),i=n("q1tI"),r=n.n(i),s=n("Wbzz"),l=n("vOnD"),c=n("7Qib"),d=n("InJ6"),u=l.c.main.withConfig({displayName:"BlogPostsView__Blogs",componentId:"sc-107fu6g-0"})([""]),m=l.c.article.withConfig({displayName:"BlogPostsView__SmallBlogItem",componentId:"sc-107fu6g-1"})(["font-size:30px;margin:20px auto;padding:20px;border-radius:3px;background:",";box-shadow:",";transition:all 0.3s ease;cursor:pointer;&:hover{transform:translateY(-2px);}&:active{transform:translateZ(-12px);}p{font-size:18px;}"],d.a,d.c),p=Object(l.c)(a.a).withConfig({displayName:"BlogPostsView__PostHeading",componentId:"sc-107fu6g-2"})(["margin:20px 0;display:flex;justify-content:space-between;@media ","{min-height:unset;flex-direction:row;align-items:flex-start;}a{margin:0;padding:0;font-weight:550;font-size:1.4rem;color:",";text-decoration:none;&:hover{color:",";cursor:pointer;filter:brightness(1.2);}}small{font-size:18px;}"],c.a.mobile,d.h,d.i),h=function(e){var t=e.blogs;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null,t&&t.map((function(e){var t=e.node,n=t.frontmatter,a=t.excerpt,o=t.id;return r.a.createElement(m,{key:"small-blog-item-"+o},r.a.createElement(p,{as:"header"},r.a.createElement(s.Link,{to:""+n.path},null==n?void 0:n.title),r.a.createElement("p",null,null==n?void 0:n.date)),r.a.createElement("p",null,a))})))):null},g=function(){return r.a.createElement(s.StaticQuery,{query:"1465357811",render:function(e){var t=e.blogs;return r.a.createElement(h,{blogs:t.edges})},data:o})}},nDrJ:function(e){e.exports=JSON.parse('{"data":{"projects":{"edges":[{"node":{"id":"52ca6447-38a7-5be3-b28c-6396eaecb821","html":"<p>I am currently a console developer on OCI(Oracle Cloud Infrastructure).</p>\\n<ul>\\n<li>We build and maintain next generation console applications on OCI.</li>\\n</ul>","frontmatter":{"title":"What I do today @ Oracle","date":"05 May, 2020","link":"https://console.us-phoenix-1.oraclecloud.com/","tags":["react","redux","typescript","react-hooks","oui"],"images":["react","typescript","redux"]},"excerpt":"I am currently a console developer on OCI(Oracle Cloud Infrastructure). We build and maintain next generation console applications on OCI."}},{"node":{"id":"cd52d1da-8669-5e0f-b277-f93582d86f12","html":"<p>A project demonstrating covid visualization with worldometer data and react-map-gl. The entire project is hosted on heroku dynos using Redis &#x26; Heroku Scheduler.\\nCo-authored w/ <a href=\\"https://github.com/bansalrachita\\">@bansalrachita</a></p>\\n<p>Express routes serve data which is updated within Redis via Heroku Scheduler every hour and cheerio based scrapper.</p>\\n<p>Read more about it <a href=\\"https://medium.com/@rachitabansal/visualizing-covid-19-159e86e6ac06\\">here</a>.</p>","frontmatter":{"title":"Covid Visualization","date":"01 April, 2020","link":"http://covid-visual.herokuapp.com/","tags":["nodeJS","react","redis","scheduler","heroku"],"images":["node","react","redis"]},"excerpt":"A project demonstrating covid visualization with worldometer data and react-map-gl. The entire project is hosted on heroku dynos using Redis…"}},{"node":{"id":"feddba5f-8d49-540c-a2c2-ffd0a15105a4","html":"<p>PeopleList using Typescript and React.</p>\\n<ul>\\n<li>Build a custom Accordian for re-usability purposes.</li>\\n<li>Uses custom React hooks and Typescript for educational purposes.</li>\\n<li>Deployed on herokuapp.</li>\\n</ul>","frontmatter":{"title":"People List","date":"01 January, 2020","link":"http://people-list.herokuapp.com/","tags":["react","typescript","react-hooks"],"images":["react","typescript","heroku"]},"excerpt":"PeopleList using Typescript and React. Build a custom Accordian for re-usability purposes. Uses custom React hooks and Typescript for…"}},{"node":{"id":"32d80fe6-1d96-5287-9d29-d36b60d5758e","html":"<p>I worked on a Web Application based on Flask, MongoDB, MySQL,\\nReact &#x26; Redux.</p>\\n<ul>\\n<li>We use blueprintJS for UI Components and follow Airbnb standards for ECMAScript 6</li>\\n<li>I have unilaterally implemented a custom notification system, using SNS/SQS\\nand AWS Lambda, which notifies based on the latest record, insufficient state,\\nthreshold levels, etc.</li>\\n<li>Spearheaded the team to achieve CATO(Cloud Allowed to Operate),\\na security process by Cisco, for operating in an external cloud.</li>\\n<li>Designed an Admin System to grant access control for the entire organization.</li>\\n<li>Integrated cflow into automation code base system to achieve code-coverage.</li>\\n</ul>","frontmatter":{"title":"What I did @ Cisco","date":"01 January, 2019","link":"https://cafy.io","tags":["react","redux","javascript","blueprintjs","sql","python","mongodb","aws","cloudfront"],"images":["react","redux","javascript","blueprintjs","sql","python"]},"excerpt":"I worked on a Web Application based on Flask, MongoDB, MySQL,\\nReact & Redux. We use blueprintJS for UI Components and follow Airbnb…"}},{"node":{"id":"7cee97e4-c260-579a-8680-b9abd5bf98b2","html":"<p>A basic application which started with learning GraphQL and is transforming as a TODOs app</p>\\n<ul>\\n<li>Query and view markdowns via graphQL backend</li>\\n<li>WIP: Implementing a typing box where user can type markdown text in realtime</li>\\n</ul>","frontmatter":{"title":"Markdown TO-DOs","date":"02 December, 2018","link":"https://simple-graphql.herokuapp.com/","tags":["apollo","graphql","axios","react"],"images":["apollo","graphql","react"]},"excerpt":"A basic application which started with learning GraphQL and is transforming as a TODOs app Query and view markdowns via graphQL backend WIP…"}},{"node":{"id":"580ffbf1-02c1-5d3d-83c4-3b99b71174c8","html":"<ul>\\n<li>A basic application with server side rendering for ReactJS.</li>\\n<li>Again using my favorite boilerplate, CRA.</li>\\n</ul>","frontmatter":{"title":"Server Side Rendering","date":"17 June, 2018","link":"https://github.com/dixitk13/basic-react-server-side","tags":["react","styled-components","cra","reactdom"],"images":["react","styled-components","cra"]},"excerpt":"A basic application with server side rendering for ReactJS. Again using my favorite boilerplate, CRA."}},{"node":{"id":"bf7e32ce-6a71-5129-99be-569799722652","html":"<ul>\\n<li>Creating a custom service worker in a simple PWA(Progressive Web Application) just because, Steve Jobs dreamed of it long ago, its going to be the future!</li>\\n<li>Its a React Application with a CRA boilerplate, ejected to enable writing custom service worker.</li>\\n</ul>","frontmatter":{"title":"Service Workers in PWA","date":"21 August, 2017","link":"https://github.com/dixitk13/toggle-me","tags":["react","cra","pwa","service workers"],"images":["react","cra","pwa"]},"excerpt":"Creating a custom service worker in a simple PWA(Progressive Web Application) just because, Steve Jobs dreamed of it long ago, its going to…"}},{"node":{"id":"e303a2e3-ac40-56c1-a5ba-aa5ff28d09e4","html":"<p>Personal project where I\'ve implemented a few graph algorithms on a famous data set, Enron Data Set.</p>\\n<ul>\\n<li>\\n<p>Algorithms viz.</p>\\n<ul>\\n<li>Freeman\'s Degree Centrality</li>\\n<li>Closeness Centrality</li>\\n<li>Farness Centrality</li>\\n<li>Betweenness Centrality</li>\\n<li>EigenVector Centrality - using JBLAS library</li>\\n<li>Transitive Closure</li>\\n<li>FloydWarshall\'s Algorithm</li>\\n</ul>\\n</li>\\n</ul>","frontmatter":{"title":"Enron Social Graph","date":"26 November, 2015","link":"https://github.com/dixitk13/readmes.md/blob/master/personal-projects.md","tags":["graph","java","d3js","algorithms"],"images":["graph","java","d3js"]},"excerpt":"Personal project where I\'ve implemented a few graph algorithms on a famous data set, Enron Data Set. Algorithms viz. Freeman\'s Degree…"}},{"node":{"id":"678f9221-7e8d-58ce-abf0-a1f75450e8d5","html":"<p>As an intern I was tasked with improving the operations and debugging experience with the core application of Genesys(Soundbite) at the center of the task.</p>\\n<ul>\\n<li>I designed a scalable data architecture using open-source software to collect logs generated via the application into a centralized logging system. The architecture comprised of Log-courier, Logstash, Elasticsearch &#x26; Kibana (ELK) with searchers, masters, data-nodes &#x26; indexers. The architecture was capable of ingesting 11,000 events per second.</li>\\n<li>I\'ve also customized Logstash filters in Ruby (JRuby), developed Perl &#x26; Java indexing modules to ingest synthesized data.</li>\\n</ul>","frontmatter":{"title":"My Internship @ Genesys","date":"04 April, 2015","link":"https://www.linkedin.com/company/genesys/","tags":["logstash","linux","elasticsearch","kibana","genesys","logcourier"],"images":["logstash","linux","elasticsearch","kibana","genesys"]},"excerpt":"As an intern I was tasked with improving the operations and debugging experience with the core application of Genesys(Soundbite) at the…"}},{"node":{"id":"c3b380c7-a98a-5724-ae35-effaa98bf865","html":"<ul>\\n<li>I studied computer science at Northeastern University during the Fall \'14 Semester.</li>\\n<li>GPA ④</li>\\n<li>I was also the teaching assistant for Information Retrieval for 3 terms.</li>\\n<li>\\n<p>I attended the following courses:</p>\\n<ul>\\n<li>Web Development</li>\\n<li>Computer Systems</li>\\n<li>Algorithms</li>\\n<li>Natural Language Processing</li>\\n<li>Information Retrieval</li>\\n<li>Data Mining Techniques</li>\\n<li>Parallel Data Processing with Map-Reduce</li>\\n<li>Programming Design Paradigm</li>\\n</ul>\\n</li>\\n</ul>","frontmatter":{"title":"What I did @ Northeastern","date":"15 August, 2014","link":"https://www.khoury.northeastern.edu/program/computer-science-ms/","tags":["northeastern","cs","algorithms","datascience"],"images":["northeastern","hat","computerscience"]},"excerpt":"I studied computer science at Northeastern University during the Fall \'14 Semester. GPA ④ I was also the teaching assistant for Information…"}},{"node":{"id":"989ab612-f2f7-5bd4-a4bf-d0b9bc1ae3e4","html":"<p>I was an Application Developer for a J2EE application which dealt with “VPN automation” automating the entire VPN order processing till the step of provisioning.</p>\\n<p>There\'s a lot one does in 3 years, so I\'ll mention a few highlights:</p>\\n<ul>\\n<li>Designed and developed a lot of web-services to integrate in the application.</li>\\n<li>Reduced redundancy in code and number of database connections by implementing a Generic Database Service in Hibernate using JAX-WS framework &#x26; Java Reflections.</li>\\n<li>Spearheaded the migration of Web Services &#x26; Web Applications from Tomcat 6.0 to Weblogic 12c.</li>\\n</ul>","frontmatter":{"title":"What I did @ Infosys","date":"25 September, 2011","link":"https://www.infosys.com/","tags":["java","sql","hibernate","reflections","infosys","soa","jaxws"],"images":["java","sql","hibernate","reflections","infosys"]},"excerpt":"I was an Application Developer for a J2EE application which dealt with “VPN automation” automating the entire VPN order processing till the…"}}]}}}')},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-2e22b33feec4f713c17c.js.map