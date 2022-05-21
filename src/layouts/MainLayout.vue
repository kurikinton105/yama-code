<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <div class="bg-cyan text-white">
        <q-toolbar>
          <q-toolbar-title>
            yama-code
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <Loading /><hr />
      <router-view />
    </q-page-container>
    <!-- copyright -->
    <div class="copyright">
      <a>Copyright yama 2020 - {{ year }}.</a>
    </div>
  </q-layout>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
.copyright
  text-align: center
  padding : 20px
</style>

<script>
import Loading from 'src/components/Loading'

export default {
  name: 'MainLayout',
  components: {
    Loading
  },
  created () {
    const d = new Date()
    this.year = d.getFullYear()
  },
  data () {
    return {
      year: ''
    }
  }
}
</script>
