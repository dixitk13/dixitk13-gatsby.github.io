(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BZiS:function(t,e,a){"use strict";a.d(e,"a",(function(){return j})),a.d(e,"b",(function(){return y}));a("m/UD");var n=a("q1tI"),i=a.n(n),l=a("LvDl"),r=a("Wbzz"),o=a("vOnD"),c=a("7Qib"),m=a("lXoy"),s=a("wXPw"),d=a("kYAv"),g=a("InJ6"),p=o.c.ul.withConfig({displayName:"TagList__TagsUnorderedList",componentId:"sc-61lzxj-0"})(["margin:"," 0 0 0;list-style:none;display:grid;grid-gap:",";grid-template-columns:repeat(4,",");@media ","{grid-template-columns:repeat(2,",");}"],Object(c.b)(2),Object(c.b)(.5),"150px",c.a.mobile,"150px"),u=o.c.span.withConfig({displayName:"TagList__TagImage",componentId:"sc-61lzxj-1"})(["transition:all 0.3s;"," margin-bottom:0;"],(function(t){return!t.minimal&&Object(o.b)(["transform:rotate(-45deg);"])})),b=Object(o.c)(u).withConfig({displayName:"TagList__EmojiImage",componentId:"sc-61lzxj-2"})(["font-size:45px;"]),f=o.c.li.withConfig({displayName:"TagList__StyledListItem",componentId:"sc-61lzxj-3"})(["margin:0;height:",";width:",";border-radius:5px;position:relative;transition:all 0.3s;list-style:none;&:hover{transform:translateY(-2px);}&:active{transform:translateZ(-12px);}@media ","{height:",";width:",";}a{background:",";color:",";display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100%;width:100%;font-size:15px;padding:"," "," "," ",";border-radius:3px;text-decoration:none;text-align:center;&:hover{","{transform:unset;}}}"],"150px","150px",c.a.mobile,"150px","150px",g.a,g.h,Object(c.b)(.5),Object(c.b)(.5),Object(c.b)(.25),Object(c.b)(.5),u),x=Object(o.c)(m.b).withConfig({displayName:"TagList__TagsListContainer",componentId:"sc-61lzxj-4"})([""]),h=o.c.span.withConfig({displayName:"TagList__NumCount",componentId:"sc-61lzxj-5"})(["position:absolute;transform:rotate(0deg);height:27px;width:33px;border-radius:3px 3px 3px 9px;background:rgb(217,68,73);text-align:center;margin:0 auto;color:#fff;top:0;right:0;"]),w=o.c.div.withConfig({displayName:"TagList__Text",componentId:"sc-61lzxj-6"})(["width:100%;align-self:flex-end;"]),j=function(t){var e=t.group;return i.a.createElement(x,null,i.a.createElement(p,null,e.map((function(t,e){return i.a.createElement(y,{tagValue:t.fieldValue,count:t.totalCount,key:t.fieldValue+"-"+e})}))))},y=function(t){var e=t.tagValue,a=t.count,n=t.minimal;return n?i.a.createElement(v,{minimal:n,tagValue:e}):i.a.createElement(f,null,i.a.createElement(r.Link,{to:"/tags/"+Object(l.kebabCase)(e)+"/"},i.a.createElement(v,{tagValue:e}),i.a.createElement(w,null,e)),i.a.createElement(h,null,a))},v=function(t){var e=t.tagValue,a=t.minimal;return d.a[e]?i.a.createElement(b,{minimal:a,as:"div"},d.a[e]):i.a.createElement(u,{as:"img",width:"55px",height:"55px",minimal:a,src:s.a[e],alt:e})}},"m/UD":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return g})),a.d(e,"pageQuery",(function(){return p}));var n=a("q1tI"),i=a.n(n),l=a("vOnD"),r=a("lXoy"),o=a("BZiS"),c=a("7Qib"),m=a("kYAv"),s=Object(l.c)(r.b).withConfig({displayName:"TagDetail__TagDetailMainContainer",componentId:"sc-19hmzt3-0"})(["justify-content:flex-start;align-items:center;margin:"," 0 0 0;"],Object(c.b)(2)),d=Object(l.c)(r.e).withConfig({displayName:"TagDetail__AllTagsLink",componentId:"sc-19hmzt3-1"})(["margin-top:auto;span{margin-left:6px;}"]);function g(t){var e=t.pageContext,a=t.data,n=e.tag,l=a.allMarkdownRemark,c=l.edges,g=l.totalCount;return i.a.createElement(r.d,null,i.a.createElement(s,null,i.a.createElement(o.b,{minimal:!0,count:g,tagValue:n}),c.map((function(t,e){var a=t.node,n=a.frontmatter,l=a.excerpt,o=n.title,c=n.path,m=n.date,s=n.id;return i.a.createElement(r.a,{key:"tag-blog-item-"+e,id:s,path:c,date:m,excerpt:l,title:o})})),i.a.createElement(d,{to:"/tags"},m.a.back,i.a.createElement("span",null,"All tags"))))}var p="4123068730"}}]);
//# sourceMappingURL=component---src-components-tags-tag-detail-js-8a3b288d90be499f49d3.js.map