import React from 'react'
const CTA = () => (

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
        <button type="submit" className="btn btn-api fadeInUp animate">
          Get updates
        </button>
      </form>
    </div>
  </div>
</div>
</section>)

export default CTA;