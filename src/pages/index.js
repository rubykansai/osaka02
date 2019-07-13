import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import agileware from '../assets/images/sponsor/agileware.png'
import ateam from '../assets/images/sponsor/ateam.png'
import enechange from '../assets/images/sponsor/enechange.png'
import rubydev from '../assets/images/sponsor/rubydev.png'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import circle01 from '../assets/images/circle01.svg'

const Homepage = () => {
  const siteTitle = 'Osaka RubyKaigi 02'
  const siteDescription = 'Regional RubyKaigi at Osaka 02'
  const siteKeywords = 'Regional RubyKaigi Osaka RubyKansai Ruby'

  return (
    <Layout>
      <Helmet
        title={siteTitle}
        meta={[
          { name: 'description', content: siteDescription },
          { name: 'keywords', content: siteKeywords },
        ]}
      />

      <section id="one" className="main style1">
        <div className="grid-wrapper">
          <div className="col-6">
            <header className="major">
              <h2>About</h2>
            </header>
            <p>
              大阪で <a href="http://regional.rubykaigi.org/">地域Ruby会議</a>{' '}
              を開催します。
              <br />
              大阪Ruby会議02 は多様なRubyに関わる方々の公演です。
            </p>
            <p>
              テーマは "Above All, Be Cool"
              です。みなさんのかっこいいを共有してください。 CFPの登録は
              <a href="https://rubykansai.doorkeeper.jp/events/92963/">
                こちら
              </a>
              です。 たくさんの発表の応募をお待ちしております。
            </p>
          </div>
          <div className="col-6">
            <span className="image fit">
              <img src={pic01} alt="" />
            </span>
          </div>
        </div>
      </section>

      <section id="two" className="main style2">
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <img src={circle01} alt="" />
            </span>
          </div>
          <div className="col-6">
            <header className="major">
              <h2>Timetable</h2>
            </header>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>Description</th>
                    <th>Speaker</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09:00</td>
                    <td colSpan="2">Door Open</td>
                  </tr>
                  <tr>
                    <td>10:00</td>
                    <td colSpan="2">Opening</td>
                  </tr>
                  <tr>
                    <td>10:30</td>
                    <td>Keynote</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>11:00</td>
                    <td>TechTalk</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>12:00</td>
                    <td colSpan="2">Lunch</td>
                  </tr>
                  <tr>
                    <td>13:00</td>
                    <td>Lightning Talks</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>15:00</td>
                    <td colSpan="2">Afternoon Break</td>
                  </tr>
                  <tr>
                    <td>15:30</td>
                    <td>Lightning Talks</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>17:00</td>
                    <td colSpan="2">Closing</td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td colSpan="2">Afterparty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="main style1 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Sponsors</h2>
            </header>
          </div>
          <div className="col-3">
            <span className="image fit">
              <a href="https://agileware.jp/" target="_blank">
                <img src={agileware} alt="" />
              </a>
            </span>
            <h5>株式会社アジャイルウェア</h5>
            <p className="align-left sponsors-text">
              アジャイルウェアは、Ruby on
              Railsによるアジャイル開発に軸足を置き、最短で最高のソフトウェアを作ることをモットーに大手企業と直接取引を行っています。目指すは顧客・従業員満足度日本一！
            </p>
          </div>
          <div className="col-3">
            <span className="image fit">
              <a href="http://www.a-tm.co.jp/" target="_blank">
                <img src={ateam} alt="" />
              </a>
            </span>
            <h5>株式会社エイチーム</h5>
            <p className="align-left sponsors-text">
              エイチームは、ゲーム/アプリ・WebサービスやECサービスなど様々なビジネス領域を展開する総合IT企業。Ruby
              on
              Railsを用いたバックエンド開発やReactjsやVuejsといったフロントエンド開発を自社内で100%開発しております。
            </p>
          </div>
          <div className="col-3">
            <span className="image fit">
              <a href="http://enechange.co.jp/" target="_blank">
                <img src={enechange} alt="" />
              </a>
            </span>
            <h5>エネチェンジ株式会社</h5>
            <p className="align-left sponsors-text">
              エネチェンジは、電力・ガス料金の比較サイト「エネチェンジ」を基軸に電力データの解析など「エネルギーの未来をつくる」会社です。エネルギー革命が加速する今、Rubyを用いたシステム開発はかかせません。
            </p>
          </div>
          <div className="col-3">
            <span className="image fit">
              <a href="https://www.ruby-dev.jp/" target="_blank">
                <img src={rubydev} alt="" />
              </a>
            </span>
            <h5>株式会社Ruby開発</h5>
            <p className="align-left sponsors-text">
              Ruby開発は、Ruby on
              Railsをコア技術とし、クラウドを利用したアジャイル開発により、継続的な機能改善/追加を得意とします。Rubyコミュニティへの積極的な支援、Rubyエンジニアの育成にも積極的に取り組んでいます。
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="main style2 special">
        <div className="container">
          <header className="major">
            <h2>Team</h2>
          </header>
          <ul className="major-icons">
            <li>
              <span className="icon major">ogom</span>
            </li>
            <li>
              <span className="icon major">honeniq</span>
            </li>
            <li>
              <span className="icon major">islands5</span>
            </li>
            <li>
              <span className="icon major">khori</span>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Homepage
