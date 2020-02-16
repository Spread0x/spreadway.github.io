import React from 'react'

const CTAInfo = {
  title: 'Intrested?',
  info: 'Leave your name and email to get updates',
  info2: 'on the development.',
  subscribe: 'Subscribe'
}

const CTA = ({role}) => (

<section id="cta" className={role}>
  <div className="row">
    <div className="content-box wanna-try">
      <div class="cta-info">
        <h3 className="section-heading fadeInDown animate">{CTAInfo.title}</h3>
      <div><b><h5>IMAGE</h5></b></div>
      <p>
        {CTAInfo.info}
        <br />
        {CTAInfo.info2}
      </p>
      </div>
      <p className="hidden-success">Thanks!</p>
      <form
        action="https://send.pageclip.co/0pHRl3IHAP0G7NyWOex5HGulUEV34j1a/contact-form"
        className="pageclip-form"
        method="post"
      >
        <div className="form-fields">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="John Doe"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="john@acme.com"
          />
        </div>
        <button type="submit" className="btn btn-api fadeInUp animate">{CTAInfo.subscribe}</button>
      </form>
    </div>
  </div>
</section>)

export default CTA;