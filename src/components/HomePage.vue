<template>
  <div class="home-page">
    <ServicePage/>
    <AboutPage/>
    <WorkPage/>
    <ContactPage/>
  </div>
</template>

<script setup>
import ServicePage from './ServicePage.vue';
import AboutPage from './AboutPage.vue';
import WorkPage from './WorkPage.vue';
import ContactPage from './ContactPage.vue';
</script>

<style scoped>
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>