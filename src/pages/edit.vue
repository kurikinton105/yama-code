<template>
  <q-page-container>
    <q-page>
      <div class="q-pa-md q-gutter-sm">
        <q-editor v-model="editor" min-height="5rem" />

        <q-card flat bordered>
          <q-card-section>
            <pre style="white-space: pre-line">{{ editor }}</pre>
          </q-card-section>
        </q-card>

        <q-card flat bordered>
          <q-card-section v-html="editor" />
        </q-card>
      </div>
    </q-page>

  </q-page-container>

</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
.inner
  text-align: center
</style>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
import axios from 'axios';
export default {
  name: 'PageIndex',
  data () {
    return {
      allDataID:"aa",
      Activity:"non",
      Artcles:"non",
      editor: '<b>ここ</b>にHTMLを入力'

    }
  }
}

</script>
