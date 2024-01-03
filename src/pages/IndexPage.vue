<template>
  <q-page-container>
    <InfoPage />
    <hr />
    <ActivityPage /><hr />
    <ArticlePage />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn
        fab
        icon="keyboard_arrow_up"
        color="accent"
        aria-label="arrow_up"
      />
    </q-page-scroller>
  </q-page-container>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import InfoPage from 'src/components/pages/InfoPage.vue';
import ActivityPage from 'src/components/pages/Activity.vue';
import ArticlePage from 'src/components/pages/Articles.vue';

const $q = useQuasar();

const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose';
});
</script>
