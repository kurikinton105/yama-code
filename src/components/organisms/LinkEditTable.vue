<template>
  <q-page padding>
    <q-btn
      color="primary"
      label="Create New Link"
      @click="createNewLink"
    ></q-btn>
    <!-- 新規作成ダイアログ -->
    <q-dialog v-model="createDialog">
      <q-card style="width:85%;">
        <q-card-section>
          <div class="text-h6">Create New Link</div>
          <q-form @submit="createLink">
            <q-input v-model="newData.id" label="ID" />
            <q-input v-model="newData.url" label="URL" />
            <!-- 値を取得する -->

            <q-input v-model="newData.ogpUrl" label="OGP URL" />
            <q-input v-model="newData.title" label="Title" />
            <q-input v-model="newData.description" label="Description" />
            <q-btn
              :loading="createLoading"
              label="Create"
              type="submit"
              color="primary"
            />
          </q-form>
          <div v-if="errorMessage" class="text-negative">
            {{ errorMessage }}
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <hr />

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
          <q-btn flat color="negative" @click="deleteLink(props.row.id)"
            >Delete</q-btn
          >
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
            <q-input v-model="editData.ogpUrl" label="OGP URL" />
            <q-input v-model="editData.title" label="Title" />
            <q-input v-model="editData.description" label="Description" />
            <q-btn label="Update" type="submit" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  collection,
  getFirestore,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  setDoc
} from 'firebase/firestore';
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
  {
    name: 'ID',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    sortable: true
  },
  {
    name: 'url',
    required: true,
    label: 'URL',
    align: 'left',
    field: row => row.url,
    sortable: true,
  },
  {
    name: 'ogpUrl',
    label: 'OGP URL',
    align: 'left',
    field: row => row.ogpUrl,
    sortable: true,
  },
  {
    name: 'title',
    label: 'Title',
    align: 'left',
    field: row => row.title,
    sortable: true
  },
  {
    name: 'description',
    label: 'Description',
    align: 'left',
    field: row => row.description,
    sortable: true,

  },
  {
    name: 'title',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    sortable: true
  },
  { name: 'actions', label: 'Actions', align: 'right' }
];

onSnapshot(collection(db, 'Link'), querySnapshot => {
  links.value = querySnapshot.docs.map(doc => ({
    id_link: 'https://yama-code.dev/' + doc.id,
    id: doc.id,
    ...doc.data()
  }));
});

const editLink = link => {
  editData.value = { ...link }; // 編集するリンクのデータをコピー
  editDialog.value = true; // ダイアログを開く
};

const updateLink = async () => {
  if (editData.value.ogpUrl == undefined|| editData.value.title== undefined|| editData.value.description == undefined) {
    await updateDoc(doc(db, 'Link', editData.value.id), {
      url: editData.value.url,
    });
  }else{
    await updateDoc(doc(db, 'Link', editData.value.id), {
      url: editData.value.url,
      ogpUrl: editData.value.ogpUrl,
      title: editData.value.title,
      description: editData.value.description
    });
  }
  editDialog.value = false; // ダイアログを閉じる
};

const deleteLink = async id => {
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
      // ogpUrlとtitleとdescriptionがあるか確認
      if (newData.value.ogpUrl == undefined|| newData.value.title== undefined|| newData.value.description == undefined) {
        await setDoc(doc(db, 'Link', newData.value.id), {
          url: newData.value.url,
        });
      }else{
        await setDoc(doc(db, 'Link', newData.value.id), {
          url: newData.value.url,
          ogpUrl: newData.value.ogpUrl,
          title: newData.value.title,
          description: newData.value.description
        });
      }
      if (newData.value.ogpUrl)
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
