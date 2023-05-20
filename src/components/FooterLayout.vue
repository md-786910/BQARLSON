<template>
  <footer class="grid-layout">
    <div class="footer-block">
      <h1>Follow Us</h1>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/company/e-websiteprovider/" target="blank"><LottieAnimation class="lottie" animationData="https://assets10.lottiefiles.com/packages/lf20_ywt06tjx.json"/></a>
        <a href="https://www.facebook.com/ewebsiteprovider.official/" target="blank"><LottieAnimation class="lottie" animationData="https://assets8.lottiefiles.com/packages/lf20_ivjtlkmt.json"/></a>
        <a href="https://twitter.com/ewprovider/" target="blank"><LottieAnimation class="lottie" animationData="https://assets7.lottiefiles.com/private_files/lf30_bbx4oauz.json"/></a>
        <a href="https://www.instagram.com/ewebsiteprovider/" target="blank"><LottieAnimation class="lottie" animationData="https://assets6.lottiefiles.com/packages/lf20_wN134d.json"/></a>
      </div>
      <p class="cp-text">© Copyright 2022 e-Website Provider. All rights reserved.</p>
    </div>
    <div class="footer-block">
      <h1>Quick Links</h1>
      <div class="dropdown-content">
        <ul @click="onTabClick">
          <li :class="currentRoute === 'home' ? 'active-tab' : ''">HOME</li>
          <li :class="currentRoute === 'about' ? 'active-tab' : ''">About</li>
          <li :class="currentRoute === 'service' ? 'active-tab' : ''">Services</li>
          <li :class="currentRoute === 'work' ? 'active-tab' : ''">Work</li>
          <li :class="currentRoute === 'contact' ? 'active-tab' : ''">Contact</li>
        </ul>
      </div>
    </div>
    <div class="footer-block">
      <h1>Get in touch</h1>
      <p><img src="location.svg" alt="location"> Head Office:-Floor No-1 ,Block Sector-Kharadi road,Near-Reliance mall kharadi Pune,Maharashtra, Pin-411014</p>
      <!-- <p><img src="location.svg" alt="location"> Branch Office:-3A-Sri Durga Enclave, Plot no 39B, 2nd Street, River View Residency, Karapakkam, Chennai, Tamil Nadu 600097</p>
      <p><img src="location.svg" alt="location"> Branch Office:-Floor no 2, Vidhyashri Building, Chowdeshwari Layout, Marathalli, Banglore, 560037</p> -->
      <p><img src="mobile.svg" alt="location"> +1 9296470461 / +91 8873732631 / +91 8800604320 / +91 7324865944</p>
      <p><img src="mail.svg" alt="location"> ceo@ewebsiteprovider.com</p>
      <p><img src="mail.svg" alt="location"> support@ewebsiteprovider.com</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import LottieAnimation from './LottieAnimation.vue'

const router = useRouter()
const currentRoute = computed(() => router?.currentRoute.value.name || 'home')
function onTabClick(e) {
  const route = e.target.innerText.toLowerCase()
  if (route.includes('about')) {
  router.push('/about')
  }
  else if (route.includes('work')) {
  router.push('/work')
  }
  else if (route.includes('service')) {
  router.push('/service')
  }
  else if (route.includes('contact')) {
  router.push('/contact')
  }
  else { 
    router.push('/home') 
  }
}
</script>

<style scoped>
.cp-text { 
  color: #ffffff1a; 
  text-shadow: 0 1px #ffffff5a;
  padding: 10px 0;
}

.contact-icons{
  display: flex;
  padding: 10px 0;
}

.contact-icons a {
  margin-right: 20px;
}

a .lottie {
  width: 50px;
}

p {
  text-align: left;
}
ul {
  padding: 10px 0;
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
  text-align: center;
 }
 .active-tab {
  color: #1dee58;
}
</style>