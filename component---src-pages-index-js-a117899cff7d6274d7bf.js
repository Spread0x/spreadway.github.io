(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{CVYl:function(e,t,n){},FBng:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i="Intrested?",r="Leave your name and email to get updates",s="on the development.",c="Subscribe";t.default=function(e){var t=e.role;return o.a.createElement("section",{id:"cta",className:t},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"content-box wanna-try"},o.a.createElement("div",{class:"cta-info"},o.a.createElement("h3",{className:"section-heading fadeInDown animate"},i),o.a.createElement("div",null,o.a.createElement("b",null,o.a.createElement("h5",null,"IMAGE"))),o.a.createElement("p",null,r,o.a.createElement("br",null),s)),o.a.createElement("p",{className:"hidden-success"},"Thanks!"),o.a.createElement("form",{action:"https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form",className:"pageclip-form",method:"post"},o.a.createElement("div",{className:"form-fields"},o.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"John Doe"}),o.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"john@acme.com"})),o.a.createElement("button",{type:"submit",className:"btn btn-api fadeInUp animate"},c)))))}},LuXO:function(e){e.exports=JSON.parse('{"data":{"sitePage":{"id":"SitePage /dev-404-page/"},"site":{"siteMetadata":{"title":"Spread | AI powered freelance platform"}}}}')},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=(n("Wbzz"),n("LuXO")),r=n("qhky");n("LbRr"),n("W/9C"),n("TaHU"),n("CVYl");var s=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);i.data;return o.a.createElement("div",null,o.a.createElement(r.a,{title:"S P R E A D",charset:"utf-8",onChangeClientState:function(e,t){return function(e){var t=e.scriptTags;if(t)return t.map((function(e){return e.onload=function(){console.log("myExternalLib loaded!",t,window.myExternalLib);try{renderGph()}catch(e){}}}))}(t)},meta:[{name:"description",content:"freelance platform"},{name:"keywords",content:"freelance, platform"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:image",content:"/images/apple-touch-icon.png"},{name:"description",content:"Spread provides fast, reliable, unified access to best freelancers."},{name:"keywords",content:"spread, freelance, upwork, market data"}]},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:100",rel:"stylesheet",type:"text/css"}),o.a.createElement("script",{type:"text/javascript",src:"/js/jquery2.js"}),o.a.createElement("script",null,' \nfunction isFunction(functionToCheck) {\n  return functionToCheck && {}.toString.call(functionToCheck) === \'[object Function]\';\n }\n   var renderGph = () => { \n    $().ready(function(){\n      !function(o){"use strict";o.fn.bezierCanvas=function(t){var e=window.devicePixelRatio>1?2:1;null==navigator.userAgent.match(/iPad/i)&&null==navigator.userAgent.match(/iPhone/i)||(e=1.5);var i=[],a=[],n=o.extend({maxStyles:10,maxLines:100,strokeWidth:.5,lineSpacing:1,spacingVariation:0,colorBase:{r:100,g:100,b:100},colorVariation:{r:100,g:100,b:100},globalSpeed:300,globalAlpha:.5,delayVariation:.3,speedLinear:!1,coordinates:[],loop:!1,moveCenterX:0,moveCenterY:0,spacingMode:"add"},t),r=this[0],s=r.getContext("2d");r.style.height=o(window).height()+"px",r.style.width=o(window).width()+"px",r.width=o(window).width()*e,r.height=o(window).height()*e,s.save(),o(window).on("resize",function(){s.restore(),r.style.height=o(window).height()+"px",r.style.width=o(window).width()+"px",r.width=o(window).width()*e,r.height=o(window).height()*e,s.translate(r.width/2+n.moveCenterX,r.height/2+n.moveCenterY)}),s.translate(r.width/2+n.moveCenterX,r.height/2+n.moveCenterY);for(var d=0;d<n.maxStyles;d++)a.push({cR:Math.round(n.colorBase.r+Math.random()*n.colorVariation.g),cG:Math.round(n.colorBase.g+Math.random()*n.colorVariation.g),cB:Math.round(n.colorBase.b+Math.random()*n.colorVariation.g),line:n.strokeWidth*e}),i[d]=[];for(var h=0;h<n.maxLines;h++){var c=Math.random(),m=Math.floor(Math.random()*n.maxStyles);i[m].push({speed:n.speedLinear?.1+h/200:n.delayVariation*c+.1,pos:(h*n.lineSpacing+n.spacingVariation*c)*e})}if(0==n.coordinates.length){var l=.5-Math.random(),x=.5-Math.random(),y=l>0?Math.ceil(l):Math.floor(l),p=x>0?Math.ceil(x):Math.floor(x);n.coordinates.push({x1:y*r.width/2,y1:p*r.height/3,x2:Math.random()*r.width-r.width/2,y2:Math.random()*r.height-r.height/2,x3:Math.random()*r.width-r.width/2,y3:Math.random()*r.height-r.height/2,x4:-y*r.width/2,y4:-p*r.height/3,kx1:15,ky1:15*Math.random(),kx2:15,ky2:15})}var g={addPoints:function(){var o=n.coordinates[n.coordinates.length-1],t=.7-Math.random(),e=o.x4<0?-1:1,i=o.y4<0?-1:1,a=t>0?Math.ceil(t):Math.floor(t);n.coordinates.push({x1:o.x4,y1:o.y4,x2:o.x4+(o.x4-o.x3),y2:o.y4+(o.y4-o.y3),x3:Math.random()*r.width-r.width/2,y3:Math.random()*r.height-r.height/2,x4:-e*(r.width/4+Math.round(Math.random()-.2)*r.height/4),y4:-i*a*(r.height/4+Math.round(Math.random()-.2)*r.height/4),kx1:o.kx2,ky1:o.ky2,kx2:15-30*Math.random(),ky2:15-30*Math.random()})},segmentPoints:function(o,t,e,i,a,n,r,s,d,h,c,m){return{x1:o*o*o*a+(e*o*o+o*e*o+o*o*e)*r+(e*e*o+o*e*e+e*o*e)*d+e*e*e*c,x2:o*o*t*a+(e*o*t+o*e*t+o*o*i)*r+(e*e*t+o*e*i+e*o*i)*d+e*e*i*c,x3:o*t*t*a+(e*t*t+o*i*t+o*t*i)*r+(e*i*t+o*i*i+e*t*i)*d+e*i*i*c,x4:t*t*t*a+(i*t*t+t*i*t+t*t*i)*r+(i*i*t+t*i*i+i*t*i)*d+i*i*i*c,y1:o*o*o*n+(e*o*o+o*e*o+o*o*e)*s+(e*e*o+o*e*e+e*o*e)*h+e*e*e*m,y2:o*o*t*n+(e*o*t+o*e*t+o*o*i)*s+(e*e*t+o*e*i+e*o*i)*h+e*e*i*m,y3:o*t*t*n+(e*t*t+o*i*t+o*t*i)*s+(e*i*t+o*i*i+e*t*i)*h+e*i*i*m,y4:t*t*t*n+(i*t*t+t*i*t+t*t*i)*s+(i*i*t+t*i*i+i*t*i)*h+i*i*i*m}}},w=(new Date).getTime();return function o(){window.requestAnimationFrame(o,this);var t=(new Date).getTime(),e=t-(w||t);s.clearRect(-r.width/2-n.moveCenterX,-r.height/2-n.moveCenterY,r.width,r.height);for(var d=0;d<a.length;d++){s.beginPath(),s.lineWidth=a[d].line,s.strokeStyle="rgba("+a[d].cR+","+a[d].cG+","+a[d].cB+", "+n.globalAlpha+")";for(var h=0;h<i[d].length;h++){var c=i[d][h],m=e/10/n.globalSpeed-i[d][h].speed-1,l=e/10/n.globalSpeed-i[d][h].speed,x=Math.floor(Math.max(m,0));if(n.loop)var y=x%(n.coordinates.length-1);else y=x;n.coordinates.length<=x&&!n.loop&&g.addPoints();var p=m-x,M=l-x,u=1-Math.min(p,1),v=1-Math.min(M,1);if(void 0===n.coordinates[y])break;if("multiply"==n.spacingMode)var k=g.segmentPoints(u,v,Math.min(p,1),Math.min(M,1),n.coordinates[y].x1*c.pos,n.coordinates[y].y1*c.pos,n.coordinates[y].x2*c.pos,n.coordinates[y].y2*c.pos,n.coordinates[y].x3*c.pos,n.coordinates[y].y3*c.pos,n.coordinates[y].x4*c.pos,n.coordinates[y].y4*c.pos);else k=g.segmentPoints(u,v,Math.min(p,1),Math.min(M,1),n.coordinates[y].x1+c.pos*n.coordinates[y].kx1,n.coordinates[y].y1+c.pos*n.coordinates[y].ky1,n.coordinates[y].x2+c.pos*n.coordinates[y].kx1,n.coordinates[y].y2+c.pos*n.coordinates[y].ky1,n.coordinates[y].x3+c.pos*n.coordinates[y].kx2,n.coordinates[y].y3+c.pos*n.coordinates[y].ky2,n.coordinates[y].x4+c.pos*n.coordinates[y].kx2,n.coordinates[y].y4+c.pos*n.coordinates[y].ky2);if(s.moveTo(k.x1,k.y1),s.bezierCurveTo(k.x2,k.y2,k.x3,k.y3,k.x4,k.y4),l-x>=1){x+=1,y=n.loop?x%(n.coordinates.length-1):x,n.coordinates.length<=x&&!n.loop&&g.addPoints();var f=Math.max(m-x,0),b=Math.max(l-x,0),C=1-Math.min(f,1),P=1-Math.min(b,1);if("multiply"==n.spacingMode)var A=g.segmentPoints(C,P,Math.min(f,1),Math.min(b,1),n.coordinates[y].x1*c.pos,n.coordinates[y].y1*c.pos,n.coordinates[y].x2*c.pos,n.coordinates[y].y2*c.pos,n.coordinates[y].x3*c.pos,n.coordinates[y].y3*c.pos,n.coordinates[y].x4*c.pos,n.coordinates[y].y4*c.pos);else A=g.segmentPoints(C,P,Math.min(f,1),Math.min(b,1),n.coordinates[y].x1+c.pos*n.coordinates[y].kx1,n.coordinates[y].y1+c.pos*n.coordinates[y].ky1,n.coordinates[y].x2+c.pos*n.coordinates[y].kx1,n.coordinates[y].y2+c.pos*n.coordinates[y].ky1,n.coordinates[y].x3+c.pos*n.coordinates[y].kx2,n.coordinates[y].y3+c.pos*n.coordinates[y].ky2,n.coordinates[y].x4+c.pos*n.coordinates[y].kx2,n.coordinates[y].y4+c.pos*n.coordinates[y].ky2);s.moveTo(A.x1,A.y1),s.bezierCurveTo(A.x2,A.y2,A.x3,A.y3,A.x4,A.y4)}}s.stroke()}}(),this}}(jQuery),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(o,t){window.setTimeout(o,1e3/60)}); \n    if (isFunction($("#bg-canvas").bezierCanvas)) {\n\t \t$("#bg-canvas").bezierCanvas({\n\t \t\tmaxStyles: 25,\n\t \t\tmaxLines: 500,\n\t \t\tlineSpacing: 0.5,\n\t \t\tcolorBase: {r: 238,g: 130,b: 238},\n\t \t\tcolorVariation: {r: 250, g: 100, b: 110},\n\t \t\tdelayVariation: 0.5,\n\t \t\tglobalAlpha: 0.5,\n\t \t\tglobalSpeed: 500,\n     });\n    }\n    });\n  }\n  setTimeout(renderGph, 1000);\n')),o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{id:"bg-canvas"}),o.a.createElement("div",{className:"splash"},o.a.createElement("div",{className:"centered-unit"},o.a.createElement("h1",null,"SPREAD")))),o.a.createElement("div",null))},c=n("EVdn"),l=n.n(c),m=n("FBng"),d="undefined"!=typeof window&&window;try{d&&(window.$=window.jQuery=l.a)}catch(h){console.log(h)}t.default=function(){return o.a.createElement(s,null,o.a.createElement("section",{id:"site-main"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h2",{className:"fadeInLeft animate"},"Quickly find qualified freelancers for your"),o.a.createElement("h4",{className:"fadeInLeft animate"},"Supercharge your business and convert more ",o.a.createElement("br",null),"visitors with unique and exciting illustratons."),o.a.createElement("div",{className:"early-access-container"},o.a.createElement("a",{className:"btn btn-api fadeInUp animate",onClick:function(){return document.getElementById("cases").scrollIntoView()}},"Get updatess"))),o.a.createElement("div",{className:"spread-images"},o.a.createElement("img",{src:"/images/main.svg",className:"spread-main",alt:"Quickly find qualified freelancers for your project"}))))),o.a.createElement("section",{className:"section-features"},o.a.createElement("div",{className:"info-element"},o.a.createElement("div",{className:"info-element-text"},o.a.createElement("h4",null,"Features")),o.a.createElement("div",{className:"info-element-picture"},o.a.createElement("img",{src:"/promo/features.svg",className:"spread-main spread-main-promo-img2",alt:"Features"})))),o.a.createElement("section",{className:"section-info"},o.a.createElement("div",{className:"info-element"},o.a.createElement("div",{className:"info-element-picture"},o.a.createElement("img",{src:"/promo/easily-describe.svg",className:"spread-main spread-main-promo-img2",alt:"Easily describe any tasks and set requirement"})),o.a.createElement("div",{className:"info-element-text"},o.a.createElement("h4",null,"Easily describe any tasks and set requirement"),o.a.createElement("p",null,"picture of a thing that complicated enough to making itself simple"))),o.a.createElement("div",{className:"info-element info-element-reversed info-element-var-background-b"},o.a.createElement("div",{className:"info-element-picture"},o.a.createElement("img",{src:"/promo/select-right.svg",className:"spread-main spread-main-promo-img2",alt:"Select the right person with help of analytics and artificial intellegence"})),o.a.createElement("div",{className:"info-element-text"},o.a.createElement("h4",null,"Select the right person with help of analytics and artificial intellegence"),o.a.createElement("p",null,"picture of variety: traits, skills, proofs, perks, roles, location, live meet picture of variety Pt. 2"))),o.a.createElement("div",{className:"info-element info-element-reversed info-element-var-background-a"},o.a.createElement("div",{className:"info-element-picture"},o.a.createElement("img",{src:"/promo/keep-trustful.svg",className:"spread-main spread-main-promo-img2",alt:"Keep a trustful relationship, be open to many more"})),o.a.createElement("div",{className:"info-element-text"},o.a.createElement("h4",null,"Keep a trustful relationship, be open to many more"),o.a.createElement("p",null,"vote 4 skills of workers (if we don't have any of those right now) / vote for clear description in tasks Picture of longevity, a transparent process, some sort of animation??? Inter-role section"))),o.a.createElement("div",{className:"info-element info-element-blue"},o.a.createElement("div",{className:"info-element-picture"},o.a.createElement("img",{src:"/promo/hiring-api.svg",className:"spread-main spread-main-promo-img2",alt:"Keep a trustful relationship, be open to many more"})),o.a.createElement("div",{className:"info-element-text"},o.a.createElement("h4",null,"Hiring API for hire programmatically"),o.a.createElement("p",null,"The whole point of this is to show people how you can integrate the hiring process in worker")))),o.a.createElement(m.default,{role:"customer"}))}},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-a117899cff7d6274d7bf.js.map