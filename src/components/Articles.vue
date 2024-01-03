<template>
  <q-page class="padding inner" style="padding:5%">
    <div class="text-h3" style="padding:1%">
      Articles
    </div>
    <div class="text-weight-regular" style="padding:1%">
      Qiita、はてなブログなどから記事の一覧をまとめています。
    </div>

    <div class="row justify-center q-gutter-sm ">
      <div v-for="Article in Articles.data" :key="Article">
        <q-card class="my-card-artcle" flat bordered>
          <br />
          <q-item>
            <q-item-section avatar>
              <q-avatar size="30px">
                <img :src="Article.site" alt="" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                ><a v-bind:href="Article.link" target="_blank">{{
                  Article.name
                }}</a></q-item-label
              >
              <q-item-label caption>
                {{ Article.date }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <br />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import { loadDefaultJapaneseParser } from 'budoux'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data () {
    const parser = loadDefaultJapaneseParser() // budoux
    return {
      parser,
      Articles: 'non'
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm
        ? 'dense'
        : this.$q.screen.lt.md
          ? 'comfortable'
          : 'loose'
    }
  },
  components: {},
  mounted: function () {
    axios
      .get('https://api.sssapi.app/V-sFi3aRWS1Ykb1j3m2qO')
      .then(response => (this.Articles = response))
  }
})
</script>

<style lang="sass">
.my-card-artcle
  width: 100%
  min-width :400px
  max-width: 400px
  height:100px
.inner
  text-align: center
</style>
