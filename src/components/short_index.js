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
        <script>{` 
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }
 
   var renderGph = () => { 
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
  }
`}</script>
        <script
          type="text/javascript"
          src="http://www.reaktive.io/js/jquery.js"
        />
        <script
          type="text/javascript"
          src="http://www.reaktive.io/js/bezierCanvas.js"
        />
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
