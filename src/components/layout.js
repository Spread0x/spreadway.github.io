import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from './header';
import Footer from './footer';
import { getLocationClass } from '../helpers/helpers';
import './layout.css';
import './styles.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query MyQuery {
        sitePage {
          id
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          charset={"utf-8"}
          meta={[
            { name: 'description', content: 'freelance platform' },
            { name: 'keywords', content: 'freelance, platform' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
            { property: 'og:image', content: '/images/apple-touch-icon.png'},
            { name: 'description',  content: 'Spread provides fast, reliable, unified access to best freelancers.'},
            { name: 'keywords',  content: 'spread, freelance, upwork, market data'},
          ]}
        >
          <title>Spread - AI-powered freelance platform</title>
          <link rel="image_src" href="/images/apple-touch-icon.png" />
          <link
            rel="shortcut icon"
            href="/images/favicon-32x32.png"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/images/favicon-32x32.png"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href="https://s.pageclip.co/v1/pageclip.css"
            media="screen"
          />
          <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8" />
          <script src="https://cdn.jsdelivr.net/npm/jquery.scrollto@2.1.2/jquery.scrollTo.min.js"></script>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} headerClassName={getLocationClass()} />
        <div className="page-wrapper">{children}</div>
        <Footer footerClassName={getLocationClass()} />
      </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
}

export default Layout
