import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Direct trade tilde everyday carry, yuccie you probably haven't
              heard of them retro readymade butcher etsy asymmetrical tonx.
              Hexagon williamsburg before they sold out taxidermy viral, tote
              bag pug
            </p>
            <p>
              lumbersexual kitsch poutine. Etsy austin art party waistcoat,
              photo
            </p>
            <p>
              brooklyn typewriter raw denim chambray aesthetic tumeric air
              plant. Farm-to-table photo booth hexagon, scenester raw denim
              prism fixie single-origin coffee lo-fi pour-over echo park.
              Chartreuse disrupt
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
