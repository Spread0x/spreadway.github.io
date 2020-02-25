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
            Work on cool tasks remotely. With confidence (protection) for solid price
              <br />
            </h2>
            <br />
            <h4 className="fadeInLeft animate">Avoid scum by our verifications of companies simply (with no cv)</h4>
            <a
              className="btn btn-api fadeInUp animate"
              onClick={() => document.getElementById('cases').scrollIntoView()}
            >
              Get updates
            </a>
            {/*<a className="btn btn-human fadeInUp animate" data-toggle="modal" data-target="#enterpriseModal" href="/enterpriseContact">Contact sales</a>*/}
          </div>
        </div>
      </div>
    </section>


    <section className="section-features loyal-orange">
      <div className="info-element">
        <div className="info-element-picture">
          <img src="/images/main2.svg" className="spread-main spread-main-promo-img2" alt="exchanges" />
        </div>
        <div className="info-element-text">
          <h4>Features</h4>
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

      <div className="info-element info-element-cross">
        <div className="container">

        <div className="row">
        <div className="info-element-up col">
          <div className="info-element-picture"></div>
          <div className="info-element-text">
            <h4>AI will analyze your skills, no CV required</h4>
            <p>
              picture through social media, will give you badges badge representation
            </p>
          </div>
        </div>

        <div className="info-element-left col">
          <div className="info-element-picture"></div>
          <div className="info-element-text">
            <h4>IMG</h4>
          </div>
        </div>
        
        <div className="info-element-left col">
          <div className="info-element-picture"></div>
          <div className="info-element-text">
            <h4>Present yourself to demand of customers</h4>
            <p>Choose tech stack what you like with highest profit</p>
          </div>
        </div>
        </div>
        
        <div className="row">
        <div className="info-element-right col">
          <div className="info-element-picture"></div>
          <div className="info-element-text">
            <h4>Broadcast your availability. Wrote down your activities</h4>
            <p>
            By using the journal, you will be covered by disputes protection, as well as imrpove your proffesional score in our system. 
            You can adjust availability through lots of simple ways.
            </p>
          </div>
        </div>
        </div>
        </div>
      </div>


      <div className="info-element info-element-reversed">
        <div className="info-element-picture"></div>
        <div className="info-element-text">
          <h4> Build passive income streams </h4>
          <p>
            picture of variety: traits, skills, proofs, perks, roles, location,
            live meet picture of variety Pt. 2
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
          <h4>Flexebility of schedule, location, lifestyle, risks</h4>
          <p>
          free schedule (no 9/5) by agreement // change location/change work/
          improve yourself
          feel freedom without 90% of risks / local rate price (1/4 of original native rate in market) (by residence)
          NO MORE 9/5 I WANT (4/4 OR 9/9 :] )
          </p>
        </div>
      </div>
    </section>
    <CTA role={'employee'} />
  </Layout>
)

export default IndexPage
