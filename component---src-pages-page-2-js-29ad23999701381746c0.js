(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(141),l=t(147);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(c.Link,{to:"/"},"Go back to the homepage"))}},141:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return u});var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(140),i=t.n(s);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var o=t(142),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var p=t(33);t.d(a,"parsePath",function(){return p.a});var d=r.a.createContext({}),u=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},142:function(e,a,t){var n;e.exports=(n=t(144))&&n.default||n},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Spread"}}}}},144:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),s=t(48),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},145:function(e,a,t){},147:function(e,a,t){"use strict";var n=t(143),r=t(0),c=t.n(r),l=t(4),s=t.n(l),i=t(148),o=t.n(i),m=t(141),p=function(e){e.siteTitle;var a=e.headerClassName;return c.a.createElement("nav",{className:["navbar navbar-default navbar-fixed-top affix-top"].concat([a]).join(" "),"data-spy":"affix","data-offset-top":800,role:"navigation"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-header"},c.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-collapse","aria-expanded":"false"},c.a.createElement("span",{className:"sr-only"},"Toggle navigation"),c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"})),c.a.createElement("a",{className:"navbar-brand",href:"/"},"Spread")),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-collapse","aria-expanded":"false"},c.a.createElement("form",{className:"navbar-form navbar-right subscribe-form hidden-sm"}),c.a.createElement("ul",{className:"nav navbar-nav navbar-right"},c.a.createElement("li",{className:"active"},c.a.createElement("a",{href:"/"},"Product")),c.a.createElement("li",null,c.a.createElement("a",{href:"#pricing",id:"pricing-hide"},"Pricing"))))))},d=function(e){e.siteTitle;return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"top-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("h6",{className:"footer-title space-bottom-2x hidden-xs"},"Product"),c.a.createElement("h6",{className:"footer-title visible-xs collapsed","data-toggle":"collapse","data-target":"#product","aria-expanded":"false"},"Product"),c.a.createElement("ul",{className:"list-group collapse",id:"product","aria-expanded":"false"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("a",{href:"/#pricing"},"Pricing")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("a",{href:"https://medium.com/spread-dao"},"Blog"))))))),c.a.createElement("div",{className:"bottom-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("p",{className:"separator-top-1x"},c.a.createElement("span",{className:"text-left"},"Copyright 2018 Empire InCloud LTD. All rights reserved.")))))))},u=(t(145),function(e){var a=e.children,t=e.headerClassName;return c.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"freelance platform"},{name:"keywords",content:"freelance, platform"}]},c.a.createElement("meta",{charset:"utf-8"}),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),c.a.createElement("meta",{property:"og:image",content:"/images/apple-touch-icon.png"}),c.a.createElement("link",{rel:"image_src",href:"/images/apple-touch-icon.png"}),c.a.createElement("meta",{name:"description",content:"Spread is a freelance platform which provides fast, reliable and unified access to best freelancers."}),c.a.createElement("meta",{name:"keywords",content:"spread, freelance, upwork, market data"}),c.a.createElement("link",{rel:"shortcut icon",href:"/images/favicon-32x32.png",type:"image/x-icon"}),c.a.createElement("link",{rel:"icon",href:"/images/favicon-32x32.png",type:"image/x-icon"}),c.a.createElement("title",null,"Spread - Freelancer platform with AI for finding "),c.a.createElement("link",{rel:"stylesheet",href:"/stylesheets/boostrap.css"}),c.a.createElement("link",{href:"/stylesheets/styles.css",rel:"stylesheet",media:"screen"}),c.a.createElement("link",{rel:"stylesheet",href:"https://s.pageclip.co/v1/pageclip.css",media:"screen"}),c.a.createElement("script",{src:"https://s.pageclip.co/v1/pageclip.js",charset:"utf-8"}),c.a.createElement("script",{src:"/javascripts/lib/jquery/jquery.js",type:"text/javascript"}),c.a.createElement("script",{src:"/javascripts/js/site.js",type:"text/javascript"})),c.a.createElement(p,{siteTitle:e.site.siteMetadata.title,headerClassName:t}),c.a.createElement("div",{className:"page-wrapper"},a),c.a.createElement(d,null))},data:n})});u.propTypes={children:s.a.node.isRequired};a.a=u}}]);
//# sourceMappingURL=component---src-pages-page-2-js-29ad23999701381746c0.js.map