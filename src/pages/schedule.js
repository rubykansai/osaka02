import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Schedule = props => (
  <Layout>
    <Helmet>
      <title>Schedule - Osaka RubyKaigi 02</title>
      <meta name="description" content="Schedule Page" />
    </Helmet>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Schedule</h1>
        </header>
      </div>
    </section>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Timetable</h2>
          </header>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>時間</th>
                  <th>(分)</th>
                  <th>内容</th>
                  <th>発表者</th>
                  <th>題目</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:00 - 10:00</td>
                  <td>60</td>
                  <td>Door Open &amp; 受付</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10:00 - 10:10</td>
                  <td>10</td>
                  <td>Opening</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10:10 - 10:20</td>
                  <td>10</td>
                  <td>Sponsors LT</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10:20 - 10:30</td>
                  <td>10</td>
                  <td>Sponsors LT</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10:30 - 11:00</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>
                    SHIBATA Hiroshi
                    <br />
                    <a
                      href="https://twitter.com/hsbt"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>OSS Security the hard way</td>
                </tr>
                <tr>
                  <td>11:00 - 11:30</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>
                    Kazuhiro NISHIYAMA
                    <br />
                    <a
                      href="https://twitter.com/znz"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>チャットボットのススメ</td>
                </tr>
                <tr>
                  <td>11:30 - 12:00</td>
                  <td>30</td>
                  <td>Keynote</td>
                  <td>
                    西見 公宏
                    <br />
                    <a
                      href="https://twitter.com/mah_lab"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>12:00 - 13:30</td>
                  <td>90</td>
                  <td>Lunch</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>13:30 - 13:40</td>
                  <td>10</td>
                  <td>Sponsors LT</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>13:40 - 14:10</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>
                    安川 要平
                    <br />
                    <a
                      href="https://twitter.com/yasulab"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>
                    子どものためのプログラミング道場『CoderDojo』を支えるRailsアプリケーションの設計と実装
                  </td>
                </tr>
                <tr>
                  <td>14:10 - 14:40</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>
                    わかば260
                    <br />
                    <a
                      href="https://twitter.com/wakaba260yen"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>Ruby/Rails Benchmarking and Profiling with TDD</td>
                </tr>
                <tr>
                  <td>14:40 - 15:00</td>
                  <td>20</td>
                  <td>TechTalk</td>
                  <td>
                    Pocke
                    <br />
                    <a
                      href="https://twitter.com/p_ck_"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>Suppress warnings</td>
                </tr>
                <tr>
                  <td>15:00 - 15:20</td>
                  <td>20</td>
                  <td>Afternoon Break</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>15:20 - 15:30</td>
                  <td>10</td>
                  <td>Sponsors LT</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>15:30 - 15:50</td>
                  <td>20</td>
                  <td>TechTalk</td>
                  <td>
                    willnet
                    <br />
                    <a
                      href="https://twitter.com/netwillnet"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>Concerns about Concerns</td>
                </tr>
                <tr>
                  <td>15:50 - 16:00</td>
                  <td>10</td>
                  <td>TechTalk</td>
                  <td>
                    KaoruHotate
                    <br />
                    <a
                      href="https://twitter.com/purunkaoru"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>
                    Fat
                    Modelに対処するための考え方と6つのリファクタリングパターン
                  </td>
                </tr>
                <tr>
                  <td>16:00 - 16:10</td>
                  <td>10</td>
                  <td>TechTalk</td>
                  <td>
                    Tomohiro Hashidate (joker1007){' '}
                    <a
                      href="https://twitter.com/joker1007"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>What a cool Ruby-2.7</td>
                </tr>
                <tr>
                  <td>16:10 - 16:20</td>
                  <td>10</td>
                  <td>TechTalk</td>
                  <td>
                    yebis0942
                    <br />
                    <a
                      href="https://twitter.com/yebis0942"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>いつでもどこでもクールなRubyを書く方法</td>
                </tr>
                <tr>
                  <td>16:20 - 16:50</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>
                    Yusuke Endoh
                    <br />
                    <a
                      href="https://twitter.com/mametter"
                      className="icon fa-twitter"
                      target="_blank"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </td>
                  <td>Ruby 3の型解析に向けた計画</td>
                </tr>
                <tr>
                  <td>16:50 - 17:00</td>
                  <td>10</td>
                  <td>Closing</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Schedule
