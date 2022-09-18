<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- copyright -->
    <div class="copyright">
      <p>Copyright yama 2020 - {{ year }}.</p>
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
export default {
  name: 'LinkLayout',
  components: {
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
