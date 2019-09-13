import React from 'react'
import Layout from '../components/layout'
import OpenGraph from '../components/OpenGraph'
import Speaker from '../components/Speaker'

const Speakers = props => (
  <Layout>
    <OpenGraph title="Speakers"></OpenGraph>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Speakers</h1>
        </header>
      </div>
    </section>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Keynote Speakers</h2>
          </header>
          <div className="grid-wrapper">
            <div className="col-4">
              <div className="box">
                <div className="grid-wrapper">
                  <div className="col-6">
                    <span className="image fit">
                      <img
                        src="https://dgndea2fsuumd.cloudfront.net/assets/profile/mah/mah-b0da2853a2fbebeac06eb34780de0ca3eb9a5a772b7279cb831d90dece8d0d42.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <h4>西見 公宏 </h4>
                <ul className="icons">
                  <li>
                    <a
                      href="https://twitter.com/mah_lab"
                      className="icon fa-twitter"
                    >
                      <span className="label">Twitter</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://blog.mah-lab.com/"
                      className="icon fa-globe"
                    >
                      <span className="label">Blog</span>
                    </a>
                  </li>
                </ul>
                <p>
                  Rubyが好きすぎる、プログラミングが好きすぎる皆さんに向けて、プログラミングを一生の仕事にする一つの方法として、Ruby/Railsを活用した顧問プログラマーという生き方を8年続けて分かったことから、顧問プログラマーという生き方についてご紹介します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>Speakers</h2>
          </header>
          <div className="grid-wrapper">
            <div className="col-4">
              <Speaker
                name="SHIBATA Hiroshi"
                avatar_url="https://avatars1.githubusercontent.com/u/12301?s=460&v=4"
                twitter_url="https://twitter.com/hsbt"
                github_url="https://github.com/hsbt"
                abstract="プログラミング言語 Ruby と RubyGems の脆弱性対応を一例として、OSS に
                脆弱性が発見された場合のインシデントレスポンスの初動対応からリリースまでに行ったことを紹介します。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="Kazuhiro NISHIYAMA"
                avatar_url="https://avatars2.githubusercontent.com/u/11857?s=460&v=4"
                twitter_url="https://twitter.com/znz"
                github_url="https://github.com/znz"
                abstract="テキスト処理を得意とする Ruby でチャットボットを作成し運用し続けてたまった知見の紹介として、
                チャットボットの面白さや便利さ、作成上の注意点などをお話しします。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="安川 要平"
                avatar_url="https://avatars0.githubusercontent.com/u/155807?s=460&v=4"
                twitter_url="https://twitter.com/yasulab"
                github_url="https://github.com/yasulab"
                abstract="世界100カ国・1900道場、日本全国175ヶ所以上に広がる子どものための
                プログラミング道場『CoderDojo』コミュニティを支える Ruby/Rails 活用事例についてお話しします。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="わかば260"
                avatar_url="https://avatars0.githubusercontent.com/u/12092707?s=460&v=4"
                twitter_url="https://twitter.com/wakaba260yen"
                github_url="https://github.com/yuemori"
                abstract="リアルタイムゲームにおけるRuby/Railsアプリケーションは高いパフォーマンスを要求されます。
                要求パフォーマンスをクリアするために行ったベンチマークやプロファイルのテスト・改善のサイクルを繰り返す手法、
                そして改善の中において行った実装や技術選択などについて、得られた知見を共有します。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="Pocke"
                avatar_url="https://avatars2.githubusercontent.com/u/4361134?s=460&v=4"
                twitter_url="https://twitter.com/p_ck_"
                github_url="https://github.com/pocke"
                abstract="Rubyを`-w`オプション付きで実行したことはありますか？
                このオプションをつけてRubyを実行すると、様々なRubyの警告が表示されるようになります。
                このトークでは、この警告の意味や消し方、警告によって見つかったバグなどを紹介します。
                このトークによって世界のRubyコードから警告が減ってくれれば幸いです。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="willnet"
                avatar_url="https://avatars1.githubusercontent.com/u/82371?s=460&v=4"
                twitter_url="https://twitter.com/netwillnet"
                github_url="https://github.com/willnet"
                abstract="Railsの機能の一つに、Concernsと呼ばれるものがあります。
                app/controllers/concernsやapp/models/concernsに関心事を切り出して配置するものです。
                私はフリーランスや技術顧問として多くの会社のRailsプロジェクトに関わってきました。その中で、良かれと思ってConcernsを使ったものの、
                そのことによりかえって可読性や保守性を下げてしまうケースをよく見かけています。
                これは「Concernsをどのように使うのか」が曖昧な状態でなんとなく使っていることが原因ではないかと思います。
                この発表では  - Concernsとは何か - Concernsを構成するActiveSupport::Concernとは
                何か - Concernsを使うべきでないケースと代替案 - Concernsを使うべきケースについて解説することで
                「Concernsを完全に理解した」状態にすることを目的にしています。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="KaoruHotate"
                avatar_url="https://avatars2.githubusercontent.com/u/5081402?s=460&v=4"
                twitter_url="https://twitter.com/purunkaoru"
                github_url="https://github.com/hotatekaoru"
                abstract="Railsアプリを作っていて、
                「Controllerの見通しをよくする」「Viewにロジックを書かない」といった言葉を聞いたことはないでしょうか。
                Fat Controller / Fat Viewは、Modelに処理を移すという手法をとることが多いと思いますが、その結果、Fat Modelという負債を作ってしまいます。
                1つのActiveRecordを継承したモデルオブジェクトに大量の便利メソッドと大量の分岐を作ったり、
                中身を見ないと何をやっているかが分からないクラスを作ったり。。。
                本セッションでは、Fat Modelをリファクタリングして見えてきた、6つのパターンを話します。各パターンのサンプルコードと、
                解決できる内容・メリットを、他のプロジェクトにもいかせるように解説します。
                サンプルコードは、過去に出会ってきたコードを題材にし、実体験に基づいた修正内容を紹介します。Fat Modelに悩む方の一助になれば幸いです。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="Tomohiro Hashidate (joker1007)"
                avatar_url="https://avatars0.githubusercontent.com/u/116996?s=460&v=4"
                twitter_url="https://twitter.com/joker1007"
                github_url="https://github.com/joker1007"
                abstract="Ruby-2.7は最近のリリースの中でも特にCoolな機能が盛り沢山です。
                如何にそれらの機能がCoolかということを自作のgemのAPIとその実装を基に紹介します。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="yebis0942"
                avatar_url="https://secure.gravatar.com/avatar/41d6ba8848793742a99614e07c82fe36?d=mm&s=400"
                twitter_url="https://twitter.com/yebis0942"
                github_url="https://github.com/vzvu3k6k"
                abstract="Ruby 2.7に向けて、numbered parameter、パターンマッチなどのクールな構文が提案されています。
                これらの新しい構文を使って書かれたRubyのコードを古いバージョンのRubyで動作するようにコンパイルする方法について解説します。"
              />
            </div>
            <div className="col-4">
              <Speaker
                name="Yusuke Endoh"
                avatar_url="https://avatars1.githubusercontent.com/u/21557?s=460&v=4"
                twitter_url="https://twitter.com/mametter"
                github_url="https://github.com/mame"
                abstract="Ruby 3の三大目標の1つである静的解析機能について、現在の計画と進捗を報告します。

                Ruby 3では、複数のコンポーネントからなる静的解析ツールチェインが構想されています。
                (1)標準的な型シグネチャフォーマット、
                (2)アプリケーションコードの型シグネチャを要求せずに緩く検査し、型シグネチャを推定するlevel-1型検査、
                (3)アプリケーションコードの型シグネチャを元に検査を行うlevel-2型検査、
                により、Rubyの型検査に対するさまざまなレベルのニーズに応えることを企図しています。
                
                この発表では特に、level-1型検査器として発表者が開発している『型プロファイラ』について詳しく説明します。
                型プロファイラは、注釈のないRubyコードを対象とする軽量な静的解析ツールです。
                静的解析によるプログラミング支援として型エラーの可能性を検出したり、
                型注釈を必要とする別の検証ツールを使うために型注釈の推定を行ったりすることができます。
                型プロファイラの基本的なアイデア、設計において気にしていること、現在の進捗などを説明する予定です。"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Speakers
