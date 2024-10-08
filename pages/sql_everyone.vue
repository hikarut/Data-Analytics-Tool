<template>
  <div>
    <!-- Main Visual -->
    <section class="section main-visual">
      <div class="container has-text-centered">
        <p class="subtitle">データ分析力を高める SQL研修</p>
        <h1 class="title is-2">SQL Everyone</h1>
        <figure class="sql_icon image is-128x128 is-inline-block">
          <img src="/sql_icon.png" alt="ロゴ画像" />
        </figure>
        <p class="subdesc">
          『SQL
          Everyone』は企業向けのSQL研修サービスです。『全ての人にデータ分析力』をというミッションのもと、データ分析で使うためのSQLを学習できるように基礎からサポートします。
        </p>
        <a
          href="https://forms.gle/CFKuJCcG81J5EwVA6"
          target="_blank"
          class="button is-primary mt-4"
          @click="trackInquiryEvent"
        >
          無料でお問い合わせ
        </a>
      </div>
    </section>

    <!-- Seminar Overview -->
    <section class="section seminar-overview mt-4">
      <div class="container">
        <h2 class="title is-3 has-text-centered mb-6">研修概要</h2>
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-256x256">
              <img src="/seminar.png" alt="セミナー画像" />
            </figure>
          </div>
          <div class="column is-half">
            <p>
              『SQL Everyone』は企業向けのSQL研修サービスです。<br />
              データ分析の内製化を進めるための第一歩として『SQL』を学ぶことが最も学習効率が良いと考えています。
              <!-- 変化の激しい時代を生き抜くためには企業としてデータ分析力を高める必要があります。その中でも最も学習効率が良いのが『SQL』です。 -->
            </p>
            <p class="mt-5">
              SQLは専門性が高く難しいスキルだと思っている方が多いかもしれませんが、データ分析で使うSQLは短期間でも十分に実務として使えるレベルで身につけることができます。
            </p>
            <p class="mt-5">
              そのためのSQL研修が『SQL
              Everyone』です。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、短期間でハンズオンを実施しながら効率よくSQLを学ぶ研修となっています。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail -->
    <section class="section instructor mt-5">
      <div class="container">
        <h2 class="title is-3 has-text-centered mb-6">詳細資料</h2>
        <div class="columns">
          <div class="column">
            <div class="has-text-centered">
              <figure
                class="image is-256x256 mb-3 is-inline-block document-image"
              >
                <a
                  href="https://speakerdeck.com/hikarut/detafen-xi-li-wogao-merusqlyan-xiu-sabisu-sql-everyone"
                  target="_blank"
                >
                  <img src="/document.jpeg" alt="資料" />
                </a>
              </figure>
              <p>詳細資料については以下からご確認いただけます。</p>
              <a
                href="https://speakerdeck.com/hikarut/detafen-xi-li-wogao-merusqlyan-xiu-sabisu-sql-everyone"
                target="_blank"
                class="button is-primary mt-4"
                @click="trackShowDocumentEvent"
              >
                資料確認
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section features mt-4 mb-4">
      <div class="container">
        <h2 class="title is-3 has-text-centered mb-5">
          SQL Everyoneの3つの特徴
        </h2>
        <div class="columns">
          <div class="column">
            <div class="has-text-centered">
              <figure class="image is-256x256 mb-3">
                <img src="/pc.png" alt="特徴1" />
              </figure>
              <p>
                ①ただ説明を聞くだけではなくPCでSQLを実行できる環境を用意して実際にSQLを実行しながらハンズオン形式で進める（環境構築もサポート）
              </p>
            </div>
          </div>
          <div class="column">
            <div class="has-text-centered">
              <figure class="image is-256x256 mb-3">
                <img src="/questions.png" alt="特徴2" />
              </figure>
              <p>
                ②質疑応答に答えながら不明点があればその場でサポート。一方的にならずにインタラクティブに学習。研修後のアフターフォローとしてSQLに関する質問にも回答
              </p>
            </div>
          </div>
          <div class="column">
            <div class="has-text-centered">
              <figure class="image is-256x256 mb-3">
                <img src="/data.png" alt="特徴3" />
              </figure>
              <p>
                ③データ分析に特化したSQL研修にすることで短期間で学習が可能。講師の実体験をもとに実際のデータ分析で使うSQLのTipsなども混ぜながら学習
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructor Introduction -->
    <section class="section instructor mt-5">
      <div class="container">
        <h2 class="title is-3 has-text-centered mb-6">講師紹介</h2>
        <div class="columns">
          <div class="column is-one-third has-text-centered">
            <figure class="is-inline-block is-centered image profile-image">
              <img class="profile-img" src="/profile.jpg" alt="講師画像" />
            </figure>
            <p class="has-text-weight-bold mt-3">高橋 光</p>
          </div>
          <div class="column">
            <p>
              青山学院大学経営システム工学科卒業。新卒でヤフー株式会社に入社し、Webエンジニアとしてサービスの開発、運用、企画、提案、など幅広くサービスに貢献。
            </p>
            <p class="mt-5">
              2016年からは株式会社イーブックイニシアティブジャパンに出向し、社内でデータサイエンスグループを立ち上げ部長として社内のデータ活用を促進。
              マーケティング施策の効果検証、事業分析、プロダクトのABテストなどデータを活用した意思決定に貢献。チームメンバーのSQLスキルアップや社内全体でのSQL勉強会などのデータ活用スキルアップ活動なども行い、組織全体をデータドリブンにする活動を実施。
            </p>
            <p class="mt-5">
              2021年から外資系コンサルティング企業に入社し、SQLを使ったデータ分析などデータを活用したマーケティング支援を実施。
              また複業として複数社でSQLを活用したデータ分析のサポート経験あり。
            </p>
          </div>
        </div>
        <div class="columns mt-6 mb-4">
          <div class="column is-one-third has-text-centered mb-4">
            <figure class="is-inline-block is-centered image is-128x128">
              <a href="https://www.amazon.co.jp/dp/4297134438/" target="_blank">
                <img
                  src="/book.jpg"
                  alt="データ分析力を高めるビジネスパーソンのためのSQL入門"
                />
              </a>
            </figure>
          </div>
          <div class="column is-half mt-6">
            <p class="has-text-weight-bold">
              著書：
              <a href="https://www.amazon.co.jp/dp/4297134438/" target="_blank">
                『データ分析力を高めるビジネスパーソンのためのSQL入門』
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="section pricing-plans mt-5 mb-5">
      <div class="container">
        <h2 class="title is-3 has-text-centered mb-6">料金プラン</h2>
        <div class="columns is-multiline">
          <div class="column is-full-mobile is-half-desktop">
            <div class="box has-text-centered pricing-box">
              <div class="box-header has-text-white p-4">
                <h3 class="title has-text-white is-5 mb-0">標準プラン</h3>
              </div>
              <div class="box-content content">
                <p class="is-size-6 has-text-weight-bold text-heading">対象</p>
                <p class="is-size-6">SQL初学者</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">教材</p>
                <p class="is-size-6">
                  <a
                    href="https://www.amazon.co.jp/dp/4297134438/"
                    target="_blank"
                  >
                    『データ分析力を高めるビジネスパーソンのためのSQL入門』
                  </a>
                </p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">形式</p>
                <p class="is-size-6">オンライン<br />（オフラインも可）</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">時間</p>
                <p class="is-size-6">2〜10時間<br />（調整可能）</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">人数</p>
                <p class="is-size-6">制限なし</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">事後</p>
                <p class="is-size-6">
                  1ヶ月間のアフターフォロー<br />（最終受講後1ヶ月間はSQLに関する質問に回答）
                </p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">金額</p>
                <p class="is-size-6">時間と内容によって要相談</p>
              </div>
            </div>
          </div>
          <div class="column is-full-mobile is-half-desktop">
            <div class="box has-text-centered pricing-box">
              <div class="box-header has-text-white p-4">
                <h3 class="title has-text-white is-5 mb-0">
                  カスタマイズプラン
                </h3>
              </div>
              <div class="box-content content">
                <p class="is-size-6 has-text-weight-bold text-heading">対象</p>
                <p class="is-size-6">SQL初学者</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">教材</p>
                <p class="is-size-6">企業様の環境に合わせてカスタマイズ</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">形式</p>
                <p class="is-size-6">オンライン<br />（オフラインも可）</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">時間</p>
                <p class="is-size-6">要相談</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">人数</p>
                <p class="is-size-6">制限なし</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">事後</p>
                <p class="is-size-6">1ヶ月+αのアフターフォロー</p>
                <hr />
                <p class="is-size-6 has-text-weight-bold text-heading">金額</p>
                <p class="is-size-6">要相談</p>
              </div>
            </div>
          </div>
        </div>
        <div class="has-text-centered">
          <p>
            ※金額に関しては厚生労働省の「人材開発支援助成金」や東京都の「DXリスキリング助成金」を活用して抑えることができる場合があります。
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section instructor mt-5">
      <div class="container">
        <h2 class="title is-3 has-text-centered mb-6">FAQ</h2>
        <div class="faq-item mb-3">
          <article class="message">
            <div class="message-header" @click="toggleFAQ(1)">
              <p>もう少し詳細な話を聞いてみたいのですが？</p>
              <span class="icon is-small">
                <i
                  :class="{ 'fa-angle-down': !faq1, 'fa-angle-up': faq1 }"
                  class="fas"
                ></i>
              </span>
            </div>
            <div v-show="faq1" class="message-body">
              ぜひまずは無料でご相談できればと思います。お問い合わせフォームからお問い合わせください。それ以外でもメール（ht.hikaru.takahashi@gmail.com）やX（旧Twitter）でも気軽にご相談ください。
            </div>
          </article>
        </div>
        <div class="faq-item mb-3">
          <article class="message">
            <div class="message-header" @click="toggleFAQ(2)">
              <p>今の時代SQLって必要ですか？ChatGPTがあれば不要では？</p>
              <span class="icon is-small">
                <i
                  :class="{ 'fa-angle-down': !faq2, 'fa-angle-up': faq2 }"
                  class="fas"
                ></i>
              </span>
            </div>
            <div v-show="faq2" class="message-body">
              結論としてはSQLの学習は必要だと考えています。確かにChatGPTなどの生成AIの登場によって、データ分析も簡単にできる時代に変わったのも事実です。一方で生成AIもまだまだ完璧ではなく間違ったことも出力するので、出てきた結果を正しく解釈して使いこなす能力も必要になります。その意味でSQLに関しても基本的な知識を持った上で、生成AIとうまく共存させて使いこなすことが重要だと思っています。
            </div>
          </article>
        </div>
        <div class="faq-item mb-3">
          <article class="message">
            <div class="message-header" @click="toggleFAQ(3)">
              <p>支援するのはSQLの研修だけですか？</p>
              <span class="icon is-small">
                <i
                  :class="{ 'fa-angle-down': !faq3, 'fa-angle-up': faq3 }"
                  class="fas"
                ></i>
              </span>
            </div>
            <div v-show="faq3" class="message-body">
              まず大事なのはスキルを身につけることなので、最初のきっかけとしてはSQLの学習をお勧めします。ただ、それ以外にもデータ分析組織開発に向けてのコンサルや壁打ちなどのご相談にも乗れます。中長期的に一緒にデータ分析力を高めるお手伝いができればと思いますので、SQL研修以外でも気になることがあればまずはお気軽にご相談ください。
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer contact pt-6">
      <div class="container">
        <div class="container has-text-centered mb-6">
          <h2 class="title is-4 has-text-white">
            SQL Everyoneに関してまずは無料でお問い合わせ
          </h2>
          <a
            href="https://forms.gle/CFKuJCcG81J5EwVA6"
            target="_blank"
            class="button is-primary mt-4"
            @click="trackInquiryEvent"
          >
            無料でお問い合わせ
          </a>
        </div>
        <div class="columns is-mobile is-multiline mt-6">
          <div
            class="column is-12-mobile has-text-centered-mobile has-text-left-tablet"
          >
            <a href="mailto:ht.hikaru.takahashi@gmail.com">
              ht.hikaru.takahashi@gmail.com
            </a>
            <a href="https://x.com/light940" target="_blank" class="ml-4">
              <img
                src="/logo-white.png"
                alt="X icon"
                style="width: 20px; height: 20px"
              />
            </a>
          </div>
          <div
            class="column is-12-mobile has-text-centered-mobile has-text-right-tablet"
          >
            <p>Copyright &copy;&nbsp;{{ date }}&nbsp;-&nbsp;SQL Everyone</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'empty',
  data: () => ({
    date: new Date().getFullYear(),
    faq1: false,
    faq2: false,
    faq3: false,
  }),
  methods: {
    trackInquiryEvent() {
      // @ts-ignore: This line will be ignored by TypeScript compiler
      if (window && window.gtag) {
        // @ts-ignore: This line will be ignored by TypeScript compiler
        window.gtag('event', 'click', {
          event_category: 'inquiry',
          event_label: 'free_inquiry',
          value: 1,
        })
      }
    },
    trackShowDocumentEvent() {
      // @ts-ignore: This line will be ignored by TypeScript compiler
      if (window && window.gtag) {
        // @ts-ignore: This line will be ignored by TypeScript compiler
        window.gtag('event', 'click', {
          event_category: 'document',
          event_label: 'show_document',
          value: 1,
        })
      }
    },
    // @ts-ignore: This line will be ignored by TypeScript compiler
    toggleFAQ(faqNumber) {
      // @ts-ignore: This line will be ignored by TypeScript compiler
      this[`faq${faqNumber}`] = !this[`faq${faqNumber}`]
    },
  },
  head() {
    return {
      title: 'データ分析を高めるSQL研修『SQL Everyone』',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'SQL,研修,法人向け,勉強会,データ分析,データサイエンティスト,データアナリスト,データエンジニア,マーケター,営業,ビジネスパーソン',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '『SQL Everyone』は企業向けのSQL研修サービスです。データ分析力を高めるために最も効果が高く学習効率も良いのが『SQL』です。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、短期間でハンズオンを実施しながら効率よくSQLを学ぶ研修となっています。',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://data-analytics-tool.com/document.jpeg`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'データ分析を高めるSQL研修『SQL Everyone』',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://data-analytics-tool.com/',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '『SQL Everyone』は企業向けのSQL研修サービスです。データ分析力を高めるために最も効果が高く学習効率も良いのが『SQL』です。SQLを全く知らない人が受けてもデータ分析で使えるSQLが学べるように、短期間でハンズオンを実施しながら効率よくSQLを学ぶ研修となっています。',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'application-name',
          content: 'データ分析を高めるSQL研修『SQL Everyone』',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'データ分析を高めるSQL研修『SQL Everyone』',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/sql_icon.png' }],
    }
  },
})
</script>

