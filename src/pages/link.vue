<meta http-equiv="refresh" content="0;" URL="http://www.example.com/" />
<template>
  <q-page-container>
    <div style="text-align: center">
      <h4>アクセスありがとうございます。</h4>
      <div v-if="this.linkURL.url == '' && isError == false">
        リンクを取得中です。遷移しない場合は、リンクを確認しリロードしてください。<br />
        <q-circular-progress
          indeterminate
          size="60px"
          color="primary"
          class="q-ma-md"
        /><br />
        Now Loading...
      </div>
      <div v-else-if="isError == true">
        エラーが発生しました。リンクを確認しリロードしてください。<br />
        <div class="row justify-center q-gutter-sm" style="padding:2%">
          <q-btn
            color="primary"
            label="リロード"
            onclick="location.reload();"
          />
          <q-btn color="primary" label="ホーム画面" to="/" />
        </div>
      </div>
      <div v-else>
        以下のリンクに遷移します。<br />
        <a :href="this.linkURL.url">{{ this.linkURL.url }}</a>
        <div class="row justify-center q-gutter-sm" style="padding:2%">
          <q-btn
            color="primary"
            label="リロード"
            onclick="location.reload();"
          />
          <a :href="this.linkURL.url" style="text-decoration:none;"
            ><q-btn color="primary" label="リンク先へ" href="this.linkURL.url"
          /></a>
        </div>
      </div>
    </div>
  </q-page-container>
</template>
<style>
.a:link {
  color: #ffffff;
}
.a:visited {
  color: #ffffff;
}
.a:hover {
  color: #ffffff;
}
</style>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
import firebase from "firebase";
import "firebase/firebase-auth";
import firebaseConf from "./firebase.conf";
import Firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "PageIndex",
  data() {
    return {
      linkURL: { url: "" },
      isError: false
    };
  },
  async mounted() {
    const firebaseApp = Firebase.initializeApp(firebaseConf);
    console.log("created");
    const db = firebase.firestore();
    const a = await db
      .collection("Link")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        if (doc.data() == undefined) {
          this.isError = true;
          return;
        }
        this.linkURL = doc.data();
      })
      .catch(error => {
        console.log(error);
      });
    if (this.isError == false) {
      await this.linkToOtherWindow(this.linkURL.url);
    }
  },
  methods: {
    linkToOtherWindow(url) {
      window.open(url, "_self");
    }
  },
  components: {}
};
</script>
