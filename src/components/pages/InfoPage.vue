<template>
  <q-page class="padding" style="padding:1%">
    <div style="text-align: center">
      <div class="text-h3" style="padding : 2%;">
        Who is yama?
      </div>
      <q-img
        class="icon-image"
        src="https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg"
        style="height: 280px; max-width: 300px"
        alt="yama icon"
      ></q-img>
      <div class="text-h4" style="padding : 2%;">
        yama
      </div>
    </div>
    <div
      class="layout-padding row justify-center background-whitesmoke items-center"
    >
      <div class="col-xs-10 col-sm-7 col-lg-5">
        <div
          class="layout-padding row justify-center background-whitesmoke items-center"
        >
          <q-card flat bordered style="min-width: 45vh;" >
            <q-card-section>
              <div class="text-h6">Engineer & Creator</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
              <q-avatar size="30px">
                <img
                  src="~assets/github-logo_icon-icons.com_73546.png"
                  alt="github icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://github.com/kurikinton105" target="_blank"
                >kurikinton105</a
              ><br /><br />
              <q-avatar size="30px">
                <img
                  src="~assets/X_Logo.png"
                  alt="twitter icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://twitter.com/y_a_m_a_y_a" target="_blank"
                >@y_a_m_a_y_a</a
              ><br /><br />
              <q-avatar size="30px">
                <img
                  src="~assets/qiita-qiita-jobs-favicon.png"
                  alt="qiita icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://qiita.com/y_a_m_a" target="_blank">y_a_m_a</a
              ><br /><br />
              <q-avatar size="30px">
                <img
                  src="~assets/hatenablog-logo.png"
                  alt="hatena icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://y-a-m-a-y-a.hatenablog.com/" target="_blank"
                >yamaのメタノート</a
              ><br /><br />
              <q-avatar square size="30px">
                <img
                  src="https://d1eu30co0ohy4w.cloudfront.net/assets/mark-f4be6df1e05965cac9f98e664a6c35f5ffdd0207385d07464a9214d6cdf76082.svg"
                  alt="speakerdeck icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://speakerdeck.com/kurikinton105" target="_blank">
                kurikinton105</a
              ><br /><br />
              <q-avatar square size="30px">
                <img
                  src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png"
                  alt="linkedin icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a
                href="https://www.linkedin.com/in/yamada-kenta5/"
                target="_blank"
              >
                yamada-kenta5</a
              ><br /><br />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { loadDefaultJapaneseParser } from 'budoux';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    const parser = loadDefaultJapaneseParser(); // budoux
    return {
      parser
    };
  },
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? 'dense'
        : this.$q.screen.lt.md
        ? 'comfortable'
        : 'loose';
    }
  }
});
</script>

<style lang="sass">
.TitlePhone
  font-size:20px
.Title
  margin: 16px
  font-size:10px
@media (min-width: 300px)
.Title
  font-size: calc(1px + ((1vw - 6.4px)*3.571))
@media (min-width: 1200px)
.Title
  font-size: 60px
</style>
