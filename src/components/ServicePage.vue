<template>
  <div class="page-container">
    <h1>OUR SERVICES</h1>
    <div class="grid-layout">
      <card-view v-for="data in cardData" :key="data.title" :data="data"/>
    </div>
    <div class="achievements">
      <div class="block" v-for="data in blockData" :key="data.name">
        <LottieAnimation style="height: 200px;" v-if="data.animation" :animationData="data.animation"/>
        <!-- <img class="block-icon" :src="data.icon"/> -->
        <h3>{{ data.value }}</h3>
        <p>{{ data.name }}</p>
      </div>
    </div>
    <div>
      <h1 class="heading">Your success is our focus</h1>
      <p>Work with our highly skilled team and get everything done faster. We’re using the latest technologies and advanced expertise on any project, from small business websites to complex web applications. You’ll have one of the best Indian teams of web developers ready to create solutions that help your business grow.</p>
    </div>
    <div class="achievements">
      <div class="block" v-for="data in category" :key="data.name">
        <LottieAnimation style="height: 200px;" v-if="data.animation" :animationData="data.animation"/>
        <h3>{{ data.value }}</h3>
        <p>{{ data.name }}</p>
      </div>
    </div>
    <div>
      <h1 class="heading">Dedicated development team</h1>
      <p>With our dedicated development teams, we can guarantee that each project gets the best skillset and the right level of attention. We’ll select the perfect team based on the technical & creative requirements. Also, we’ll consider the necessary amount of work and the deadline.</p>
    </div>
  </div>
</template>

<script setup>
import CardView from './CardView.vue'
import LottieAnimation from './LottieAnimation.vue'

const cardData = [
  {
    img: 'service/education-logo.jpg',
    animation: "https://assets2.lottiefiles.com/private_files/lf30_TBKozE.json",
    title: '',
    subTitle: 'Education Website',
    description: 'An Education Website is a platform for educational institutions to showcase their courses, faculty, and student activities.'
  },
  {
    img: 'service/business-logo.avif',
    animation: "https://assets6.lottiefiles.com/packages/lf20_gzx4caln.json",
    title: '',
    subTitle: 'Business Website',
    description: 'A Business Website is essential for any business looking to establish an online presence.'
  },
  {
    img: 'service/the-agency-logo.gif',
    animation: "https://assets7.lottiefiles.com/packages/lf20_dxtrw7q0.json",
    title: '',
    subTitle: 'Agency Website',
    description: "An Agency Website is a platform for advertising and marketing agencies to showcase their portfolio and services."
  },
  {
    img: 'service/ecommerce-logo.webp',
    animation: "https://assets1.lottiefiles.com/packages/lf20_rVEgYArLER.json",
    title: '',
    subTitle: 'E-commerce Website',
    description: "An E-commerce Website is an online store that allows businesses to sell their products online."
  },
  {
    img: 'service/hotel-logo.jpg',
    animation: "https://assets9.lottiefiles.com/packages/lf20_g1dkgxdv.json",
    title: '',
    subTitle: 'Hotel Website',
    description: "A Hotel Website is necessary to establish an online presence, showcase your hotel's brand and unique features."
  },
  {
    img: 'service/restaurant-logo.jpg',
    animation: "https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json",
    title: '',
    subTitle: 'Restaurant Website',
    description: "A Restaurant Website is necessary to establish an online presence, showcase your restaurant's brand and cuisine."
  },
  {
    img: 'service/medical-logo.jpg',
    animation: "https://assets4.lottiefiles.com/packages/lf20_0fhlytwe.json",
    title: '',
    subTitle: 'Medical Shop Website',
    description: 'EWP offers user-friendly Medical Shop Websites that allow medical shops to showcase their products and services while providing all the necessary information to customers. '
  },
  {
    img: 'service/blog-logo.avif',
    animation: "https://assets7.lottiefiles.com/private_files/lf30_5u6A5U.json",
    title: '',
    subTitle: 'Blog Website',
    description: 'EWP offers user-friendly Blog Websites that allow writers and content creators to share their thoughts and ideas with the world while providing a seamless reading experience for readers.'
  },
  {
    img: 'service/real-state-logo.webp',
    animation: "https://assets10.lottiefiles.com/packages/lf20_leneywe2.json",
    title: '',
    subTitle: 'Real Estate Website',
    description: 'EWP offers visually appealing and user-friendly Real Estate Websites that allow real estate agents to showcase their properties and services while being optimized for search engines. '
  }
 ]

 const blockData = [
 {
    animation:"https://assets3.lottiefiles.com/packages/lf20_dBF8frvgma.json",
    icon: 'service/peoples.svg',
    value: '20+',
    name: 'Happy Clients'
  },
  {
    animation:"https://assets3.lottiefiles.com/packages/lf20_uktq0eKz9C.json",
    icon: 'service/check.svg',
    value: '50+',
    name: 'Projects Completed'
  },
  {
    animation:"https://assets10.lottiefiles.com/private_files/lf30_htpumt01.json",
    icon: 'service/journal.svg',
    value: '5+',
    name: 'Years of Experience'
  }
 ]
 
 const category = [
 {
    animation:"https://assets8.lottiefiles.com/packages/lf20_ijdvsseu.json",
    value: 'SEAMLESS FUNCTIONALITY',
    name: "Need your website to be a mighty tool that supports your core business? This is what we deliver. We'll develop a scalable web platform to match your business needs and new features as your company grows."
  },
  {
    animation:"https://assets10.lottiefiles.com/packages/lf20_X8wA00rqrk.json",
    value: 'EASY TO MANAGE',
    name: 'Content management will always be easy & intuitive. You have complete control over the site. No matter how advanced your technical skills are, you can manage your website to keep it up to date and relevant for customers.'
  },
  {
    animation:"https://assets8.lottiefiles.com/packages/lf20_mcydtktl.json",
    value: 'STAND OUT FROM THE CROWD',
    name: 'Choose the perfect team for your project. At tagDiv, we create more than web design and functionality. We create innovative and fresh websites with an online visual identity that makes your business unique from your competitors.'
  }
 ]
</script>

<style scoped>
.achievements {
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
@media only screen and (min-width: 1350px) { 
  .achievements {
    grid-template-columns: repeat(3,1fr);
  }
}
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;
}
.block img {
  height: 30px;
  box-sizing: content-box;
  padding: 10px;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: visible;
}
</style>