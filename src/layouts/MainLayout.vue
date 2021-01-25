<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <div class="bg-cyan text-white">
        <q-toolbar>
          <q-toolbar-title>
            yama-code
          </q-toolbar-title>
          <div></div>
        </q-toolbar>
        </div>
    </q-header>
    <!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    -->

    <q-page-container>
      <q-page class="flex flex-center">
    <!--<img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >--><!--<q-circular-progress
      indeterminate
      size="50px"
      color="light-blue"
      class="q-ma-md"
    />-->
    <div v-if="!isPhone">
    <div class="Title">
      <vue-typer
        :text='["Now Loading. . .","Welcome to yama-code!!!!"]'
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
      ></vue-typer>
      </div>
    </div>
    <!--
    <div v-if="isPhone">
      <h2>
      <vue-typer
        :text='["Now Loading. . .","Welcome to yama-code!!!!"]'
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
      ></vue-typer>
      </h2>
    </div>-->
    </q-page>
    <hr>
      <router-view />
    </q-page-container>
    <div class="inner">
        <br>
        <a>Copyright yama 2020-2021.</a>
        <br><br>
      </div>
  </q-layout>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
.inner
  text-align: center
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

<script>
/**
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]**/
import { VueTyper } from 'vue-typer'
import { ref } from '@vue/composition-api'
export default {
  name: 'MainLayout',
  components: {
    VueTyper
  },
  setup () {
    const isPhone = ref(false)
    const width = ref(window.innerWidth)
    if (width.value <= 400) {
      isPhone.value = true
    } else {
      isPhone.value = false
    }
    console.log(isPhone)
    return { isPhone }
  }
  /**
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }**/
}
</script>
