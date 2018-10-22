import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
<meta httpEquiv="X-UA-Compatible" />
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
        <title>Spread</title>
        <link href="/stylesheets/site.css" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" type="text/css" />
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=yes" />
        <meta name="description" content="Spread" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <link href="/stylesheets/bootstrap.css" rel="stylesheet" />
        <link href="/stylesheets/font-awesome.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/gitcoin.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/base.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/jquery-ui.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/jquery.modal.min.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/jquery.select2.min.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/animate.min.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/rain.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/buttons.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/timeline.css" />
        <link rel="stylesheet" href="https://gitcoin.co/static/v2/css/carousel.css" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/site.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=latin,cyrillic" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />

        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
