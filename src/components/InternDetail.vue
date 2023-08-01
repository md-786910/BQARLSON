<template>
  <div v-loading="isLoading">
    <div v-for="(intern ,key) in internDetail" :key="key" class="grid grid-cols-3 py-2">
    <p class="text-left">{{ key.toUpperCase() }}</p>
    <span>:</span>
    <h3 class="text-left">{{ intern }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import {useRoute} from 'vue-router'

const internDetail = ref({})
const isLoading = ref(true)
const route = useRoute()
watch(route, getInternDetail, { immediate :true, deep: true })

async function getInternDetail() {
  isLoading.value = true
    try {
      const response = await fetch("http://3.16.26.164:9001/api/internship/intern-details/registration-no/" + route.params.internId);
      const data = await response.json();
      internDetail.value = data
    } catch (e) {
      console.log(e);
      internDetail.value = {}
    }
  isLoading.value = false
}

</script>

<style scoped>

</style>