import React from 'react'
import Layout from '../components/layout'
import OpenGraph from '../components/OpenGraph'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const About = props => (
  <Layout>
    <OpenGraph title="About"></OpenGraph>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>About</h1>
        </header>
        <div className="content">
          <p>
            大阪で 地域Ruby会議 を開催します。
            <br />
            大阪Ruby会議02 は多様なRubyに関わる方々の公演です。
          </p>
        </div>
      </div>
    </section>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Theme</h2>
          </header>
          <p>
            テーマは "Above All, Be Cool"
            です。みなさんのかっこいいを共有してください。
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img className="image" src={pic08} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>大阪Ruby会議01 の集合写真</h3>
              </header>
              <p>
                前回は、まつもとゆきひろさんをはじめ多くの発表者と参加者が集まりました。
              </p>
            </div>
          </div>
        </section>
        <section>
          <img className="image" src={pic09} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Ruby に関わる方の発表会</h3>
              </header>
              <p>
                Rubyの事例や、今後のバージョンアップについてなど様々な発表があります。
              </p>
            </div>
          </div>
        </section>
        <section>
          <img className="image" src={pic10} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>大阪Ruby会議02 の会場</h3>
              </header>
              <p>
                開催場所は前回と同じ大阪科学技術センターですが、会場は大ホールで開催します。
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default About
