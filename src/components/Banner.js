import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Osaka RubyKaigi 02</h1>
      </header>
      <div className="content">
        <p>
          September 15, 2019 (Sun)
          <br />
          <a
            href="https://www.google.com/maps?ll=34.686492,135.496322&z=16&t=m&hl=ja&gl=US&mapclient=embed&cid=13605769241063525098"
            target="_blank"
          >
            Osaka Science & Technology Center
          </a>
          <br />
          8th large hall
        </p>
        <ul className="actions">
          <li>
            <a
              href="https://rubykansai.doorkeeper.jp/events/94711"
              name="Register Now"
              className="button next scrolly"
              target="_blank"
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
