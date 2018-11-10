import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
   <div>
      <nav className="navbar navbar-default navbar-fixed-top affix-top" data-spy="affix" data-offset-top={800} role="navigation">
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
              <a href="/pricing?apikey" className="btn btn-subscribe">Get a free API key</a>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="/">Product</a></li>
              <li><a href="https://docs.spread0x.com/" target="_blank">API Docs</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a target="_blank" href="/faq">FAQ</a></li>
              <li><a target="_blank" href="/support">Support</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="site-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fadeInLeft animate">
                lorem <br />
                lorem lorem<br />
                lorem a lorem lorem
              </h2>
              <h4 className="fadeInLeft animate">
                Spread is a platform which provides fast, reliable<br />
                and unified data APIs to cryptocurrency markets.
              </h4>
              <a className="btn btn-api fadeInUp animate" href="/pricing?apikey">Get early access</a>
{/*
              <a className="btn btn-human fadeInUp animate" data-toggle="modal" data-target="#enterpriseModal" href="/enterpriseContact">Contact sales</a>
*/}
            </div>
            <div className="col-md-6 spread-images">
              <img src="http://localhost:8000/images/main.svg" className="spread-main" alt="exchanges" />
            </div>
          </div>
        </div>
      </section>
{ /*
   <section id="integration">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 order-2">
              <div className="statistics-box fadeInDown animate">
                <h1 className="txt-orange counter-value" id="exchanges_total" data-count={101}>101</h1>
                <h6>exchanges integrated</h6>
              </div>
              <div className="statistics-box fadeInUp animate">
                <h1 className="txt-light-blue counter-value" id="assets_total" data-count={3541}>3541</h1>
                <h6>assets supported</h6>
              </div>
            </div>
            <div className="col-sm-3 order-3">
              <div className="statistics-box fadeInDown animate">
                <h1 className="txt-green counter-value" id="mps_total" data-count={3469}>3469</h1>
                <h6>market data updates /sec</h6>
              </div>
              <div className="statistics-box fadeInUp animate">
                <h1 className="txt-purple counter-value" id="history_size_tb" data-count={42}>42</h1>
                <span className="txt-purple">TB</span>
                <h6>of history market data</h6>
              </div>
            </div>
            <div className="col-sm-6 content-box order-1">
              <h3 className="section-heading fadeInRight animate">
                {'{'}integration<br />
                _provider{'}'}
              </h3>
              <p className="space-bottom-3x fadeInRight animate">We are a high-quality, one-stop-solution market data provider for cryptocurrency markets.</p>
              <p className="fadeInRight animate">All Spread data is standardized. Market symbol details and asset codes are double-checked by real humans to ensure <strong>maximum quality</strong>.</p>
            </div>
          </div>
        </div>
      </section>



      <section id="data">
        <div className="container">
          <div className="row">
            <div className="col-md-5 content-box">
              <h3 className="section-heading fadeInLeft animate">{'{'}data delivery{'}'}</h3>
              <p className="space-bottom-3x fadeInLeft animate">Our data is delivered to you on-demand using well-documented and simple <strong>HTTP RESTful API</strong> in <strong>JSON</strong>, <strong>XML</strong> or <strong>CSV</strong> formats.</p>
              <p className="fadeInLeft animate">For more demanding integrations requiring real-time market data streaming, we have access through <strong>WebSocket</strong> and <strong>FIX</strong> protocols.</p>
            </div>
            <div className="col-md-7 data-images">
              <img src="https://www.spread0x.com/images/data-delivery.gif" className="data-main" alt="data" />
            </div>
          </div>
        </div>
      </section>



      <section id="languages">
        <div className="container">
          <h3 className="section-heading fadeInDown animate">SDK in your &lt;language/&gt; on GitHub</h3>
          <p className="space-bottom-3x fadeInUp animate">We provide helper libraries for the most popular programming languages,<br />so you can focus on the most important aspects instead of wasting time connecting the pieces together.</p>
          <div className="logo-carousel">
            <div id="myCarousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="item active">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/python-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/python-grey.png" />
                      </div>
                      <p>python</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/r-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/r-grey.png" />
                      </div>
                      <p>r</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/matlab-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/matlab-grey.png" />
                      </div>
                      <p>matlab</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/c-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/c-grey.png" />
                      </div>
                      <p>c++</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/net-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/net-grey.png" />
                      </div>
                      <p>.net</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/java-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/java-grey.png" />
                      </div>
                      <p>java</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/js-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/js-grey.png" />
                      </div>
                      <p>javascript</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/typescript-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/typescript-grey.png" />
                      </div>
                      <p>typescript</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/node-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/node-grey.png" />
                      </div>
                      <p>node.js</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/gopher-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/gopher-grey.png" />
                      </div>
                      <p>go</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/php-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/php-grey.png" />
                      </div>
                      <p>php</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/haskell-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/haskell-grey.png" />
                      </div>
                      <p>haskell</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/tensorflow-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/tensorflow-grey.png" />
                      </div>
                      <p>tensorflow</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <div className="logo-box">
                      <div className="logo-img">
                        <img className="img-color" src="https://www.spread0x.com/images/ruby-color.png" />
                        <img className="img-grey" src="https://www.spread0x.com/images/ruby-grey.png" />
                      </div>
                      <p>ruby</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev"><img src="https://www.spread0x.com/images/arrow-left.png" /></a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next"><img src="https://www.spread0x.com/images/arrow-right.png" /></a>
            </div>
          </div>
          <div className="logo-list">
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/python-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/python-grey.png" />
                </div>
                <p>python</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/r-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/r-grey.png" />
                </div>
                <p>r</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/matlab-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/matlab-grey.png" />
                </div>
                <p>matlab</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/c-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/c-grey.png" />
                </div>
                <p>c++</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/net-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/net-grey.png" />
                </div>
                <p>.net</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/java-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/java-grey.png" />
                </div>
                <p>java</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/js-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/js-grey.png" />
                </div>
                <p>javascript</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/typescript-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/typescript-grey.png" />
                </div>
                <p>typescript</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/node-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/node-grey.png" />
                </div>
                <p>node.js</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/gopher-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/gopher-grey.png" />
                </div>
                <p>go</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/php-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/php-grey.png" />
                </div>
                <p>php</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/haskell-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/haskell-grey.png" />
                </div>
                <p>haskell</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/tensorflow-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/tensorflow-grey.png" />
                </div>
                <p>tensorflow</p>
              </div>
            </div>
            <div className="logo">
              <div className="logo-box">
                <div className="logo-img">
                  <img className="img-color" src="https://www.spread0x.com/images/ruby-color.png" />
                  <img className="img-grey" src="https://www.spread0x.com/images/ruby-grey.png" />
                </div>
                <p>ruby</p>
              </div>
            </div>
          </div>
        </div>
      </section>
*/}


      <section id="cases">
        <div className="container">
          <div className="row">
            <div className="content-box">
              <h3 className="section-heading">use &lt;cases/&gt;</h3>
            </div>
            <div className="col-md-4">
              <div className="cases-box fadeInLeft animate">
                <img className="space-bottom-3x" src="/images/x2/systematic-trading.png" alt="systematic trading" />
                <h6>systematic trading</h6>
                <h6 className="cases-text">Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management.</h6>
              </div>
              <div className="cases-box fadeInLeft animate">
                <img src="/images/x2/portfolio.png" alt="portfolio valuation" />
                <h6>portfolio valuation</h6>
                <h6 className="cases-text">Get a precise valuation of portfolios containing multiple cryptocurrency assets, using a single API call.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cases-box fadeInDown animate">
                <img className="space-bottom-3x" src="/images/x2/third-party.png" alt="third party integrations" />
                <h6>third party integrations</h6>
                <h6 className="cases-text">Integrate our data into your application with simple-to-use SDK, available in most popular programming languages.</h6>
              </div>
              <div className="cases-box fadeInUp animate">
                <img className="space-bottom-3x" src="/images/x2/big-data.png" alt="big data science" />
                <h6>big data science</h6>
                <h6 className="cases-text">Our terabytes of raw and preprocessed market data are available for research and analysis from environments like Python, R or Matlab. We can deliver data to you on demand, whenever you need it, with an easy-to-use API.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cases-box fadeInRight animate">
                <img className="space-bottom-3x" src="/images/x2/exchange-rates.png" alt="exchange rates" />
                <h6>exchange rates</h6>
                <h6 className="cases-text">Get the most accurate exchange rates, calculated by averaging the volume weighted price traded over multiple markets, by incorporating both active and passive market data, and by using the foreign exchange reference rates of various central banks.</h6>
              </div>
              <div className="cases-box fadeInRight animate">
                <img className="space-bottom-3x" src="/images/x2/marekt-making.png" alt="market making" />
                <h6>market making</h6>
                <h6 className="cases-text">A complete real-time knowledge of the status of all markets makes it easier to run market-making strategies.</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content-box wanna-try">
              <h3 className="section-heading fadeInDown animate">{'{'}wanna try?{'}'}</h3>
              <form action="https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form" className="pageclip-form" method="post">
                {/* Replace these inputs with your own. Make sure they have a "name" attribute! */}
                <input type="text" name="name" placeholder="Jonhn Doe" />
                <input type="email" name="email" placeholder="john@acme.com" />
                {/* This button will have a loading spinner. Keep the inner span for best results. */}
                <button type="submit" className="pageclip-form__submit">
                  <span>Send</span>
                </button>
              </form>              
              <p>
                This is perhaps the perfect moment to stop reading<br />
                and do some clicking instead.
              </p>
              <a className="btn btn-api fadeInUp animate" href="/pricing?apikey">Get early access</a></div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <h6 className="footer-title space-bottom-2x hidden-xs">Product</h6>
                <h6 className="footer-title visible-xs collapsed" data-toggle="collapse" data-target="#product" aria-expanded="false">Product</h6>
                <ul className="list-group collapse" id="product" aria-expanded="false">
              <li className="list-group-item"><a href="/#data">Features</a></li>
                  <li className="list-group-item"><a href="/#cases">Use cases</a></li>
                  <li className="list-group-item"><a href="/#pricing">Pricing</a></li>
                  <li className="list-group-item"><a href="https://medium.com/spread-dao">Blog</a></li>
                  <li className="list-group-item"><a href="https://www.cryptotick.com/" target="_blank">Flat files</a></li>
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
                  <span className="text-left">Copyright 2018 Empire InCloud LTD. All rights reserved.</span>
                </p></div>
            </div>
          </div>
        </div>
      </footer>      
    </div>
  </Layout>
)

export default IndexPage
