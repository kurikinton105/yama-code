<template>
  <q-page class="flex flex-center">
    <div v-if="!isPhone">
      <div class="Title">
        <vue-typer
          :text="['Now Loading. . .', 'Welcome to yama-code!!!!']"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="80"
          :type-delay="100"
          :pre-erase-delay="2000"
          :erase-delay="50"

          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="smooth"
        ></vue-typer>
      </div>
    </div>
  </q-page>
</template>

<script>
import { VueTyper } from 'vue-typer'
import { ref, defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: { VueTyper },
  props: {},
  setup () {
    const isPhone = ref(false)
    const width = ref(window.innerWidth)
    if (width.value <= 400) {
      isPhone.value = true
    } else {
      isPhone.value = false
    }
    return { isPhone }
  }
})
</script>

<style lang="sass">
.TitlePhone
  font-size:20px
.Title
  margin: 16px
  font-size:10px
@media (min-width: 300px)
.Title
  font-size: calc(1px + ((1vw - 6.4px)*3.571))
@media (min-width: 1200px)
.Title
  font-size: 60px
</style>
