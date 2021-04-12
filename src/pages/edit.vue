<template>
  <q-page-container>
    <q-page>
      <div class="text-center">
      <div v-if="authenticatedUser" class="signin">
      <h2>Logout</h2>
        <q-btn  color="primary" style="font-weight: bold;" @click="logout">
        Logout</q-btn>
      <br><br>
      <hr>
      <div class="q-pa-md q-gutter-sm">
      <h5>更新したい文字を入力して送信してください</h5>

      <div style="max-width: 300px">
        <q-select v-model="sheets" :options="options" label="シートの選択" />
      </div>
      <div v-if="sheets === 'Activity'">
        <q-input v-model="information" label="information" />
        <br>
        <li>HTML Text</li>
        <q-editor
            v-model="editor"
            min-height="5rem"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify']
                }
              ],
              ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: [
                    'p',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'code'
                  ]
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7'
                  ]
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana'
                  ]
                },
                'removeFormat'
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource']
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana'
            }"
          /><br>
          <q-card flat bordered>
            <q-card-section>
              <pre style="white-space: pre-line">{{ editor }}</pre>
            </q-card-section>
          </q-card><br>

          <q-card flat bordered>
            <q-card-section v-html="editor" />
          </q-card>
          <br>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-date name="wedding" v-model="calenderdate" />
          </q-form>
        </div>

        <div v-if="sheets === 'Articles'">
          <q-input v-model="information" label="information" />
        <br>
        </div>

        <div v-if="sheets === 'Skills'">
          <q-input v-model="information" label="Skills" />
        <br>
        </div>
        <br>
        <q-btn  color="primary" style="font-weight: bold;" @click="submit">
        SUBMIT</q-btn>
        <q-card flat bordered class="q-mt-md bg-grey-2">
          <q-card-section class="items-center">
            {{ sheetsJson }}
          </q-card-section>
        </q-card>
      </div>

    </div>
    <div v-else >
      <h2>Sign in</h2>
      <a>編集ページに移動します</a><br><br>
      <q-btn  color="primary" style="font-weight: bold;" @click="signin">
      認証してSignin</q-btn>
    </div>
    <br>
    </div>
    </q-page>
    <q-page>

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
import firebase from 'firebase'
import 'firebase/firebase-auth'
import firebaseConf from './firebase.conf'
import Firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'PageIndex',
  data () {
    return {
      allDataID:"aa",
      Activity:"non",
      Artcles:"non",
      editor: '<b>ここ</b>にHTMLを入力',
      authenticatedUser: false,
      sheets: 'Activity',
      options: [
        'Activity', 'Articles', 'Skills'
      ],
      sheetsJson: null,
      calenderdate: '',
      submitResult: []
    }
  },
  methods: {
    async signin () {
      console.log('認証を行います')
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider)
        .then(
          result => {
            console.log(result)
            console.log(result.user.uid )
            if (result.user.uid == firebaseConf.userid){
              this.authenticatedUser = true
              console.log('ログインの成功')
            }else{
              this.authenticatedUser = false
              console.log('ユーザー認証の失敗')
            }
          })
    },
    logout () {
      firebase.auth().signOut()
      this.authenticatedUser = false
    },
    async submit () {
      // 日付の取得
      window.onload = function () {
        var today = new Date();
        var todaystr = today.getFullYear() + '年' + today.getMonth() + '月' + today.getDate() + '日';
        console.log(todaystr)
      }
      this.sheetsJson = {
        'sheets':this.sheets,
        'auth': firebaseConf.userid,
        'info':{
          'date':this.calenderdate,
          'information':this.information,
          'html':this.editor,
          'icon':'chart',
          'side':'right'
        }
      }
      // APIを叩く
      /*
      await axios.get('https://us-central1-cos5year.cloudfunctions.net/SheetsAPI?sheet_id=1FeRqAE3YLWKfvHomN23ANyZONzT0hKBtAFp08H-c9gI')
        .then(response => (this.sheetsJson = response))
        console.log(response)
      */
    },
    onSubmit (evt) { // calender
      const formData = new FormData(evt.target)
      const submitResult = []
      for (const [ name, value ] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }
      this.submitResult = submitResult
    }
  },
  mounted () {
    const firebaseApp = Firebase.initializeApp(firebaseConf)
    const firestore = firebaseApp.firestore()
    firestore.settings({ timestampsInSnapshots: true })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(this.userid)
        console.log('login')
        this.authenticatedUser = true

      } else {
        console.log('logout')
        this.authenticatedUser = false
      }
    })
  }
}
</script>
