<template>
  <div class="home-page">
    <!-- <img src="logo-home.png" alt="logo" class="logo-home"> -->
    <div class="home-container">
      <div class="home-content">
      <h1>Welcome to e-website Provider</h1>
      <h2>First step towards taking your business online</h2>
      <div class="word-animation"><h3>Our team expert in</h3> <h3>{{ showText }}</h3><h3 class="blink">|</h3></div>
      </div>
      <div class="earth-logo">
        <LottieAnimation animationData="https://assets3.lottiefiles.com/packages/lf20_SkhtL8.json"/>
      </div>
    </div>
      <h1>About Us</h1>
      <div class="content-block">
        <div class="about-us-block w-50">
        <p>
          E-Website Provider (EWP) is a professional website design and development company,that provides creative and modern websites according to the needs of clients. Our team of skilled designers and developers works closely with our clients to understand their unique business requirements and provide customized solutions that align with their goals.
        </p>
        <button @click="router.push('/about')">Know More</button>
        </div>
        <LottieAnimation class="w-50" animationData="https://assets7.lottiefiles.com/packages/lf20_450hEfBjlr.json"/>
      </div>
    <ServicePage/>
    <WorkPage/>
    <ContactPage/>
  </div>
</template>

<script setup>
import ServicePage from './ServicePage.vue'
import WorkPage from './WorkPage.vue'
import ContactPage from './ContactPage.vue'
import { computed, ref } from 'vue'
import LottieAnimation from './LottieAnimation.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  min-height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
}

.about-us-block {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.about-us-block button {
  border-radius: 20px;
  height: 50px;
  width: 200px;
  border: 2px solid #000;
  cursor: pointer;
  margin-top: 50px;
}
.about-us-block button:hover {
  background: #39cbfb ;
  color: #fff;

}
.earth-logo {
  position: relative;
  padding: 10%;
  scale: 1.6;
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
.home-content {
  z-index: 1;
}
.earth-logo {
  position: absolute;
  scale: 1;
  filter: blur(1px);
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
.content-block {
  margin: 20px;
}

@media only screen and (min-width: 1350px) { 
  .content-block {
    display: flex;
  }
 p {
    letter-spacing: 4px;
    padding: 10px;
    line-height: 30px;
    font-size: 1rem;
  }
  .w-50 {
    width: 50%;
  }
}
</style>