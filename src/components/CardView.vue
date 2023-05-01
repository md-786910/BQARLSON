<template>
  <div class="card-view" :style="{height: height}">
    <img v-if="data.img" :src="data.img" :alt="data.title || data.subTitle">
    <h2 v-if="data.title">{{ data.title }}</h2>
    <h4 v-if="data.subTitle">{{ data.subTitle }}</h4>
    <p v-if="data.description">{{ data.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  data: Object,
  height: String
})
</script>

<style scoped>
.card-view {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #00000040;
  padding: 20px;
  border-radius: 10px;
  min-height: 300px;
}
.card-view img {
  border: 1px solid #00000030;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}
p {
  text-align: center;
  color: #4e4e4e;
}
</style>