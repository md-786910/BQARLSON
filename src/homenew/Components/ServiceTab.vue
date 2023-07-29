<template>
  <div>
    <BannerFirst
      v-if="service?.heading1 || service?.description1"
      :heading="service?.heading1"
      :description="service?.description1"
      :source="service?.source1" />
    <BannerSecond
      v-if="service?.heading2 || service?.description2"
      :heading="service?.heading2"
      :description="service?.description2" />
    <MultiCards v-if="service?.cards" :data="service?.cards" />
    <WhyDmkConst />
  </div>
</template>
<script setup>
import BannerFirst from "./BannerFirst.vue";
import BannerSecond from "./BannerSecond.vue";
import MultiCards from "./MultiCards.vue";
import WhyDmkConst from "./WhyDmkConst.vue";
import serviceData from "./List";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
const service = ref();
const route = useRoute();
watch(
  route,
  () => {
    service.value = serviceData?.[route.params.page];
  },
  { immediate: true }
);
</script>
