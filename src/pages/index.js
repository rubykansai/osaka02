import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Osaka RubyKaigi 02"
          meta={[
            { name: 'description', content: 'Regional RubyKaigi at Osaka 02' },
            {
              name: 'keywords',
              content: 'Regional RubyKaigi Osaka RubyKansai Ruby',
            },
            {
              property: 'og:image',
              content:
                'https://raw.githubusercontent.com/rubykansai/osaka02/master/src/assets/images/og.png',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to About Page"
                to="/about"
                className="link primary"
              >
                <header className="major">
                  <h3>About</h3>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Schedule Page"
                to="/schedule"
                className="link primary"
              >
                <header className="major">
                  <h3>Schedule</h3>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link
                aria-label="Link to Sponsors Page"
                to="/sponsors"
                className="link primary"
              >
                <header className="major">
                  <h3>Sponsors</h3>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Team Page"
                to="/team"
                className="link primary"
              >
                <header className="major">
                  <h3>Team</h3>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Afterparty</h2>
              </header>
              <p>
                <i className="icon fa-clock-o"></i> 18:00 - 20:00{' '}
                <i className="icon fa-yen"></i> 4,000 <br />
                <i className="icon fa-map-marker"></i>{' '}
                <a
                  href="https://www.google.com/maps?ll=34.684598,135.501441&z=16&t=m&hl=ja&gl=US&mapclient=embed&cid=16497203959646832251"
                  target="_blank"
                >
                  WOOL Honmachi Beer Arcade
                </a>
              </p>
              <p></p>
              <ul className="actions">
                <li>
                  <a
                    href="https://rubykansai.doorkeeper.jp/events/95989"
                    name="Register Now"
                    className="button next scrolly"
                    target="_blank"
                  >
                    Register Now
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
