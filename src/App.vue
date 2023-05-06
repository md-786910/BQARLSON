<template>
  <PageHeader />
  <main class="layout-container">
    <router-view v-slot="{ Component }">
        <Transition name="slide-left">
          <component :is="Component"></component>
        </Transition>
    </router-view>
  </main>
</template>

<script setup>
import PageHeader from './components/PageHead.vue'
</script>

<style scoped>
main.layout-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden auto;
 }
</style>