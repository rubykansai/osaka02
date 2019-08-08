import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import symbol from '../assets/images/symbol.svg'

const Team = props => (
  <Layout>
    <Helmet>
      <title>Team - Osaka RubyKaigi 02</title>
      <meta name="description" content="Team Page" />
    </Helmet>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Team</h1>
        </header>
      </div>
    </section>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Organizers</h2>
          </header>

          <hr className="major" />

          <div className="grid-wrapper">
            <div className="col-4">
              <ul className="alt">
                <li>
                  Chief Organizer: ogom{' '}
                  <a
                    href="https://twitter.com/ogomr"
                    className="icon fa-twitter"
                    target="_blank"
                  >
                    <span className="label">Twitter</span>
                  </a>
                  <a
                    href="https://github.com/ogom"
                    className="icon fa-github"
                    target="_blank"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>Organizer: honeniq</li>
                <li>Organizer: islands5</li>
                <li>Organizer: khori</li>
                <li>Designer: ayatanet</li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit ">
                <img src={symbol} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Team
