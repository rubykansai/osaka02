import React from 'react'
import Layout from '../components/layout'
import OpenGraph from '../components/OpenGraph'
import { Link } from 'gatsby'

const Schedule = props => (
  <Layout>
    <OpenGraph title="Schedule"></OpenGraph>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Schedule</h1>
        </header>
        <div className="content">
          <p>
            発表の概要は <Link to="/speakers">Speakers</Link> をご覧ください。
          </p>
        </div>
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
                  <td>SHIBATA Hiroshi</td>
                  <td>OSS Security the hard way</td>
                </tr>
                <tr>
                  <td>11:00 - 11:30</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>Kazuhiro NISHIYAMA</td>
                  <td>チャットボットのススメ</td>
                </tr>
                <tr>
                  <td>11:30 - 12:00</td>
                  <td>30</td>
                  <td>Keynote</td>
                  <td>西見 公宏</td>
                  <td>
                    プログラミングを一生の仕事にする
                    〜顧問プログラマを8年続けて分かったこと〜
                  </td>
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
                  <td>安川 要平</td>
                  <td>
                    子どものためのプログラミング道場『CoderDojo』を支えるRailsアプリケーションの設計と実装
                  </td>
                </tr>
                <tr>
                  <td>14:10 - 14:40</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>わかば260</td>
                  <td>Ruby/Rails Benchmarking and Profiling with TDD</td>
                </tr>
                <tr>
                  <td>14:40 - 15:00</td>
                  <td>20</td>
                  <td>TechTalk</td>
                  <td>Pocke</td>
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
                  <td>willnet</td>
                  <td>Concerns about Concerns</td>
                </tr>
                <tr>
                  <td>15:50 - 16:00</td>
                  <td>10</td>
                  <td>TechTalk</td>
                  <td>KaoruHotate</td>
                  <td>
                    Fat
                    Modelに対処するための考え方と6つのリファクタリングパターン
                  </td>
                </tr>
                <tr>
                  <td>16:00 - 16:10</td>
                  <td>10</td>
                  <td>TechTalk</td>
                  <td>Tomohiro Hashidate (joker1007)</td>
                  <td>What a cool Ruby-2.7</td>
                </tr>
                <tr>
                  <td>16:10 - 16:20</td>
                  <td>10</td>
                  <td>TechTalk</td>
                  <td>yebis0942</td>
                  <td>いつでもどこでもクールなRubyを書く方法</td>
                </tr>
                <tr>
                  <td>16:20 - 16:50</td>
                  <td>30</td>
                  <td>TechTalk</td>
                  <td>Yusuke Endoh</td>
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
