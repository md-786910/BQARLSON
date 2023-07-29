<template>
  <div>
    <div class="w-auto xl:w-[1200px] m-auto py-10">
      <div class="flex items-center justify-between">
        <div class="lg:w-[570px] xl:w-[650px]">
          <div
            class="py-3 lg:py-5 text-[28px] md:text-[30px] xl:text-[30px] font-bold">
            {{ heading }}
          </div>
          <div class="text-md md:text-xl md:leading-10 lg:leading-8">
            {{ description }}
          </div>
        </div>
        <div
          class="lg:w-[280px] xl:w-[370px] hidden lg:inline [clip-path:circle(50%)]">
          <img :src="source" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  heading: { type: String, default: "" },
  description: { type: String, default: "" },
  source: { type: String, default: "" },
});
</script>
