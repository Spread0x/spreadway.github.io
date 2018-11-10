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
            { name: 'description', content: 'freelance platform' },
            { name: 'keywords', content: 'freelance, platform' },
          ]}
        >
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta property="og:image" content="/images/apple-touch-icon.png" />
      <link rel="image_src" href="/images/apple-touch-icon.png" />
      <meta name="description" content="Spread is a freelance platform which provides fast, reliable and unified access to best freelancers." />
      <meta name="keywords" content="spread, freelance, upwork, market data" />
      <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/x-icon" />
      <link rel="icon" href="/images/favicon-32x32.png" type="image/x-icon" />
      <title>Spread - Freelance platform</title>
      <link rel="stylesheet" href="/stylesheets/boostrap.css" />
      <link href="/stylesheets/styles.css" rel="stylesheet" media="screen" />
    <script src="/javascripts/lib/jquery/jquery.js?v=GcL_g4TBRVIQSi96WoMK71EGaYN9ZfsMIKm-50nlS4s" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/site.js" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/scripts.js" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/lib/bootstrap/bootstrap.js?v=1fo3W6qowq4PinpCsKshaVqewExoFmzrRBGKbSdAVEk" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/bodymovin.js?v=YKfOJofePBJ_eF9G3uK7VT83eNL6xTu1gbuG5xQ3r-g" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/scripts.js?v=1HqIAlFf71VEKnJsBhLHI4Ww5dgNgB3aKv1dp7lno3w" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/validator.js?v=Ha_2Iv_ZGrKW0YvbwXJ3Rky42i1mJvxey2sxiQt2bBY" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/animations.js?v=z_iBZE7hHb4p6P8NGYV-XriR5eDmXOFc6i1tEuuYS-0" type="01e55013c79a1988ae8a78e4-text/javascript"></script>
    <script src="/javascripts/js/counters.js?v=Ij8eYE98WmoMoFKrJ4h0FqtBENlP9pYeYJf9H8FxGjY" type="01e55013c79a1988ae8a78e4-text/javascript"></script>

      <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen" />
        <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />
      </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="page-wrapper">
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
