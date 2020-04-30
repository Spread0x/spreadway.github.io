import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import { getLocationClass } from '../helpers/helpers'
import './short_index.css'

const ShortLayout = ({}) => {
  const handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      return scriptTags.map((scriptTag) => {
        return (scriptTag.onload = () => {
          // I don't really like referencing window.
          console.log(`myExternalLib loaded!`, scriptTags, window.myExternalLib)
          try {
            renderGph()
          } catch (e) {}
          //this.setState({
          //    myExternalLib: window.myExternalLib
          //});
        })
      })
    }
  }

  const data = useStaticQuery(graphql`
    query MyQuery2 {
      sitePage {
        id
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet
        title={'S P R E A D'}
        charset={'utf-8'}
        onChangeClientState={(newState, addedTags) =>
          handleScriptInject(addedTags)
        }
        meta={[
          { name: 'description', content: 'freelance platform' },
          { name: 'keywords', content: 'freelance, platform' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { property: 'og:image', content: '/images/apple-touch-icon.png' },
          {
            name: 'description',
            content:
              'Spread provides fast, reliable, unified access to best freelancers.',
          },
          {
            name: 'keywords',
            content: 'spread, freelance, upwork, market data',
          },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100"
          rel="stylesheet"
          type="text/css"
        />
        <script
          type="text/javascript"
          src="/js/jquery2.js"
        />        
        <script>{` 
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }
   var renderGph = () => { 
    $().ready(function(){
      !function(o){"use strict";o.fn.bezierCanvas=function(t){var e=window.devicePixelRatio>1?2:1;null==navigator.userAgent.match(/iPad/i)&&null==navigator.userAgent.match(/iPhone/i)||(e=1.5);var i=[],a=[],n=o.extend({maxStyles:10,maxLines:100,strokeWidth:.5,lineSpacing:1,spacingVariation:0,colorBase:{r:100,g:100,b:100},colorVariation:{r:100,g:100,b:100},globalSpeed:300,globalAlpha:.5,delayVariation:.3,speedLinear:!1,coordinates:[],loop:!1,moveCenterX:0,moveCenterY:0,spacingMode:"add"},t),r=this[0],s=r.getContext("2d");r.style.height=o(window).height()+"px",r.style.width=o(window).width()+"px",r.width=o(window).width()*e,r.height=o(window).height()*e,s.save(),o(window).on("resize",function(){s.restore(),r.style.height=o(window).height()+"px",r.style.width=o(window).width()+"px",r.width=o(window).width()*e,r.height=o(window).height()*e,s.translate(r.width/2+n.moveCenterX,r.height/2+n.moveCenterY)}),s.translate(r.width/2+n.moveCenterX,r.height/2+n.moveCenterY);for(var d=0;d<n.maxStyles;d++)a.push({cR:Math.round(n.colorBase.r+Math.random()*n.colorVariation.g),cG:Math.round(n.colorBase.g+Math.random()*n.colorVariation.g),cB:Math.round(n.colorBase.b+Math.random()*n.colorVariation.g),line:n.strokeWidth*e}),i[d]=[];for(var h=0;h<n.maxLines;h++){var c=Math.random(),m=Math.floor(Math.random()*n.maxStyles);i[m].push({speed:n.speedLinear?.1+h/200:n.delayVariation*c+.1,pos:(h*n.lineSpacing+n.spacingVariation*c)*e})}if(0==n.coordinates.length){var l=.5-Math.random(),x=.5-Math.random(),y=l>0?Math.ceil(l):Math.floor(l),p=x>0?Math.ceil(x):Math.floor(x);n.coordinates.push({x1:y*r.width/2,y1:p*r.height/3,x2:Math.random()*r.width-r.width/2,y2:Math.random()*r.height-r.height/2,x3:Math.random()*r.width-r.width/2,y3:Math.random()*r.height-r.height/2,x4:-y*r.width/2,y4:-p*r.height/3,kx1:15,ky1:15*Math.random(),kx2:15,ky2:15})}var g={addPoints:function(){var o=n.coordinates[n.coordinates.length-1],t=.7-Math.random(),e=o.x4<0?-1:1,i=o.y4<0?-1:1,a=t>0?Math.ceil(t):Math.floor(t);n.coordinates.push({x1:o.x4,y1:o.y4,x2:o.x4+(o.x4-o.x3),y2:o.y4+(o.y4-o.y3),x3:Math.random()*r.width-r.width/2,y3:Math.random()*r.height-r.height/2,x4:-e*(r.width/4+Math.round(Math.random()-.2)*r.height/4),y4:-i*a*(r.height/4+Math.round(Math.random()-.2)*r.height/4),kx1:o.kx2,ky1:o.ky2,kx2:15-30*Math.random(),ky2:15-30*Math.random()})},segmentPoints:function(o,t,e,i,a,n,r,s,d,h,c,m){return{x1:o*o*o*a+(e*o*o+o*e*o+o*o*e)*r+(e*e*o+o*e*e+e*o*e)*d+e*e*e*c,x2:o*o*t*a+(e*o*t+o*e*t+o*o*i)*r+(e*e*t+o*e*i+e*o*i)*d+e*e*i*c,x3:o*t*t*a+(e*t*t+o*i*t+o*t*i)*r+(e*i*t+o*i*i+e*t*i)*d+e*i*i*c,x4:t*t*t*a+(i*t*t+t*i*t+t*t*i)*r+(i*i*t+t*i*i+i*t*i)*d+i*i*i*c,y1:o*o*o*n+(e*o*o+o*e*o+o*o*e)*s+(e*e*o+o*e*e+e*o*e)*h+e*e*e*m,y2:o*o*t*n+(e*o*t+o*e*t+o*o*i)*s+(e*e*t+o*e*i+e*o*i)*h+e*e*i*m,y3:o*t*t*n+(e*t*t+o*i*t+o*t*i)*s+(e*i*t+o*i*i+e*t*i)*h+e*i*i*m,y4:t*t*t*n+(i*t*t+t*i*t+t*t*i)*s+(i*i*t+t*i*i+i*t*i)*h+i*i*i*m}}},w=(new Date).getTime();return function o(){window.requestAnimationFrame(o,this);var t=(new Date).getTime(),e=t-(w||t);s.clearRect(-r.width/2-n.moveCenterX,-r.height/2-n.moveCenterY,r.width,r.height);for(var d=0;d<a.length;d++){s.beginPath(),s.lineWidth=a[d].line,s.strokeStyle="rgba("+a[d].cR+","+a[d].cG+","+a[d].cB+", "+n.globalAlpha+")";for(var h=0;h<i[d].length;h++){var c=i[d][h],m=e/10/n.globalSpeed-i[d][h].speed-1,l=e/10/n.globalSpeed-i[d][h].speed,x=Math.floor(Math.max(m,0));if(n.loop)var y=x%(n.coordinates.length-1);else y=x;n.coordinates.length<=x&&!n.loop&&g.addPoints();var p=m-x,M=l-x,u=1-Math.min(p,1),v=1-Math.min(M,1);if(void 0===n.coordinates[y])break;if("multiply"==n.spacingMode)var k=g.segmentPoints(u,v,Math.min(p,1),Math.min(M,1),n.coordinates[y].x1*c.pos,n.coordinates[y].y1*c.pos,n.coordinates[y].x2*c.pos,n.coordinates[y].y2*c.pos,n.coordinates[y].x3*c.pos,n.coordinates[y].y3*c.pos,n.coordinates[y].x4*c.pos,n.coordinates[y].y4*c.pos);else k=g.segmentPoints(u,v,Math.min(p,1),Math.min(M,1),n.coordinates[y].x1+c.pos*n.coordinates[y].kx1,n.coordinates[y].y1+c.pos*n.coordinates[y].ky1,n.coordinates[y].x2+c.pos*n.coordinates[y].kx1,n.coordinates[y].y2+c.pos*n.coordinates[y].ky1,n.coordinates[y].x3+c.pos*n.coordinates[y].kx2,n.coordinates[y].y3+c.pos*n.coordinates[y].ky2,n.coordinates[y].x4+c.pos*n.coordinates[y].kx2,n.coordinates[y].y4+c.pos*n.coordinates[y].ky2);if(s.moveTo(k.x1,k.y1),s.bezierCurveTo(k.x2,k.y2,k.x3,k.y3,k.x4,k.y4),l-x>=1){x+=1,y=n.loop?x%(n.coordinates.length-1):x,n.coordinates.length<=x&&!n.loop&&g.addPoints();var f=Math.max(m-x,0),b=Math.max(l-x,0),C=1-Math.min(f,1),P=1-Math.min(b,1);if("multiply"==n.spacingMode)var A=g.segmentPoints(C,P,Math.min(f,1),Math.min(b,1),n.coordinates[y].x1*c.pos,n.coordinates[y].y1*c.pos,n.coordinates[y].x2*c.pos,n.coordinates[y].y2*c.pos,n.coordinates[y].x3*c.pos,n.coordinates[y].y3*c.pos,n.coordinates[y].x4*c.pos,n.coordinates[y].y4*c.pos);else A=g.segmentPoints(C,P,Math.min(f,1),Math.min(b,1),n.coordinates[y].x1+c.pos*n.coordinates[y].kx1,n.coordinates[y].y1+c.pos*n.coordinates[y].ky1,n.coordinates[y].x2+c.pos*n.coordinates[y].kx1,n.coordinates[y].y2+c.pos*n.coordinates[y].ky1,n.coordinates[y].x3+c.pos*n.coordinates[y].kx2,n.coordinates[y].y3+c.pos*n.coordinates[y].ky2,n.coordinates[y].x4+c.pos*n.coordinates[y].kx2,n.coordinates[y].y4+c.pos*n.coordinates[y].ky2);s.moveTo(A.x1,A.y1),s.bezierCurveTo(A.x2,A.y2,A.x3,A.y3,A.x4,A.y4)}}s.stroke()}}(),this}}(jQuery),window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(o,t){window.setTimeout(o,1e3/60)}); 
    if (isFunction($("#bg-canvas").bezierCanvas)) {
	 	$("#bg-canvas").bezierCanvas({
	 		maxStyles: 25,
	 		maxLines: 500,
	 		lineSpacing: 0.5,
	 		colorBase: {r: 238,g: 130,b: 238},
	 		colorVariation: {r: 250, g: 100, b: 110},
	 		delayVariation: 0.5,
	 		globalAlpha: 0.5,
	 		globalSpeed: 500,
     });
    }
    });
  }
  setTimeout(renderGph, 1000);
`}</script>
      </Helmet>
      <>
        <canvas id="bg-canvas"></canvas>
        <div className="splash">
          <div className="centered-unit">
            <h1>SPREAD</h1>
          </div>
        </div>
      </>

      <div />
    </div>
  )
}

export default ShortLayout
