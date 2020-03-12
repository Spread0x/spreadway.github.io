import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import jquery from 'jquery'
import CTA from './cta'

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
    <section id="site-main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="fadeInLeft animate">
              Quickly find qualified freelancers for your
            </h2>
            <h4 className="fadeInLeft animate">
              Supercharge your business and convert more <br />
              visitors with unique and exciting illustratons.
            </h4>

            <div className="early-access-container">
              <a
                className="btn btn-api fadeInUp animate"
                onClick={() =>
                  document.getElementById('cases').scrollIntoView()
                }
              >
                Get updatess
              </a>
            </div>
          </div>
          <div className="spread-images">
            <img
              src="/images/main.svg"
              className="spread-main"
              alt="Quickly find qualified freelancers for your project"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section-features">
      <div className="info-element">
        <div className="info-element-picture">
          <img
            src="/promo/features.svg"
            className="spread-main spread-main-promo-img2"
            alt="Features"
          />
        </div>
        <div className="info-element-text">
          <h4>Features</h4>
        </div>
      </div>
    </section>

    <section className="section-info">
      <div className="info-element">
        <div className="info-element-picture">
          <img
              src="/promo/easily-describe.svg"
              className="spread-main spread-main-promo-img2"
              alt="Easily describe any tasks and set requirement"
            />
        </div>
        <div className="info-element-text">
          <h4>Easily describe any tasks and set requirement</h4>
          <p>
            picture of a thing that complicated enough to making itself simple
          </p>
        </div>
      </div>

      <div className="info-element info-element-reversed info-element-var-background-b">
        <div className="info-element-picture">
          <img
            src="/promo/select-right.svg"
            className="spread-main spread-main-promo-img2"
            alt="Select the right person with help of analytics and artificial
            intellegence"
          />
        </div>
        <div className="info-element-text">
          <h4>
            Select the right person with help of analytics and artificial
            intellegence
          </h4>
          <p>
            picture of variety: traits, skills, proofs, perks, roles, location,
            live meet picture of variety Pt. 2
          </p>
        </div>
      </div>

      <div className="info-element info-element-reversed info-element-var-background-a">
        <div className="info-element-picture">
          <img
              src="/promo/keep-trustful.svg"
              className="spread-main spread-main-promo-img2"
              alt="Keep a trustful relationship, be open to many more"
            />
        </div>
        <div className="info-element-text">
          <h4>Keep a trustful relationship, be open to many more</h4>
          <p>
            vote 4 skills of workers (if we don't have any of those right now) /
            vote for clear description in tasks Picture of longevity, a
            transparent process, some sort of animation??? Inter-role section
          </p>
        </div>
      </div>

      <div className="info-element info-element-blue">
        <div className="info-element-picture">
          <img
              src="/promo/hiring-api.svg"
              className="spread-main spread-main-promo-img2"
              alt="Keep a trustful relationship, be open to many more"
            />          
        </div>
        <div className="info-element-text">
          <h4>Hiring API for hire programmatically</h4>
          <p>
            The whole point of this is to show people how you can integrate the
            hiring process in worker
          </p>
        </div>
      </div>
    </section>
    <CTA role={'customer'} />
  </Layout>
)

export default IndexPage
