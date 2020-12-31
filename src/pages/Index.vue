<template>
  <q-page-container>
    <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    </q-page>
    <hr>
    <q-page class="padding">
      <div class="inner">
        <br>
        <div class="text-h3">
          Who is yama?
        </div><br><br>
        <div class=icon-image>
          <q-img
            src="https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg"
            style="height: 280px; max-width: 300px"
          ></q-img>
          <!--<q-avatar>
            <img src="https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg">
          </q-avatar>-->
        </div><br>
        <div class="text-h4">
          yama
        </div><br>

      </div>
      <div class="layout-padding row justify-center background-whitesmoke items-center">
        <div class="col-xs-10 col-sm-7 col-lg-5">
          <div class="layout-padding row justify-center background-whitesmoke items-center">
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Engineer & Creater</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                東京都立大学システムデザイン学部情報科学科
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                <q-avatar size="30px">
                  <img src="https://cdn.icon-icons.com/icons2/936/PNG/128/github-logo_icon-icons.com_73546.png">
                </q-avatar>&nbsp;&nbsp;
                <a href="https://github.com/kurikinton105">kurikinton105</a><br><br>
                <q-avatar size="30px">
                  <img src="~assets/Twitter_Logo_WhiteOnBlue.png">
                </q-avatar>&nbsp;&nbsp;
                <a href="https://twitter.com/y_a_m_a_y_a">@y_a_m_a_y_a</a><br><br>
                <q-avatar size="30px">
                  <img src="~assets/qiita-qiita-jobs-favicon.png">
                </q-avatar>&nbsp;&nbsp;
                <a href="https://qiita.com/y_a_m_a">y_a_m_a</a><br><br>
                <q-avatar size="30px">
                  <img src="~assets/hatenablog-logo.png">
                </q-avatar>&nbsp;&nbsp;
                <a href="https://y-a-m-a-y-a.hatenablog.com/">yamaのメタノート</a><br><br>

              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <br><br>
    </q-page>
    <hr>
    <q-page>
      <div class="inner"><br>
        <div class="text-h3">
          Skills
        </div><br><br>
      </div>
    </q-page>
    <hr>
    <q-page>
      <br>
      <div class="q-px-lg q-pb-md">
      <q-timeline :layout="layout" color="secondary">
        <q-timeline-entry heading>
          Activity Record
        </q-timeline-entry>
        <q-timeline-entry
          title="Smoothie Slide"
          subtitle="October 17-18, 2020"
          side="right"
          icon="show_chart"
        >
          <div>
            オンラインでの複数人のプレゼンで困った経験はありますか？このアプリのRoomのスライドはどの端末でも連携されているので、原稿を見ながらスライドを操作する人はもういりません。さぁ、プレゼンの神になろう。 <br>
            #オータムハッカソン 最優秀作品
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="写真あげMASKぁ〜？？"
          subtitle="September 1-12, 2020"
          side="left"
          icon ="camera"
        >
          <div>
            良い写真撮れたからSNSにあげたい！でも、知らない人の顔ガッツリ写り込んでるし、使いづらい、、。そんなお悩み解決しつつ、手軽に「写真あげMASKぁ～？？」。※煽っているわけではありません。<br>
            <a href="https://icy-moss-046b41900.azurestaticapps.net/">  https://icy-moss-046b41900.azurestaticapps.net/</a><br>
            (<a href="https://hacku.yahoo.co.jp/hacku2020online3/">  Open Hack U 2020 vol.3 最優秀作品 </a>)
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="StudyOurSelves (SOS)"
          subtitle="August 15-16, 2020"
          side="right"
          icon="today"
        >
          <div>
            ToDoタスク共有＋クイズ共有＝みんなで勉強<br>
            皆さんは、テスト前に友達と問題出し合うことをしたことはありますか？ありますよね。しかしオンライン授業によって問題を出し合うのが難しい。さらに宿題の量も増えてToDoがたくさん...しかし、大丈夫。StudyOurSelvesがあればみんなでToDoとクイズが共有できます。<br>
            #サマーハッカソン・<a href="https://talent.supporterz.jp/geekten/2020/">技育展</a>参加作品<br>
            <a href="http://studyourselves.azurewebsites.net/">  http://studyourselves.azurewebsites.net/</a>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Make Class Easy"
          subtitle="July 22, 2020"
          side="left"
          icon="library_books"
        >
          <div>
            「Make Class Easy」は授業の理解を補助するサービスである。授業中に教授が口頭で話した内容を文字に起こし、要約した文章を生成する。また、要約した文章およびその他の任意の文章にて専門用語が出てきた場合、用語の意味について注釈を加え、数式が出てきた際には何の公式や理論を用いているのかを補足した新たな文章を生成する。これらの機能を用いて学習効率を向上できる。<br>
            「機械学習」最終プロジェクトのプロトタイプです。<br>
            <a href="https://summary-classes-web.azurewebsites.net/">  https://summary-classes-web.azurewebsites.net/</a>
          </div>
        </q-timeline-entry>
      </q-timeline>
      </div>
    </q-page>
    <hr>
    <q-page>
      <div class="inner">
        <br>
        <div class="text-h3">
          Articles
        </div><br>
        <div class="text-weight-regular">
          Qiita、はてなブログなどから記事の一覧をまとめています。
        </div>
      </div><br>
      <div class="flex flex-center">
       <div class="row">
       <div class="col-auto">
        <q-card class="my-card" flat bordered>
          <br>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://gyazo.com/d9f84923f103dded87fb6769db010e70/thumb/1000">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label><a href= "https://qiita.com/y_a_m_a/items/2fef42212f5ffeb11531" >Azure Web AppsではじめるFlask入門</a></q-item-label>
              <q-item-label caption>
                2020年12月25日
              </q-item-label>
            </q-item-section>
          </q-item>
          <br>
        </q-card>
        </div>&nbsp;&nbsp;
        <div class="col-auto">
          <q-card class="my-card" flat bordered>
            <br>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://gyazo.com/d9f84923f103dded87fb6769db010e70/thumb/1000">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><a href= "https://qiita.com/y_a_m_a/items/2fef42212f5ffeb11531" >Azure Web AppsではじめるFlask入門</a></q-item-label>
                <q-item-label caption>
                  2020年12月25-2日
                </q-item-label>
              </q-item-section>
            </q-item>
            <br>
          </q-card>
        </div>&nbsp;&nbsp;
        <div class="col-auto">
          <q-card class="my-card" flat bordered>
            <br>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="~assets/qiita-qiita-jobs-favicon.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><a href= "https://qiita.com/y_a_m_a/items/2fef42212f5ffeb11531" >Azure Web AppsではじめるFlask入門</a></q-item-label>
                <q-item-label caption>
                  2020年12月25-3日
                </q-item-label>
              </q-item-section>
            </q-item>
            <br>
          </q-card>

          <div class="col-auto">
          <q-card class="my-card" flat bordered>
            <br>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="~assets/qiita-qiita-jobs-favicon.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label><a href= "https://qiita.com/y_a_m_a/items/2fef42212f5ffeb11531" >Azure Web AppsではじめるFlask入門</a></q-item-label>
                <q-item-label caption>
                  2020年12月25-4日
                </q-item-label>
              </q-item-section>
            </q-item>
            <br>
          </q-card>
        </div>

        </div>
      </div>
    </div>
    </q-page>

    <q-page>
      <div class="inner">
        <br>
        <a>Copyright yama 2020-2021.</a>
        <h2>ID:{{ allDataID }}</h2>
        <br>
      </div>
    </q-page>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page-container>

</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
.inner
  text-align: center
</style>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
import firebase from 'firebase'

export default {
  name: 'PageIndex',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  data () {
    return {
      allData: [],
      allDataID: []
    }
  },
  created: {
    allCommentsID: {
      //const db = firebase.firestore();
      firebase.firestore().collection('Activity').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.allDataID.push(doc.id)
        })
      })
    }
  },
  methods: {

  }
}

</script>
