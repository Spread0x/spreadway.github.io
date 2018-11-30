import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import jquery from 'jquery';

const windowGlobal = typeof window !== 'undefined' && window

try {
  if (windowGlobal) {
    window.$ = window.jQuery=jquery;
  }
} catch (e) {
  console.log(e)
}


const IndexPage = () => (
  <Layout>
   <div>
      <section id="site-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fadeInLeft animate">
                Find faster and qualified freelancers for your task<br />
              </h2>
              <h4 className="fadeInLeft animate">
                (job, startup, project)
{/*                Spread is a platform which provides fast, reliable<br />
                and unified data APIs to cryptocurrency markets.
*/}                
              </h4>
              <a className="btn btn-api fadeInUp animate" href="/?">Get early access</a>
{/*
              <a className="btn btn-human fadeInUp animate" data-toggle="modal" data-target="#enterpriseModal" href="/enterpriseContact">Contact sales</a>
*/}
            </div>
            <div className="col-md-6 spread-images">
              <img src="/images/main.svg" className="spread-main" alt="exchanges" />
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
          <div className="row case-hide">
            <div className="content-box">
              <h3 className="section-heading">How to use</h3>
            </div>
            <div className="col-md-12">
              <div className="cases-box fadeInLeft animate">
                <img className="space-bottom-3x" src="/images/x2/systematic-trading.png" alt="systematic trading" />
                <h6>systematic trading</h6>
                <h6 className="cases-text2">Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management.</h6>
              </div>
              <div className="cases-box fadeInLeft animate">
                <img src="/images/x2/portfolio.png" alt="portfolio valuation" />
                <h6>portfolio valuation</h6>
                <h6 className="cases-text2">Get a precise valuation of portfolios containing multiple cryptocurrency assets, using a single API call.</h6>
              </div>
            </div>
            <div className="col-md-12">
              <div className="cases-box fadeInDown animate">
                <img className="space-bottom-3x" src="/images/x2/third-party.png" alt="third party integrations" />
                <h6>third party integrations</h6>
                <h6 className="cases-text2">Integrate our data into your application with simple-to-use SDK, available in most popular programming languages.</h6>
              </div>
              <div className="cases-box fadeInUp animate">
                <img className="space-bottom-3x" src="/images/x2/big-data.png" alt="big data science" />
                <h6>big data science</h6>
                <h6 className="cases-text2">Our terabytes of raw and preprocessed market data are available for research and analysis from environments like Python, R or Matlab. We can deliver data to you on demand, whenever you need it, with an easy-to-use API.</h6>
              </div>
            </div>
            <div className="col-md-12">
              <div className="cases-box fadeInRight animate">
                <img className="space-bottom-3x" src="/images/x2/exchange-rates.png" alt="exchange rates" />
                <h6>exchange rates</h6>
                <h6 className="cases-text2">Get the most accurate exchange rates, calculated by averaging the volume weighted price traded over multiple markets, by incorporating both active and passive market data, and by using the foreign exchange reference rates of various central banks.</h6>
              </div>
              <div className="cases-box fadeInRight animate">
                <img className="space-bottom-3x" src="/images/x2/marekt-making.png" alt="market making" />
                <h6>market making</h6>
                <h6 className="cases-text2">A complete real-time knowledge of the status of all markets makes it easier to run market-making strategies.</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content-box wanna-try">
              <h3 className="section-heading fadeInDown animate">Wanna try?</h3>             
              <p>
                This is perhaps the perfect moment to stop reading<br />
                and do some clicking instead.
              </p>
              <p className="hidden-success">Thanks!</p>
              <form action="https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form" className="pageclip-form" 
                    method="post">
                {/* Replace these inputs with your own. Make sure they have a "name" attribute! */}
                <div className="form-fields">
                  <input type="text" className="form-control" name="name" placeholder="Jonhn Doe" />
                  <input type="email" className="form-control" name="email" placeholder="john@acme.com" />
                </div>
                {/* This button will have a loading spinner. Keep the inner span for best results. */}
                <button type="submit" className="btn btn-api fadeInUp animate">Get early access</button>
              </form>               
          </div></div>
        </div>
      </section>   
    </div>
  </Layout>
)

export default IndexPage
