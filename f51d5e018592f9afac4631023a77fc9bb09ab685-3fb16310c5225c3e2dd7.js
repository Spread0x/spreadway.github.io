(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},LbRr:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("Wbzz"),function(e){var t="undefined"!=typeof document&&document;try{if(t)return document.location.pathname==e?"active":""}catch(n){return console.log(n),""}});t.a=function(e){e.siteTitle;var t=e.headerClassName;return a.a.createElement("nav",{className:["navbar navbar-default navbar-fixed-top affix-top"].concat([t]).join(" "),"data-spy":"affix","data-offset-top":800,role:"navigation"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar-header"},a.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-collapse","aria-expanded":"false"},a.a.createElement("span",{className:"sr-only"},"Toggle navigation"),a.a.createElement("span",{className:"icon-bar"}),a.a.createElement("span",{className:"icon-bar"}),a.a.createElement("span",{className:"icon-bar"})),a.a.createElement("div",{className:"navbar-brand-container"},a.a.createElement("svg",{className:"navbar-brang-logo",width:50,height:64},a.a.createElement("path",{d:"M14.488 6.053C17.34 2.155 22.443.293 27.286.025c6.178-.23 12.575 1.104 17.71 4.477a400.32 400.32 0 00-1.873 2.196c-4.807-2.884-10.602-4.183-16.256-3.81-3.795.35-7.782 1.822-9.987 4.927-1.403 1.944-1.476 4.43-.938 6.66.514-1.611.943-3.313 2.109-4.634 2.314-2.758 6.082-4.066 9.7-4.273 4.702-.143 9.513.835 13.536 3.212-.606.75-1.221 1.494-1.827 2.243a22.471 22.471 0 00-11.677-2.598c-2.634.221-5.413 1.022-7.203 2.97-1.836 2.023-2.01 5.128-.588 7.4-.164-3.078 1.822-6.083 4.93-7.074 4.164-1.325 8.784-.369 12.656 1.376a52.93 52.93 0 01-1.936 2.308 16.842 16.842 0 00-7.923-1.398c-1.563.112-3.18.766-4.041 2.06-1.076 1.594-.87 3.781.346 5.253 1.977 2.52 4.98 4.01 7.754 5.603 6.465 3.685 13.185 7.825 16.84 14.315 2.118 3.5 1.662 7.98-.42 11.393.387-4.443-1.061-8.929-3.936-12.44-4.647-5.716-11.4-9.31-17.805-12.96-4.237-2.46-8.675-4.967-11.632-8.868-2.715-3.533-3.002-8.678-.337-12.31zM7.03 9.538c.943-4.295 4.725-7.72 9.103-8.902-2.948 2.264-5.527 5.235-6.155 8.89-.953 4.71 1.225 9.538 4.733 12.83 7.267 7.005 17.678 9.989 24.986 16.964 3.453 3.127 6 7.556 5.522 12.207-.46 4.14-3.718 7.413-7.286 9.521 1.14-1.459 2.525-2.784 3.258-4.494 2.292-4.729 1.116-10.643-2.679-14.363-6.875-6.997-16.898-9.963-24.338-16.29C9.304 21.94 5.79 15.751 7.03 9.538zM3.668 21.351c-.939-2.884-.743-5.989.09-8.873.47 5.313 2.99 10.353 7.053 14.03 7.04 6.958 17.145 9.95 24.544 16.462 2.756 2.356 4.524 5.855 4.073 9.423-.324 3.568-2.889 6.599-6.005 8.435-4.633 2.745-10.297 3.498-15.659 3.052C11.313 63.257 5.217 60.633 0 57.047c.624-.736 1.253-1.463 1.877-2.2 5.918 3.958 13.049 6.769 20.397 6.288 4.465-.329 9.226-1.593 12.27-4.902 2.036-2.152 2.492-5.36 1.362-8.014-.405 1.697-.77 3.477-1.932 4.884-2.76 3.59-7.595 5.187-12.132 5.295-6.53.317-12.826-2.264-18.047-5.815.638-.736 1.28-1.472 1.932-2.195 5.476 3.72 12.433 6.278 19.217 4.81 3.422-.684 6.944-2.831 7.746-6.256.432-1.395-.443-3.77-.582-4.138-.41 1.369-.763 2.856-1.715 3.995-2.187 2.784-5.94 4.066-9.5 4.1-4.87-.034-9.476-2.005-13.403-4.616.633-.753 1.276-1.502 1.914-2.251 2.897 1.922 6.173 3.45 9.704 3.91 2.597.346 5.403-.113 7.536-1.62 1.48-1.052 2.638-2.784 2.291-4.602-.373-1.862-2.032-3.135-3.608-4.123-5.5-3.208-11.226-6.205-15.987-10.405-2.447-2.178-4.734-4.715-5.672-7.841z",fill:"#3F3356",fillRule:"nonzero"})),a.a.createElement("a",{className:"navbar-brand",href:"/"},"Spread"))),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-collapse","aria-expanded":"false"},a.a.createElement("ul",{className:"nav navbar-nav navbar-right"},a.a.createElement("li",{className:o("/")},a.a.createElement("a",{href:"/"},"For Clients")),a.a.createElement("li",{className:o("/freelancers/")},a.a.createElement("a",{href:"/freelancers/"},"For Freelancers"))))))}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),s=r.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,m=new s(p)!==p;if(n("nh4g")&&(!m||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(m?new l(r&&!o?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&o?u.call(e):t),n?this:f,s)};for(var h=function(e){e in s||o(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},y=i(l),b=0;y.length>b;)h(y[b++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},TaHU:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("Oyvg"),n("pIFo");var r=function(){var e,t,n;return"/"==(e="undefined"!=typeof window?window.location.pathname:"/")?"root":(t="/",n="",e.replace(new RegExp(t,"g"),n))}},"W/9C":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.footerClassName;return a.a.createElement("footer",{className:"footer "+t},a.a.createElement("div",{className:"bottom-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-12"},a.a.createElement("p",{className:"separator-top-1x"},a.a.createElement("span",{className:"text-left"},"Copyright 2018-2020 Empire InCloud LTD. All rights reserved.")))))))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var y=a(t);if((u=y.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=y[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",C="href",A="http-equiv",O="innerHTML",S="itemprop",N="name",j="property",x="rel",P="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",F="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),H=[T.NOSCRIPT,T.SCRIPT,T.STYLE],K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,T.TITLE),n=$(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,k);return t||r||void 0},V=function(e){return $(e,q)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),ce(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,a,r),link:pe(T.LINK,o,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,s,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:G([C,I],e),bodyAttributes:X(b,e),defer:$(e,M),encode:$(e,R),htmlAttributes:X(v,e),linkTags:Z(T.LINK,[x,C],e),metaTags:Z(T.META,[N,w,A,j,S],e),noscriptTags:Z(T.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:Z(T.SCRIPT,[P,O],e),styleTags:Z(T.STYLE,[E],e),title:J(e),titleAttributes:X(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return U(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return _({},a,((t={})[r.type]=i,t.titleAttributes=_({},o),t));case T.BODY:return _({},a,{bodyAttributes:_({},o)});case T.HTML:return _({},a,{htmlAttributes:_({},o)})}return _({},a,((n={})[r.type]=_({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(B(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=f51d5e018592f9afac4631023a77fc9bb09ab685-3fb16310c5225c3e2dd7.js.map