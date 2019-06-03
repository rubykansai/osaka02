import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/rubykansai"
            className="icon alt fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/RubyKansai/"
            className="icon alt fa-facebook"
            target="_blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rubykansai"
            className="icon alt fa-github"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://rubykansai.doorkeeper.jp/contact/new"
            className="icon alt fa-envelope"
            target="_blank"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Osaka RubyKaigi 02 &copy; 2019</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </section>
  )
}

export default Footer
