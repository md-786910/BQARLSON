<template>
  <div class="page-container">
    <h1>OUR SERVICES</h1>
    <div class="grid-layout">
      <card-view v-for="data in cardData" :key="data.title" :data="data"/>
    </div>
    <div class="achievements">
      <div class="block" v-for="data in blockData" :key="data.name">
        <img class="block-icon" :src="data.icon"/>
        <div class="block-number">{{ data.number }}</div>
        <div class="block-name">{{ data.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardView from './CardView.vue'

const cardData = [
  {
    img: 'service/education-logo.jpg',
    title: '',
    subTitle: 'Education Website',
    description: 'An Education Website is a platform for educational institutions to showcase their courses, faculty, and student activities. At EWP, we provide Education Websites that are easy to navigate and provide all the necessary information to students and parents. Our Education Websites are also optimized for search engines, making it easier for potential students to find the institution.'
  },
  {
    img: 'service/business-logo.avif',
    title: '',
    subTitle: 'Business Website',
    description: 'A Business Website is essential for any business looking to establish an online presence. At EWP, we provide Business Websites that are not only visually appealing but also user-friendly and optimized for search engines. We work closely with our clients to understand their business needs and create a website that helps them reach their target audience and increase their online visibility.'
  },
  {
    img: 'service/the-agency-logo.gif',
    title: '',
    subTitle: 'Agency Website',
    description: 'An Agency Website is a platform for advertising and marketing agencies to showcase their portfolio and services. At EWP, we provide Agency Websites that are visually appealing and easy to navigate. Our Agency Websites are also optimized for search engines, making it easier for potential clients to find the agency.'
  },
  {
    img: 'service/ecommerce-logo.webp',
    title: '',
    subTitle: 'E-commerce Website',
    description: 'An E-commerce Website is an online store that allows businesses to sell their products online. At EWP, we provide E-commerce Websites that are easy to use and provide a seamless shopping experience for customers. Our E-commerce Websites are also optimized for search engines, making it easier for potential customers to find the store.'
  },
  {
    img: 'service/hotel-logo.jpg',
    title: '',
    subTitle: 'Hotel Website',
    description: "A Hotel Website is necessary to establish an online presence, showcase your hotel's brand and unique features, accept direct bookings, provide customer service, and gain insights into guest behavior and preferences through analytics."
  },
  {
    img: 'service/restaurant-logo.jpg',
    title: '',
    subTitle: 'Restaurant Website',
    description: "A Restaurant Website is necessary to establish an online presence, showcase your restaurant's brand and cuisine, offer menu information and online ordering, provide customer service, and increase sales."
  },
  {
    img: 'service/medical-logo.jpg',
    title: '',
    subTitle: 'Medical Shop Website',
    description: 'A Medical Shop Website is a platform for medical shops to showcase their products and services. At EWP, we provide Medical Shop Websites that are easy to navigate and provide all the necessary information to customers. Our Medical Shop Websites are also optimized for search engines, making it easier for potential customers to find the shop.'
  },
  {
    img: 'service/blog-logo.avif',
    title: '',
    subTitle: 'Blog Website',
    description: 'A Blog Website is a platform for writers and content creators to share their thoughts and ideas with the world. At EWP, we provide Blog Websites that are easy to use and provide a seamless reading experience for readers. Our Blog Websites are also optimized for search engines, making it easier for potential readers to find the blog.'
  },
  {
    img: 'service/real-state-logo.webp',
    title: '',
    subTitle: 'Real Estate Website',
    description: 'A Real Estate Website is a platform for real estate agents to showcase their properties and services. At EWP, we provide Real Estate Websites that are visually appealing and easy to navigate. Our Real Estate Websites are also optimized for search engines, making it easier for potential clients to find the properties.'
  }
 ]

 const blockData = [
  {
    icon: 'service/check.svg',
    number: '57',
    name: 'WORKS COMPLETED'
  },
  {
    icon: 'service/journal.svg',
    number: '2',
    name: 'YEARS OF EXPERIENCE'
  },
  {
    icon: 'service/peoples.svg',
    number: '2',
    name: 'TOTAL CLIENTS'
  },
  {
    icon: 'service/award.svg',
    number: '2',
    name: 'AWARDS WON'
  }
 ]
</script>

<style scoped>
.achievements {
  width: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 180px;
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