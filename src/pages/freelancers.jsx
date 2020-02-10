import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import jquery from 'jquery'
import CTA from './cta';
const windowGlobal = typeof window !== 'undefined' && window

try {
  if (windowGlobal) {
    window.$ = window.jQuery = jquery
  }
} catch (e) {
  console.log(e)
}

const IndexPage = () => (
  <Layout headerClassName="blue">
      <section id="site-main" class="loyal-orange">
        <div className="container">
          <div className="row">
          <div className="col-md-6 spread-images">
              <img
                src="/images/main2.svg"
                className="spread-main spread-main-promo-img2"
                alt="exchanges"
              />
            </div>            
            <div className="col-md-6">
              <h2 className="fadeInLeft animate">
                Match your experience with projects you can join right now
                <br />
              </h2>
              <br />
              {/*<h4 className="fadeInLeft animate">
                Spread is a platform which provides fast, reliable<br />
                and unified access to projects.
              </h4>*/}
              <a
                className="btn btn-api fadeInUp animate"
                onClick={() =>
                  document.getElementById('cases').scrollIntoView()
                }
              >
                Get updates
              </a>
              {/*<a className="btn btn-human fadeInUp animate" data-toggle="modal" data-target="#enterpriseModal" href="/enterpriseContact">Contact sales</a>*/}
            </div>
          </div>
        </div>
      </section>



      <section className="section-info loyal-orange">
      <div className="info-element">
        <div className="info-element-picture"></div>
        <div className="info-element-text">
          <h4>Easily describe any tasks and set requirement</h4>
          <p>
            picture of a thing that complicated enough to making itself simple
          </p>
        </div>
      </div>

      <div className="info-element info-element-reversed">
        <div className="info-element-picture"></div>
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
        <div className="info-element-picture"></div>
        <div className="info-element-text">
          <h4>Keep a trustful relationship, be open to many more</h4>
          <p>
            vote 4 skills of workers (if we don't have any of those right now) /
            vote for clear description in tasks Picture of longevity, a
            transparent process, some sort of animation??? Inter-role section
          </p>
        </div>
      </div>

      <div className="info-element info-element-blue info-element-var-background-b">
        <div className="info-element-picture"></div>
        <div className="info-element-text">
          <h4>Hiring API for hire programmatically</h4>
          <p>
            The whole point of this is to show people how you can integrate the
            hiring process in worker
          </p>
        </div>
      </div>
    </section>
    <CTA role={'employee'} />    
  </Layout>
)

export default IndexPage
