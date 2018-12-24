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
  <Layout headerClassName="blue">
   <div>
      <section id="site-main" className="site-main-blue">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fadeInLeft animate">
                Match your experience with projects you can join right now<br />
              </h2>
              {/*<h4 className="fadeInLeft animate">
                Spread is a platform which provides fast, reliable<br />
                and unified access to projects.
              </h4>*/}
              <a className="btn btn-api fadeInUp animate" onClick={ () => document.getElementById("cases").scrollIntoView() }>Get updates</a>
{/*
              <a className="btn btn-human fadeInUp animate" data-toggle="modal" data-target="#enterpriseModal" href="/enterpriseContact">Contact sales</a>
*/}
            </div>
            <div className="col-md-6 spread-images">
              <img src="/images/main2.svg" className="spread-main spread-main-promo-img2" alt="exchanges" />
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
                <h4>exchanges integrate4</h6>
              </div>
              <div className="statistics-box fadeInUp animate">
                <h1 className="txt-light-blue counter-value" id="assets_total" data-count={3541}>3541</h1>
                <h4>assets supporte4</h6>
              </div>
            </div>
            <div className="col-sm-3 order-3">
              <div className="statistics-box fadeInDown animate">
                <h1 className="txt-green counter-value" id="mps_total" data-count={3469}>3469</h1>
                <h4>market dat4 updates /sec</h6>
              </div>
              <div className="statistics-box fadeInUp animate">
                <h1 className="txt-purple counter-value" id="history_size_tb" data-count={42}>42</h1>
                <span className="txt-purple">TB</span>
                <h4>of histor4 market data</h6>
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
              <h3 className="section-heading">How to use</h3>
            </div>
            <div className="col-mdd-12">
               <div className="cases-box fadeInLeft animate">
                <img src="/images/step1freelancer.svg" className="spread-main" alt="exchanges" />            
                <div className="case-desc">
                  <h4>Register your github profile</h4>
                  <h6 className="cases-text2">Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management.</h6>
                </div>
              </div>
             <div className="cases-box fadeInLeft animate">
              <img src="/images/step2freelancer.svg" className="spread-main" alt="exchanges" />            
              <div className="case-desc">
                <h4>We evaluate your commits and validate your level of experience</h4>
                <h6 className="cases-text2">Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management.</h6>
              </div>
            </div>
             <div className="cases-box fadeInLeft animate">
              <img src="/images/step3freelancer.svg" className="spread-main" alt="exchanges" />            
              <div className="case-desc">
                <h4>Wait for our system to match you with relevant projects</h4>
                <h6 className="cases-text2">Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management.</h6>
              </div>
            </div>
             <div className="cases-box fadeInLeft animate">
              <img src="/images/step4freelancer.svg" className="spread-main" alt="exchanges" />            
              <div className="case-desc">
                <h4>Begin work — begin being awesome 🔥 </h4>
                <h6 className="cases-text2">Use our history intraday market data for backtesting your models, and our real-time market data stream for live trading and proactive portfolio risk management.</h6>
              </div>
            </div>
            </div>
          </div>
</div></section>


      <section id="benefits">
        <div className="container">

          <div className="row benifit">
            <div className="content-box">
              <h3 className="section-heading">Benefits</h3>
            </div>


<div className="col-mdd-12 animate">
              <div className="benefits-box fadeInLeft">
                <img src="/images/ben1.svg" className="spread-main" alt="exchanges" />            
                <div className="benifit-desc">
                  <h4>Efficient use of client time</h4>
                  <h6 className="benefits-text2">Clients receive up to 10 best matching freelancers for the tasks you have supplied based on the task description, price, and other settings.</h6>
                </div>
              </div>

              <div className="benefits-box fadeInLeft">
                <div className="benifit-desc">
                  <h4>Streamlined matching for freelancers</h4>
                  <h6 className="benefits-text2">We believe freelancers loose too much time hunting for work. We want to reduce wasted time via automated skill evaluation and matching with our Neural Network.</h6>
                </div>
                <img src="/images/ben2.svg" alt="portfolio valuation" />
              </div>
              <div className="benefits-box benefits-box-right fadeInLeft">
                <div className="benifit-desc">
                  <h4>Amazing pricing</h4>
                  <h6 className="benefits-text2">We charge a flat 9% fee (payment processors may charge extra when paying through their service). No hidden extra fees. Our services are affordable so you can get on with the job and also come out on top.</h6>
                </div>
                <img src="/images/ben3.svg" alt="portfolio valuation" />                
              </div>
            </div>

          </div>
</div></section>

      <section id="cases2">
        <div className="container">
          <div className="row">
            <div className="content-box wanna-try">
              <h3 className="section-heading fadeInDown animate">Wanna try?</h3>             
              <p>
                Leave your name and email to get updates<br />
                on the development.
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
                <button type="submit" className="btn btn-api fadeInUp animate">Get updates</button>
              </form>               
          </div></div>
        </div>
      </section>   
    </div>
  </Layout>
)

export default IndexPage
