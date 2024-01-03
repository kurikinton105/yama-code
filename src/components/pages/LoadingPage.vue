<template>
  <q-page class="flex flex-center">
    <div v-if="!isPhone">
      <div class="Title">
        <div>{{ animatedText }}</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const animatedText = ref('');
const isPhone = ref(false);
const phrases = ['Now Loading. . .', 'Welcome to yama-code!!!!'];
let currentPhraseIndex = 0;
let charIndex = 0;
let timerId;

const typeText = () => {
  const currentPhrase = phrases[currentPhraseIndex];
  animatedText.value = currentPhrase.slice(0, charIndex);
  charIndex++;

  if (charIndex > currentPhrase.length) {
    charIndex = 0;

    // 最後のフレーズに達した場合、アニメーションを停止
    if (currentPhraseIndex === phrases.length - 1) {
      clearInterval(timerId);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(() => { timerId = setInterval(eraseText, 50); }, 2000);
      clearInterval(timerId);
    }
  }
};

const eraseText = () => {
  animatedText.value = animatedText.value.slice(0, -1);

  if (animatedText.value.length === 0) {
    clearInterval(timerId);
      setTimeout(() => { timerId = setInterval(typeText, 100); }, 80);
  }
};


onUnmounted(() => { clearInterval(timerId); });

onMounted(() => {
  const width = window.innerWidth;
  isPhone.value = width <= 400;
  timerId = setInterval(typeText, 100);
});
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
