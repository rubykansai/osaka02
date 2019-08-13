import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import agileware from '../assets/images/sponsors/agileware.png'
import ateam from '../assets/images/sponsors/ateam.png'
import enechange from '../assets/images/sponsors/enechange.png'
import rubydev from '../assets/images/sponsors/rubydev.png'
import ingage from '../assets/images/sponsors/ingage.png'
import rubykansai from '../assets/images/sponsors/rubykansai.png'
import naniwarb from '../assets/images/sponsors/naniwarb.png'

const Sponsors = props => (
  <Layout>
    <Helmet>
      <title>Sponsors - Osaka RubyKaigi 02</title>
      <meta name="description" content="Sponsors Page" />
    </Helmet>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Sponsors</h1>
        </header>
      </div>
    </section>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Platinum Sponsors</h2>
          </header>

          <div className="grid-wrapper">
            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="https://agileware.jp/" target="_blank">
                    <img src={agileware} alt="" />
                  </a>
                </span>
                <h3>株式会社アジャイルウェア</h3>
                <p>
                  アジャイルウェアは、Ruby on
                  Railsによるアジャイル開発に軸足を置き、最短で最高のソフトウェアを作ることをモットーに大手企業と直接取引を行っています。目指すは顧客・従業員満足度日本一！
                </p>
              </div>
            </div>

            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="http://www.a-tm.co.jp/" target="_blank">
                    <img src={ateam} alt="" />
                  </a>
                </span>
                <h3>株式会社エイチーム</h3>
                <p>
                  エイチームは、ゲーム/アプリ・WebサービスやECサービスなど様々なビジネス領域を展開する総合IT企業。Ruby
                  on
                  Railsを用いたバックエンド開発やReactjsやVuejsといったフロントエンド開発を自社内で100%開発しております。
                </p>
              </div>
            </div>

            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="http://enechange.co.jp/" target="_blank">
                    <img src={enechange} alt="" />
                  </a>
                </span>
                <h3>エネチェンジ株式会社</h3>
                <p>
                  エネチェンジは、電力・ガス料金の比較サイト「エネチェンジ」を基軸に電力データの解析など「エネルギーの未来をつくる」会社です。エネルギー革命が加速する今、Rubyを用いたシステム開発はかかせません。
                </p>
              </div>
            </div>

            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="https://www.ruby-dev.jp/" target="_blank">
                    <img src={rubydev} alt="" />
                  </a>
                </span>
                <h3>株式会社Ruby開発</h3>
                <p>
                  Ruby開発は、Ruby on
                  Railsをコア技術とし、クラウドを利用したアジャイル開発により、継続的な機能改善/追加を得意とします。Rubyコミュニティへの積極的な支援、Rubyエンジニアの育成にも積極的に取り組んでいます。
                </p>
              </div>
            </div>
          </div>

          <hr className="major" />

          <header className="major">
            <h2>Drinkup Sponsors</h2>
          </header>

          <div className="grid-wrapper">
            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="https://ingage.co.jp/" target="_blank">
                    <img src={ingage} alt="" />
                  </a>
                </span>
                <h3>株式会社インゲージ</h3>
                <p>
                  インゲージは、Ruby on
                  Railsで開発したコミュニーケーションクラウド「Re:lation（リレーション）」を提供しています。Re:lation
                  はメール・チャット・LINEなど複数のチャンネルから来る問い合わせを一元管理・共有できるサービスです。
                </p>
              </div>
            </div>
          </div>

          <hr className="major" />

          <header className="major">
            <h2>Community Sponsors</h2>
          </header>

          <div className="grid-wrapper">
            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="https://rubykansai.doorkeeper.jp/" target="_blank">
                    <img src={rubykansai} alt="" />
                  </a>
                </span>
                <h3>Ruby関西</h3>
                <p>
                  Ruby関西 は Ruby関西 勉強会 や 関西Ruby會議 、 Rails
                  勉強会＠関西 など、関西での Ruby
                  に関するイベントの主体となるコミュニティです。
                </p>
              </div>
            </div>

            <div className="col-5">
              <div className="box">
                <span className="image fit sponsor">
                  <a href="https://naniwarb.doorkeeper.jp/" target="_blank">
                    <img src={naniwarb} alt="" />
                  </a>
                </span>
                <h3>naniwa.rb</h3>
                <p>
                  なにわ
                  のものづくりコミュニティーです。電子工作やアクセサリーを作ります。
                  Ruby のプログラミングでマイコンを動かすこともできます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Sponsors
