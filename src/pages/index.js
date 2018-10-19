import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>

   <div>
        
        {/* Use the title from a page's frontmatter if it has one */}
        <title>Spread</title>
        <link href="/stylesheets/site.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/fonts.css" />
        <h1 className="lonelyTitle">
          Spread
        </h1>
        <div className="social-icons">
          <div className="social-icon">
            <a href="https://medium.com/spread-dao" className="medium-social-icon">Blog</a>  
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
