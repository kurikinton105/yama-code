import { reactive } from 'vue';
import { watch } from 'vue';

// グローバルな状態を定義
export const globalStore = reactive({
  sampleVal: '',
});
// グローバルストアの変更を監視してセッションストレージに保存
watch(
  () => globalStore.sampleVal,
  (newVal) => {
    sessionStorage.setItem('globalStore', JSON.stringify(globalStore));
  },
  { deep: true } // ネストされたプロパティも監視する
);
