<template>
  <q-page class="padding q-px-lg q-pb-md" style = "padding:1%">
    <q-timeline :layout="layout" color="secondary">
        <q-timeline-entry heading>
        Activity Record
        </q-timeline-entry>
        <q-timeline-entry
            v-for="Activity in Activities.data"
            :key="Activity"
            v-bind:title="Activity.name"
            v-bind:subtitle="Activity.date_info"
            v-bind:side="Activity.side"
            v-bind:icon="Activity.icon"
        >
        <p v-html="parser.translateHTMLString(Activity.infomation)"></p>
        </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
import axios from 'axios'
import { loadDefaultJapaneseParser } from 'budoux'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PageIndex',
  data () {
    const parser = loadDefaultJapaneseParser() // budoux
    return {
      parser,
      Activities: 'non'
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
      .get('https://api.sssapi.app/Dg3gg3OE7uDaEbBzq2DPb')
      .then(response => (this.Activities = response))
  }
})
</script>
