<template>
  <header class="header">
    <div class="header__container">
      <h1 class="logo">e-Website Provider</h1>
      <nav class="nav">
        <ul @click="onTabClick">
          <li :class="currentRoute === 'home' ? 'active-tab' : ''">Home</li>
          <li :class="currentRoute === 'about' ? 'active-tab' : ''">About Us</li>
          <li :class="currentRoute === 'service' ? 'active-tab' : ''">Services</li>
          <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
          <li :class="currentRoute === 'contact' ? 'active-tab' : ''">Contact Us</li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="layout-container">
    <router-view v-slot="{ Component }">
        <Transition name="slide-left">
          <component :is="Component"></component>
        </Transition>
    </router-view>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = ref('')
function onTabClick(e) {
  const route = e.target.innerText.toLowerCase()
  if (route.includes('about')) {
  router.push('/about')
  currentRoute.value = 'about'
  }
  else if (route.includes('work')) {
  router.push('/work')
  currentRoute.value = 'work'
  }
  else if (route.includes('service')) {
  router.push('/service')
  currentRoute.value = 'service'
  }
  else if (route.includes('contact')) {
  router.push('/contact')
  currentRoute.value = 'contact'
  }
  else { 
    router.push('/home') 
  currentRoute.value = 'home'
  }
}
</script>

<style scoped>
.active-tab {
  color: #000;
  background: #fff;
}
header.header {
  height: 40px;
  width: 100%;
  background: #2C98F0;
  color: #fff;
}
.header__container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav.nav ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  cursor: pointer;
}
 li {
  padding: 10px;
  font-weight: 700;
 }
main.layout-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden auto;
 }
</style>

<!-- defaults for website -->
<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  position: relative;
}
 body {
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  height: 100vh;
  width: 100vw;
  background: #fff;
 }
 #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
 }
 .slide-left-enter-active,
.slide-left-leave-active {
  transition: all 1s ease-in-out;
  position: absolute;
}
.slide-left-enter-to {
  right: 0%;
}
.slide-left-enter-from {
  right: -100%;
}
.slide-left-leave-to {
  left: -100%;
}
.slide-left-leave-from {
  left: 0;
}
</style>