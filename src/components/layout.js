import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import Header from './header'
import Footer from './footer'
import classNames from 'classnames'
import './layout.css'
//import Typed from 'typed.js';



const Layout = ({ children, headerClassName }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'freelance platform' },
          { name: 'keywords', content: 'freelance, platform' },
        ]}
      >
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta property="og:image" content="/images/apple-touch-icon.png" />
      <link rel="image_src" href="/images/apple-touch-icon.png" />
      <meta name="description" content="Spread provides fast, reliable, unified access to best freelancers." />
      <meta name="keywords" content="spread, freelance, upwork, market data" />
      <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/x-icon" />
      <link rel="icon" href="/images/favicon-32x32.png" type="image/x-icon" />
      <title>Spread - AI-powered freelance platform</title>
      <link rel="stylesheet" href="/stylesheets/boostrap.css" />
      <link href="/stylesheets/styles.css" rel="stylesheet" media="screen" />
      <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen" />
      <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />
      <script src="/javascripts/lib/jquery/jquery.js" type="text/javascript"></script>
      <script src="/javascripts/js/site.js" type="text/javascript"></script>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
      <script src="https://cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js"></script>
      <script>
      {`
        $( document ).ready(function() {
                  var typed = new Typed("#indexheadertypings", {
                  strings: ['job', 'task', 'startup', 'project'],
                  typeSpeed: 100,
                  backSpeed: 50,
                  backDelay: 2000,
                  startDelay: 2000,
                  loop: true,
                  onComplete: function(self) { console.log('onCmplete ' + self) },
                  preStringTyped: function(pos, self) { console.log('preStringTyped ' + pos + ' ' + self); },
                  onStringTyped: function(pos, self) { console.log('onStringTyped ' + pos + ' ' + self) },
                  onLastStringBackspaced: function(self) { console.log('onLastStringBackspaced ' + self) },
                  onTypingPaused: function(pos, self) { console.log('onTypingPaused ' + pos + ' ' + self) },
                  onTypingResumed: function(pos, self) { console.log('onTypingResumed ' + pos + ' ' + self) },
                  onReset: function(self) { console.log('onReset ' + self) },
                  onStop: function(pos, self) { console.log('onStop ' + pos + ' ' + self) },
                  onStart: function(pos, self) { console.log('onStart ' + pos + ' ' + self) },
                  onDestroy: function(self) { console.log('onDestroy ' + self) }
                });
        });
      `}    
      </script>  
      </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} headerClassName={headerClassName} />
        <div className="page-wrapper">
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
