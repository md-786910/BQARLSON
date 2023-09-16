<template>
  <div class="card-view">
    <LottieAnimation v-if="data.animation" :animationData="data.animation"/>
      <img v-else-if="data.img" :src="data.img" :alt="data.title || data.subTitle">
    <h2 v-if="data.title">{{ data.title }}</h2>
    <h3 v-if="data.subTitle">{{ data.subTitle }}</h3>
    <p v-if="data.description">{{ data.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import LottieAnimation from './LottieAnimation.vue'

defineProps({
  data: Object
})
</script>

<style scoped>
.card-view {
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: linear-gradient(180deg, #FFFFFF 0%, #e0f1f9 100%);
  padding: 20px;
  border: 1px solid #e0f1f944;
  box-shadow: -2px 2px 0px 2px #e0f1f944;
  border-radius: 10px;
  min-height: 300px;
  transition: all 0.5s;
}
.card-view:hover {
  scale: 1.05;
}
.card-view img {
  border: 1px solid #00000030;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}
p {
  color: #00000099;
}
</style>