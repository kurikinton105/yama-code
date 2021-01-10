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
    >--><q-circular-progress
      indeterminate
      size="50px"
      color="light-blue"
      class="q-ma-md"
    />
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
export default {
  name: 'MainLayout',
  components: {
    VueTyper
  }//,
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
