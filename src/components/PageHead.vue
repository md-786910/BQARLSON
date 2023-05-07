<template>
    <header class="header">
      <img class="logo" :class="currentRoute === 'home' ? 'active-tab' : ''" @click="onTabClick" src="logo-home.png" alt="EWP">
      <nav>
        <ul @click="onTabClick">
          <li :class="currentRoute === 'home' ? 'active-tab' : ''">HOME</li>
          <li :class="currentRoute === 'about' ? 'active-tab' : ''">About</li>
          <li :class="currentRoute === 'service' ? 'active-tab' : ''">Services</li>
          <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
          <li :class="currentRoute === 'contact' ? 'active-tab' : ''">Contact</li>
        </ul>
      </nav>
      <div class="dropdown">
      <button class="dropdown-btn" @click="showDropdown = !showDropdown">Menu</button>
      <div class="dropdown-content" v-if="showDropdown">
        <ul @click="onTabClick">
          <li :class="currentRoute === 'home' ? 'active-tab' : ''">HOME</li>
          <li :class="currentRoute === 'about' ? 'active-tab' : ''">About</li>
          <li :class="currentRoute === 'service' ? 'active-tab' : ''">Services</li>
          <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
          <li :class="currentRoute === 'contact' ? 'active-tab' : ''">Contact</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showDropdown = ref(false)
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
  showDropdown.value = !showDropdown.value
}
</script>

<style scoped>
.active-tab {
  color: #fff;
  background: #093145;
}
header.header {
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  padding-inline: 20px;
  color: #fff;
}

.dropdown-content {
  position: absolute;
  right: 0;
  width: 150px;
  background: #3c6478;
}

nav {
  display: none;
}

ul {
  height: 100%;
  list-style-type: none;
  cursor: pointer;
  z-index: 10;
  background: inherit;
}
 li {
  height: 100%;
  padding: 10px 25px;
  font-weight: 400;
 }
 img {
  height: 100%;
  padding: 5px;
  cursor: pointer;
 }

 @media only screen and (min-width: 800px) {
  header.header {
  padding-inline: 10%;
  justify-content: center;
}
nav {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  display: flex;
  align-items: center;
}
.dropdown {
  display: none;
}
}
.dropdown-btn {
  padding: 12px;
  color: #FFF;
  background: inherit;
}
</style>