<template>
  <q-page-container>
    <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
      <q-page-sticky position="bottom" :offset="[0, 18]">
        <q-btn round color="accent" icon="arrow_forward" class="rotate-90" />
      </q-page-sticky>
    </q-page>
    <hr>
    <q-page class="padding">
      <div class="layout-padding row justify-center background-whitesmoke items-center">
        <div class="col-xs-10 col-sm-7 col-lg-5">
          <div class="layout-padding row justify-center background-whitesmoke items-center">
            <q-card class="my-card">
              <q-card-section>
                yama
              </q-card-section>
            </q-card>
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>

              <q-separator inset />

              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
    <hr>
    <q-page>
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
      <div class="layout-padding row justify-center background-whitesmoke items-center">
      <div class="col-xs-12 col-sm-7 col-lg-5">
        <br>
        <q-card class="q-card-background-white">
          <q-card-main>
            <div class="center">
              <div class="row justify-center">
                <div>
                  <q-spinner-ball color="blue" size="10em"/>
                  <!--<img src="~assets/quasar-logo-full.svg" class="logo-sized">-->
                </div>
              </div>
              <div class="row justify-center">
                <div class="col-sm-10  text-left justify-center">
                  <div class="center">
                  <h5>Cos5yearとは</h5>
                  <p>Cos5yearとは、8割程度ノリで動くものづくり集団である。ハッカソンに参加したりしている。作ることで様々な課題を解決することができる技術集団である。</p>
                  <h5>Member</h5>
                  </div>
                  <div class="q-pa-md justify-center" style="max-width: 350px">
                    <q-list bordered>
                      <q-item>
                        <q-item-section avatar>
                          <q-avatar rounded>
                            <img src="https://avatars1.githubusercontent.com/u/60651943?s=460&v=4">
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>jimar884</q-item-section>
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                          <span class="cursor-pointer"><a href="https://github.com/jimar884">Open in GitHub</a></span>
                        </q-item-label>
                      </q-item>

                      <q-item link="https://github.com/kurikinton105">
                        <q-item-section avatar>
                          <q-avatar rounded>
                            <img src="https://avatars1.githubusercontent.com/u/51431248?s=460&u=5128210f9a2fa7630816fc16062dd778f5748570&v=4">
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>yama</q-item-section>
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                          <span class="cursor-pointer"><a href="https://github.com/kurikinton105">Open in GitHub</a></span>
                        </q-item-label>
                      </q-item>

                      <q-item>
                        <q-item-section avatar>
                          <q-avatar rounded>
                            <img src="https://avatars1.githubusercontent.com/u/17696131?s=460&v=4">
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>tomsoya</q-item-section>
                        <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                          <span class="cursor-pointer"><a href="https://github.com/tomsoyaN">Open in GitHub</a></span>
                        </q-item-label>
                      </q-item>
                      <q-separator />
                    </q-list>
                  </div>
                </div>
              </div>
            </div>
          </q-card-main>
        </q-card>
        <br>
      </div>
    </div>
    </q-page>
  </q-page-container>

</template>

<script>
export default {
  name: 'PageIndex',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}

</script>
