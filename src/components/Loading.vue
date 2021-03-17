<template>
    <section id="Loading">
        <pageTitle title="Loading" />

        <q-page class="flex flex-center">
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
    </section>
</template>

<script>

import { VueTyper } from 'vue-typer'
export default {
  name: 'PageIndex',
  data () {
    return {
      allDataID: 'non',
      Activity: 'non',
      Artcles: 'non',
      Skills: 'non'
    }
  },
  components: {
    VueTyper
  }
}

</script>