<style lang="scss" scoped>
.section {
  padding: 3rem 1.5rem;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.main-visual {
  background-image: url('/main.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 600px; /* 高さを600pxに設定 */
}
.main-visual .subtitle {
  font-size: 3rem; /* 字体を大きく設定 */
  font-weight: bold;
  color: $dark;
}
.main-visual .title {
  margin-top: 1rem;
  font-size: 4rem; /* 字体を大きく設定 */
  color: $dark;
}
.main-visual::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* 白色背景で20%透過 */
}
.main-visual .container {
  position: relative;
  z-index: 1;
}
// .main-visual .button {
.button {
  // background-color: $mainBlue;
  background: linear-gradient(to right, $mainBlue, $lightBlue);
  color: $white;
  font-weight: bold;
  font-size: 1rem; /* 字体を大きく設定 */
  margin-top: 2rem !important;
  padding: 1rem 4rem; /* ボタンを大きく */
  border-radius: 30px; /* 角をもう少し丸く */
}
.subdesc {
  margin-top: 2rem;
  font-size: 1rem;
}
.sql_icon {
  margin-top: 1.5rem; /* 画像の上にマージンを追加 */
}

.seminar-overview {
  background-color: $white;
}
.features {
  // background-color: $gray;
  background-color: $white;
}
.instructor {
  background-color: $gray;
}
.profile-img {
  border-radius: 50%; /* 画像を丸くする */
  width: 100%;
  height: auto;
  object-fit: cover;
  // aspect-ratio: 1.5 / 2; /* 縦長の楕円形にする */
}
.profile-image {
  width: 220px;
  height: 220px;
}
.pricing-plans {
  background-color: $white;
}
.box-header {
  border-top-left-radius: 6px; /* 角丸を設定 */
  border-top-right-radius: 6px; /* 角丸を設定 */
  background-color: $mainBlue; /* Bulmaのprimary色 */
  padding: 1rem; /* ヘッダー部分のパディングを追加 */
  margin: -1.3rem -1.3rem 1.3rem -1.3rem; /* ボックスの内側にぴったり合うようにマージンを調整 */
}

.box-content {
  padding: 1rem;
}

.columns.is-desktop {
  display: flex;
  flex-wrap: wrap;
}

.pricing-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.box-header {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 1rem;
}

.box-content p {
  margin-bottom: 0.5rem; /* 段落間のマージンを小さくする */
}

.box-content hr {
  margin: 0.5rem 0; /* 区切り線の上下のマージンを小さくする */
}

.box-content a {
  margin-bottom: 0.5rem; /* リンクの下のマージンを小さくする */
}
.text-heading {
  color: $blue;
}

.contact {
  background-color: $black;
  height: 400px; /* ここに指定したい高さを設定 */
}
.message-header {
  background-color: $white;
  color: $dark;
}
.message-body {
  background-color: $gray;
}
.footer {
  background-color: $black; /* 背景色を黒に設定 */
  color: #fff; /* テキストの色を白に設定 */
  padding: 1.5rem 1.5rem; /* パディングを設定 */
}
.footer a {
  color: #fff; /* リンクの色を白に設定 */
}
.footer .ml-4 {
  margin-left: 1rem; /* アイコンとメールアドレスの間にマージンを追加 */
}
@media (min-width: 1024px) {
  .container {
    max-width: 800px;
    padding: 0 3rem;
  }
  .subdesc {
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 700px; /* PC版での横幅指定 */
  }
  .contact {
    height: 300px; /* PC版でのフッターの高さ */
  }
  .document-image {
    width: 60%;
  }
}
@media (max-width: 768px) {
  .container {
    // padding: 0 1rem;
    padding: 0 0rem;
  }
  .main-visual .subtitle {
    font-size: 1.4rem; /* スマホ用 */
  }
  .main-visual .title {
    font-size: 2.2rem; /* スマホ用 */
  }
}
</style>
