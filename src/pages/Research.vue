<template>
  <q-page-container>
    <!--<q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <H2><vue-typer
      :text='["Now Loading. . .","Well come to yama-code!!!!! "]'
      :repeat='0'
      :shuffle='false'
      initial-action='typing'
      :pre-type-delay='80'
      :type-delay='100'
      :pre-erase-delay='2000'
      :erase-delay='50'
      erase-style='backspace'
      :erase-on-complete='false'
      caret-animation='smooth'
    ></vue-typer></H2>

    </q-page>
    <hr>-->
    <Loading />
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
                <div class="text-h6">Engineer & Creator</div>
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

    <q-page class="q-pa-md bg-grey-10 text-white">
      <div class="inner"><br>
        <div class="text-h3">
          Skills
        </div><br><br>
        <div class ="justify-center">
        <q-list dark style="center" class="my-card">
          <div v-for = "Skill in allDataID.data.Skills" :key="Skill">
            <q-item>
              <q-item-section>{{ Skill.skills }}</q-item-section>
            </q-item>
          </div>
        </q-list>
      </div></div>
    </q-page>
    <q-page>
      <br>
      <div class="q-px-lg q-pb-md">
      <q-timeline :layout="layout" color="secondary">
        <q-timeline-entry heading >
          Activity Record
        </q-timeline-entry>
        <div>
          <q-timeline-entry
            v-for="Activity in allDataID.data.Activity" :key="Activity"
            v-bind:title="Activity.name"
            v-bind:subtitle="Activity.date_info"
            v-bind:side="Activity.side"
            v-bind:icon="Activity.icon"
          >
            <div>
              <p v-html="Activity.infomation"></p>
            </div>
          </q-timeline-entry>
        </div>
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
      <div class="justify-evenly">
      <div class="flex flex-center ">
        <div class="row justify-center q-gutter-sm">
          <div v-for = "Article in allDataID.data.Articles" :key="Article">
          <div class="col-auto">
            <q-card class="my-card-artcle" flat bordered>
              <br>
              <q-item>
                <q-item-section avatar>
                  <q-avatar size="30px">
                      <img :src="Article.site">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                <q-item-label><a v-bind:href= "Article.link" target="_blank">{{ Article.name }}</a></q-item-label>
                  <q-item-label caption>
                    {{ Article.date }}
                  </q-item-label>
              </q-item-section>
            </q-item>
            <br>
          </q-card>
        </div>
        </div>
        </div>
      </div>
    </div>

    </q-page>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page-container>

</template>
<style lang="sass" scoped>
.my-card-artcle
  width: 100%
  min-width :400px
  max-width: 400px
  height:100px
.inner
  text-align: center
.bluepage
  background-color: #0000
</style>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
import axios from 'axios';
import { VueTyper } from 'vue-typer';

export default {
  name: 'PageIndex',
  data () {
    return {
      allDataID:"non",
      Activity:"non",
      Artcles:"non",
      Skills:"non"
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  components: {
    VueTyper
  },
  mounted: function(){
    axios.get('https://us-central1-cos5year.cloudfunctions.net/SheetsAPI?sheet_id=1FeRqAE3YLWKfvHomN23ANyZONzT0hKBtAFp08H-c9gI')
      .then(response => (this.allDataID = response))
    //console.log('check sample_url')
    //this.allDataID="bbb"
    //console.log(this.allDataID)
    //console.log('check')
  }
}

</script>
