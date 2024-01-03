<meta http-equiv="refresh" content="0;" URL="http://www.example.com/" />
<template>
  <q-page-container>
    <div style="text-align: center">
      <h4>アクセスありがとうございます。</h4>
      <div v-if="linkURL == '' && isError == false">
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
        <a :href="linkURL">{{ linkURL }}</a>
        <div class="row justify-center q-gutter-sm" style="padding:2%">
          <q-btn
            color="primary"
            label="リロード"
            onclick="location.reload();"
          />
          <a :href="this.linkURL" style="text-decoration:none;"
            ><q-btn color="primary" label="リンク先へ" :href="linkURL"
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

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { firebaseApp, auth } from 'src/boot/firebase';
import { getFirestore, doc, onSnapshot, updateDoc, getDoc } from 'firebase/firestore';

const linkURL = ref('');
const isError = ref(false);
const route = useRoute();

onMounted(async () => {
  const db = getFirestore(firebaseApp);

  try {
    const docRef = doc(db, 'Link', route.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.data() === undefined) {
      isError.value = true;
      return;
    }
    linkURL.value = docSnap.data().url;
    if (!isError.value) {
      console.log('=== ページを遷移 ===\n', linkURL.value);
      window.open(linkURL.value, '_self');
    }
  } catch (error) {
    console.log(error);
    isError.value = true;
  }
});
</script>
