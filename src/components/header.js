import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, headerClassName }) => (
      <nav className={["navbar navbar-default navbar-fixed-top affix-top"].concat([headerClassName]).join(' ')}  data-spy="affix" data-offset-top={800} role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">Spread</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse" aria-expanded="false">
            <form className="navbar-form navbar-right subscribe-form hidden-sm">
              {/*<a href="/pricing?apikey" className="btn btn-subscribe">Get a free API key</a>*/}
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="/">Product</a></li>
              <li><a href="#pricing" id="pricing-hide">Pricing</a></li>
              {/*<li><a href="https://docs.spread0x.com/" target="_blank">Docs</a></li>
                <li><a target="_blank" href="/faq">FAQ</a></li>
                <li><a target="_blank" href="/support">Support</a></li>
              */}
              
            </ul>
          </div>
        </div>
      </nav>
)

export default Header
