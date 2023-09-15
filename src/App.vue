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
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdKM97gTGKPqXifyJfIuNtztpnx6El2uqZtmCfBEBqC3OVsaw/viewform"
    target="_blank"
    rel="noopener noreferrer"
    class="button-link"
    >Apply for Internship</a
  >
</template>

<script setup>
import PageHeader from "./components/PageHead.vue";
import FooterPage from "./components/FooterLayout.vue";
</script>
<style scoped>
.button-link {
  border: 1px solid black;
  padding: 8px;
  border-radius: 8px;
  background: #ffff00dd;
  color: #000;
  position: fixed;
  bottom: 36px;
  left: 24px;
  font-size: 1.2rem;
}
</style>
