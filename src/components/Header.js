import React from 'react'
import Link from 'gatsby-link'

const Header = () => {
  return (
    <section id="header">
      <div className="inner">
        <span className="icon major fa-diamond" />
        <h1>Osaka RubyKaigi 02</h1>
        <p>
          September 15, 2019 (Sun)
          <br />
          <a
            href="https://www.google.co.jp/maps/search/%E5%A4%A7%E9%98%AA%E7%A7%91%E5%AD%A6%E6%8A%80%E8%A1%93%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC/@34.6864904,135.4941356,17z/data=!3m1!4b1"
            target="_blank"
          >
            Osaka Science & Technology Center
          </a>
        </p>
        <p>8階 大ホール</p>
        <ul className="actions">
          <li>
            <a
              href="https://rubykansai.doorkeeper.jp/events/94711"
              className="button scrolly"
              target="_blank"
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header
