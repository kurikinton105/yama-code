<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <div class="bg-cyan text-white">
        <q-toolbar>
          <q-btn flat no-caps no-wrap to=/>
            <q-toolbar-title>
              yama-code
            </q-toolbar-title>
          </q-btn>
        </q-toolbar>
        </div>
    </q-header>
    <!--
    <q-drawer
      v-model="leftDrawerState"
      show-if-above
      bordered
      content-class="doc-left-drawer"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >

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
    title: 'Home',
    icon: 'code',
    link: '/'
  },
  {
    title: 'Research',
    icon: 'school',
    link: '/research'
  }
]
**/
import { VueTyper } from 'vue-typer'
import { ref } from '@vue/composition-api'

export default {
  name: 'MainLayout',
  components: {
    VueTyper//,
    // EssentialLink
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
  },

  data () {
    return {
      leftDrawerOpen: true,
      // essentialLinks: linksData,
      leftDrawerState: true
    }
  }
}
</script>
