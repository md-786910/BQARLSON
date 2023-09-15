<template>
  <div>
    <div
      v-for="(intern, key) in internDetail"
      :key="key"
      class="grid grid-cols-3 py-2">
      <p class="text-left">{{ key.toUpperCase() }}</p>
      <span>:</span>
      <h3 class="text-left">{{ intern }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import internData from "./intern";

const internDetail = ref({});
const route = useRoute();
watch(route, getInternDetail, { immediate: true, deep: true });

function getInternDetail() {
  internDetail.value =
    internData.find((ele) => ele.regNo == route.params.internId) || {};
}
</script>

<style scoped></style>
