import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import jquery from 'jquery'

const windowGlobal = typeof window !== 'undefined' && window

try {
  if (windowGlobal) {
    window.$ = window.jQuery = jquery
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
                <span>Quickly find qualified freelancers for your</span>{' '}
                <span id="indexheadertypings"></span>
              </h2>
              <br />
              {/*
              <h4 className="fadeInLeft animate"></h4>           
                Spread is a platform which provides fast, reliable<br />
                and unified data APIs to cryptocurrency markets.
*/}

              <div className="early-access-container">
                <a
                  className="btn btn-api fadeInUp animate"
                  onClick={() =>
                    document.getElementById('cases').scrollIntoView()
                  }
                >
                  Get updates
                </a>
              </div>
{/*
              <a className="btn btn-human fadeInUp animate" data-toggle="modal" data-target="#enterpriseModal" href="/enterpriseContact">Contact sales</a>
*/}
            </div>
            <div className="col-md-6 spread-images">
              <img
                src="/images/main.svg"
                className="spread-main"
                alt="exchanges"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="second">
        <div className="container">
          <div className="row case-hide">
            <div className="content-box">
              <h3 className="section-heading">How to use</h3>
            </div>
            <div className="col-mdd-12 fadeInLeft animate">
              <div className="second-box">
                <img
                  src="/images/step1customer.svg"
                  className="spread-main"
                  alt="exchanges"
                />
                <div className="case-desc">
                  <h4>Post your job offer</h4>
                  <h6 className="second-text2">
                    Use our history intraday market data for backtesting your
                    models, and our real-time market data stream for live
                    trading and proactive portfolio risk management.
                  </h6>
                </div>
              </div>
              <div className="second-box">
                <img
                  src="/images/step2customer.svg"
                  alt="portfolio valuation"
                />
                <div className="case-desc">
                  <h4>Let us match the task with freelancers</h4>
                  <h6 className="second-text2">
                    Get a precise valuation of portfolios containing multiple
                    cryptocurrency assets, using a single API call.
                  </h6>
                </div>
              </div>
              <div className="second-box">
                <img
                  src="/images/step3customer.svg"
                  alt="portfolio valuation"
                />
                <div className="case-desc">
                  <h4>Choose one among the fittest</h4>
                  <h6 className="second-text2">
                    Get a precise valuation of portfolios containing multiple
                    cryptocurrency assets, using a single API call.
                  </h6>
                </div>
              </div>
              <div className="second-box">
                <img
                  src="/images/step4customer.svg"
                  alt="portfolio valuation"
                />
                <div className="case-desc">
                  <h4>Get the work done</h4>
                  <h6 className="second-text2">
                    Get a precise valuation of portfolios containing multiple
                    cryptocurrency assets, using a single API call.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="container">
          <div className="row benifit-hide">
            <div className="content-box">
              <h3 className="section-heading">Benefits</h3>
            </div>
            <div className="col-mdd-12">
              <div className="benefits-box fadeInLeft animate">
                <img
                  src="/images/ben1.svg"
                  className="spread-main"
                  alt="exchanges"
                />
                <div className="benifit-desc">
                  <h4>Efficient use of client time</h4>
                  <h6 className="benefits-text2">
                    Clients receive up to 10 best matching freelancers for the
                    tasks you have supplied based on the task description,
                    price, and other settings.
                  </h6>
                </div>
              </div>

              <div className="benefits-box fadeInLeft animate">
                <div className="benifit-desc">
                  <h4>Streamlined matching for freelancers</h4>
                  <h6 className="benefits-text2">
                    We believe freelancers loose too much time hunting for work.
                    We want to reduce wasted time via automated skill evaluation
                    and matching with our Neural Network.
                  </h6>
                </div>
                <img src="/images/ben2.svg" alt="portfolio valuation" />
              </div>
              <div className="benefits-box benefits-box-right fadeInLeft animate">
                <div className="benifit-desc">
                  <h4>Amazing pricing</h4>
                  <h6 className="benefits-text2">
                    We charge a flat 9% fee (payment processors may charge extra
                    when paying through their service). No hidden extra fees.
                    Our services are affordable so you can get on with the job
                    and also come out on top.
                  </h6>
                </div>
                <img src="/images/ben3.svg" alt="portfolio valuation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="container">
          <div className="row">
            <div className="content-box wanna-try">
              <h3 className="section-heading fadeInDown animate">Intrested?</h3>
              <p>
                Leave your name and email to get updates
                <br />
                on the development.
              </p>
              <p className="hidden-success">Thanks!</p>
              <form
                action="https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form"
                className="pageclip-form"
                method="post"
              >
                {/* Replace these inputs with your own. Make sure they have a "name" attribute! */}
                <div className="form-fields">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Jonhn Doe"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="john@acme.com"
                  />
                </div>
                <button type="submit" className="btn btn-api fadeInUp animate">
                  Get updates
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
