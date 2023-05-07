<template>
  <div class="home-page">
    <!-- <img src="logo-home.png" alt="logo" class="logo-home"> -->
    <div class="home-container">
      <div>
      <h1>Welcome to e-website Provider</h1>
      <h2>First step towards taking your business online</h2>
      <div class="word-animation"><h3>Our team expert in</h3> <h3>{{ showText }}</h3><h3 class="blink">|</h3></div>
      </div>
      <img src="earth.png" alt="logo" class="logo-earth">
    </div>
    <AboutPage/>
    <ServicePage/>
    <WorkPage/>
    <ContactPage/>
  </div>
</template>

<script setup>
import ServicePage from './ServicePage.vue';
import AboutPage from './AboutPage.vue';
import WorkPage from './WorkPage.vue';
import ContactPage from './ContactPage.vue';
import { computed, ref } from 'vue';

const text = ['eCommerce','Website Development','UI/UX Design','Wordpress Development']

const aciveIndex = ref(0)
setInterval(()=>{
  aciveIndex.value++
  if (text.length === aciveIndex.value) aciveIndex.value = 0
},2000)
const showText = computed(() => {
  return text[aciveIndex.value]
})
</script>

<style scoped>
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-container {
  background-image: linear-gradient(to right,#30304A,#1F3F65);
  min-height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  color: #fff;
}

h1 {
  font-size: 2rem;
  padding: 10px 0px;
}
h2 {
  font-size: 1.5rem;
  padding: 10px 0px;
}
h3 {
  font-size: 2rem;
  padding: 10px 10px;
}
.word-animation {
  display: block;
  text-align: center;
}
@media screen and (min-width: 1000px){
.word-animation {
  display: flex;
}
.home-container {
  flex-direction: row;
}
h1 {
  font-size: 3rem
}
}

.blink {
  padding: 10px 0px;
  animation: blinker 0.7s infinite ease-in-out;
}

@keyframes blinker {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.logo-earth {
  height: 200px;
  translate: 25px 0px;
  scale: 1.5;
  margin: 0px 0px 30px 30px;
}
</style>