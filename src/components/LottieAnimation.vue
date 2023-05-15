<template>
  <div ref="lottieContainer"></div>
</template>

<script setup>
import { ref, watchEffect, defineProps } from 'vue'
import lottie from 'lottie-web'

const lottieContainer = ref(null);
const props = defineProps({
  animationData : {type:String,default: Object}
})
watchEffect(async () => {
  if (props.animationData) {
    try {
      const response = await fetch(props.animationData);
      const animationData = await response.json();

      lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    } catch (error) {
      console.error('Error loading animation:', error);
    }
  }
});
</script>