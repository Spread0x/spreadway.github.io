import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ footerClassName }) => (

      <footer className={"footer "+footerClassName}>
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <h6 className="footer-title space-bottom-2x hidden-xs">Product</h6>
                <h6 className="footer-title visible-xs collapsed" data-toggle="collapse" data-target="#product" aria-expanded="false">Product</h6>
                <ul className="list-group collapse" id="product" aria-expanded="false">
                  {/*<li className="list-group-item"><a href="/#data">Features</a></li>
                  <li className="list-group-item"><a href="/#cases">Use cases</a></li>*/}
                  <li className="list-group-item"><a href="/#pricing">Pricing</a></li>
                  <li className="list-group-item"><a href="https://medium.com/spread-dao">Blog</a></li>
                  {/*<li className="list-group-item"><a href="https://www.cryptotick.com/" target="_blank">Flat files</a></li>*/}
                </ul>
              </div>
              {/*<div className="col-sm-2">
                <h6 className="footer-title space-bottom-2x hidden-xs">Help</h6>
                <h6 className="footer-title visible-xs collapsed" data-toggle="collapse" data-target="#help" aria-expanded="false">Help</h6>
                <ul className="list-group collapse" id="help" aria-expanded="false">
                  <li className="list-group-item"><a target="_blank" href="/faq">FAQ</a></li>
                  <li className="list-group-item"><a target="_blank" href="/support">Support center</a></li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h6 className="footer-title space-bottom-2x hidden-xs">Developers</h6>
                <h6 className="footer-title visible-xs collapsed" data-toggle="collapse" data-target="#developers" aria-expanded="false">Developers</h6>
                <ul className="list-group collapse" id="developers" aria-expanded="false">
                  <li className="list-group-item"><a href="https://github.com/coinapi/coinapi-sdk" target="_blank">Helper Libaries</a></li>
                  <li className="list-group-item"><a href="https://docs.spread0x.com/" target="_blank">API Documentation</a></li>
                  <li className="list-group-item"><a href="http://status.spread0x.com/" target="_blank">Status Page</a></li>
                </ul>
              </div>
              <div className="col-sm-2 border-none">
                <h6 className="footer-title space-bottom-2x hidden-xs">Legal</h6>
                <h6 className="footer-title visible-xs collapsed" data-toggle="collapse" data-target="#legal" aria-expanded="false">Legal</h6>
                <ul className="list-group collapse" id="legal" aria-expanded="false">
                  <li className="list-group-item"><a href="/#terms">Terms of service</a></li>
                  <li className="list-group-item"><a href="/#policy">Privacy Policy</a></li>
                </ul>
              </div>*/}
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p className="separator-top-1x">
                  <span className="text-left">Copyright 2018-2020 Empire InCloud LTD. All rights reserved.</span>
                </p></div>
            </div>
          </div>
        </div>
      </footer>   
)

export default Footer
