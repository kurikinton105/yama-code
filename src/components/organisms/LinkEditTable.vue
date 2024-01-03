<template>
  <q-page padding>

    <q-btn color="primary" label="Create New Link" @click="createNewLink"></q-btn>
    <!-- 新規作成ダイアログ -->
    <q-dialog v-model="createDialog">
      <q-card style="width:85%;">
        <q-card-section>
          <div class="text-h6">Create New Link</div>
          <q-form @submit="createLink">
            <q-input v-model="newData.id" label="ID" />
            <q-input v-model="newData.url" label="URL" />
            <q-btn :loading="createLoading" label="Create" type="submit" color="primary" />
          </q-form>
          <div v-if="errorMessage" class="text-negative">{{ errorMessage }}</div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <hr/>

    <q-table
      title="Links"
      :rows="links"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[100]"
      style="width:100%;"
    >
      <template v-slot:body-cell-id="props">
        <q-td :props="props">
          <a :href="props.row.id_link" target="_blank">{{ props.row.id }}</a>
        </q-td>
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat color="primary" @click="editLink(props.row)">Edit</q-btn>
          <q-btn flat color="negative" @click="deleteLink(props.row.id)">Delete</q-btn>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="editDialog">
      <q-card style="width:85%;">
        <q-card-section>
          <div class="text-h6">Edit Link</div>
          <q-form @submit="updateLink">
            <a :href="editData.id_link" target="_blank">{{ editData.id }}</a>
            <q-input v-model="editData.url" label="URL" />
            <q-btn label="Update" type="submit" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getFirestore, onSnapshot, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore';
import { firebaseApp, auth } from 'src/boot/firebase';

const db = getFirestore(firebaseApp);

const links = ref([]);
const editDialog = ref(false);
const createDialog = ref(false);
const editData = ref({});
const newData = ref({});
const createLoading = ref(false);
const errorMessage = ref('');

const columns = [
  { name: 'title', required: true, label: 'Title', align: 'left', field: row => row.id, sortable: true },
  { name: 'url', required: true, label: 'URL', align: 'left', field: row => row.url, sortable: true },
  { name: 'actions', label: 'Actions', align: 'right' },
];

onSnapshot(collection(db, 'Link'), (querySnapshot) => {
  links.value = querySnapshot.docs.map(doc => ({ id_link: "https://yama-code.dev/"+doc.id ,id: doc.id, ...doc.data() }));
});

const editLink = (link) => {
  editData.value = {...link}; // 編集するリンクのデータをコピー
  editDialog.value = true;    // ダイアログを開く
};

const updateLink = async () => {
  await updateDoc(doc(db, 'Link', editData.value.id), editData.value);
  editDialog.value = false;   // ダイアログを閉じる
};

const deleteLink = async (id) => {
  await deleteDoc(doc(db, 'Link', id));
};

const createNewLink = () => {
  newData.value = {}; // 新規データの初期化
  createDialog.value = true; // 新規作成ダイアログを開く
};

const createLink = async () => {
  createLoading.value = true;
  errorMessage.value = '';
  try {
    if (newData.value.id && newData.value.url) {
      await setDoc(doc(db, 'Link', newData.value.id), { url: newData.value.url });
      createDialog.value = false;
    } else {
      throw new Error('ID and URL are required');
    }
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    createLoading.value = false;
  }
};

</script>
