<template>
  <q-page-container>
    <Info /><hr/>
    <Activity /><hr />
    <Article />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" aria-label="arrow_up"/>
    </q-page-scroller>
  </q-page-container>
</template>

<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script>
import Info from "src/components/Info.vue";
import Activity from "src/components/Activity.vue";
import Article from "src/components/Articles.vue";

export default {
  name: "PageIndex",
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  },
  components: {
    Info,Activity,Article
  }
};
</script>
