import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/rubykansai"
            aria-label="Twitter"
            className="icon alt fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/RubyKansai/"
            aria-label="Facebook"
            className="icon alt fa-facebook"
            target="_blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rubykansai"
            aria-label="GitHub"
            className="icon alt fa-github"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://rubykansai.doorkeeper.jp/contact/new"
            aria-label="Envelope"
            className="icon alt fa-envelope"
            target="_blank"
          >
            <span className="label">Envelope</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Osaka RubyKaigi 02 &copy; 2019</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
