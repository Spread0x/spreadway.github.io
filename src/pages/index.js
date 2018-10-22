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

      <form action="https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form" className="pageclip-form" method="post">
        {/* Replace these inputs with your own. Make sure they have a "name" attribute! */}
        <input type="text" name="name" placeholder="Jonhn Doe" />
        <input type="email" name="email" placeholder="john@acme.com" />
        {/* This button will have a loading spinner. Keep the inner span for best results. */}
        <button type="submit" className="pageclip-form__submit">
          <span>Send</span>
        </button>
      </form>

        <div className="social-icons">
          <div className="social-icon">
            <a href="https://medium.com/spread-dao" className="medium-social-icon">Blog</a>  
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
