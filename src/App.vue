<template>
  <PageHeader />
  <main class="flex justify-center">
    <router-view v-slot="{ Component }">
      <Transition name="slide-left">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </main>
  <FooterPage class="bg-[#323232] p-4" />
</template>

<script setup>
import PageHeader from "./components/PageHead.vue";
import FooterPage from "./components/FooterLayout.vue";
</script>
