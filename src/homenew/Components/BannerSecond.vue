<template>
  <div class="w-auto md:w-full xl:w-[1200px] m-auto my-10">
    <div class="flex flex-col md:flex-row items-start justify-between">
      <div
        class="py-5 xl:py-10 text-[28px] md:text-[30px] xl:text-[30px] font-bold md:w-[43%] border-b-2 md:border-b-0 border-[red]">
        {{ heading }}
      </div>

      <div
        class="md:w-[55%] lg:w-[60%] py-5 md:pl-10 md:border-l-2 border-[red] leading-7 xl:leading-8">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  heading: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>