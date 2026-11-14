<template>
  <section class="padding" style="padding:1%">
    <div style="text-align: center">
      <h1 class="text-h3 q-ma-none" style="padding : 2%;">
        Who is yama?
      </h1>
      <q-img
        class="icon-image"
        src="https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg"
        style="height: 280px; max-width: 300px"
        alt="yama icon"
      ></q-img>
      <div class="text-h4" style="padding : 2%;">
        yama
      </div>
      <p class="text-subtitle1 q-px-md">
        ソフトウェアエンジニアとして、Web・AI・コミュニケーション領域のプロダクトを個人開発しています。
      </p>
    </div>
    <div
      class="layout-padding row justify-center background-whitesmoke items-center"
    >
      <div class="col-xs-10 col-sm-7 col-lg-5">
        <div
          class="layout-padding row justify-center background-whitesmoke items-center"
        >
          <q-card flat bordered style="min-width: 45vh;">
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
              <a href="https://github.com/kurikinton105" target="_blank" rel="me noopener"
                >kurikinton105</a
              ><br /><br />
              <q-avatar size="30px">
                <img
                  src="~assets/X_Logo.png"
                  alt="twitter icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://twitter.com/y_a_m_a_y_a" target="_blank" rel="me noopener"
                >@y_a_m_a_y_a</a
              ><br /><br />
              <q-avatar size="30px">
                <img
                  src="~assets/qiita-qiita-jobs-favicon.png"
                  alt="qiita icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://qiita.com/y_a_m_a" target="_blank" rel="me noopener">y_a_m_a</a
              ><br /><br />
              <q-avatar size="30px">
                <img
                  src="~assets/hatenablog-logo.png"
                  alt="hatena icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://y-a-m-a-y-a.hatenablog.com/" target="_blank" rel="me noopener"
                >yamaのメタノート</a
              ><br /><br />
              <q-avatar square size="30px">
                <img
                  src="https://d1eu30co0ohy4w.cloudfront.net/assets/mark-f4be6df1e05965cac9f98e664a6c35f5ffdd0207385d07464a9214d6cdf76082.svg"
                  alt="speakerdeck icon"
                /> </q-avatar
              >&nbsp;&nbsp;
              <a href="https://speakerdeck.com/kurikinton105" target="_blank" rel="me noopener">
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
                rel="me noopener"
              >
                yamada-kenta5</a
              ><br /><br />
            </q-card-section>
          </q-card>
        </div>

        <div class="layout-padding row justify-center background-whitesmoke items-center">
          <q-card flat bordered class="full-width">
            <q-card-section>
              <div class="text-h6">Products</div>
              <div class="text-caption text-grey-7">
                yamaが開発・運営しているプロダクト
              </div>
            </q-card-section>
            <q-separator inset />
            <q-list separator>
              <q-item clickable tag="a" href="https://wallet-de-meishi.netlify.app/" target="_blank" rel="noopener">
                <q-item-section>
                  <q-item-label>Wallet de 名刺</q-item-label>
                  <q-item-label caption>
                    Apple Walletに追加して持ち歩けるデジタル名刺。QRでプロフィールを共有できます。
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable tag="a" href="https://stamp-generator.yama-code.dev/slack" target="_blank" rel="noopener">
                <q-item-section>
                  <q-item-label>Stamp Generator</q-item-label>
                  <q-item-label caption>
                    Slack・Discord向けのカスタム絵文字／スタンプを作成できるサービスです。
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable tag="a" href="https://smoothie-slide.web.app/" target="_blank" rel="noopener">
                <q-item-section>
                  <q-item-label>Smoothie Slide</q-item-label>
                  <q-item-label caption>
                    複数人のオンラインプレゼンでスライドページを同期するWebアプリです。
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable tag="a" href="https://ulane.netlify.app/" target="_blank" rel="noopener">
                <q-item-section>
                  <q-item-label>ULane</q-item-label>
                  <q-item-label caption>
                    yamaが開発するWebプロダクトです。
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { loadDefaultJapaneseParser } from 'budoux';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    const parser = loadDefaultJapaneseParser();
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
