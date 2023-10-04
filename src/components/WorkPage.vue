<template>
  <div class="page-container">
    <div class="page-content">
    <div class="w-50">
      <h1>Our Work</h1> 
      <h2>We provide a comprehensive range of website design and development services to meet the needs of our clients.</h2>
      <p>The "Work" page showcases our portfolio of web development projects across various industries. Our services encompass a wide range of website types, including Business Websites, Education Websites, Agency Websites, E-commerce Websites, Hotel Websites, Portfolio Websites, Blog Websites, Real Estate Websites, Medical Shop Websites, Online Booking Websites, Small Finance Bank Websites, and many more. We have successfully created tailored solutions for clients in these diverse sectors, addressing their specific needs and providing them with effective online platforms to showcase their products, services, or information. Our portfolio demonstrates our versatility and expertise in delivering high-quality websites across different industries and business sectors.</p>
    </div>
      <lottie-animation class="w-50" animationData="https://assets1.lottiefiles.com/packages/lf20_BJ9mFCqhen.json"/>
    </div>
    <h1 class="heading">We Create Similar Websites Like</h1>
    <div class="grid-layout">
      <WorkCard v-for="data in  workData" :key="data.name" :data="data"/>
    </div>
  </div>
</template>

<script setup>
import WorkCard from "./WorkCard.vue"
import LottieAnimation from './LottieAnimation.vue'

const workData = [
  {
    name: 'Bussiness',
    type: 'Web Development',
    img: 'work/bussiness.png',
    link: 'https://www.blastness.com/',
    description: "Blastness helps organizations optimize revenue with brand marketing, SEO, SEA, social media, advertising."
  },
  {
    name: 'The Agency',
    type: 'Web Development',
    img: 'work/the-agency-logo.gif',
    link: 'https://theagencyrealestate.ca/',
    description: "An Agency Website is a platform for advertising and marketing agencies to showcase their portfolio and services."
  },
  {
    name: 'Medical Shop',
    type: 'Web Development',
    img: 'work/medical-shop.png',
    link: 'https://www.bluemedix.in/',
    description: "BlueMedix is the leading Omni Channel for Retail Pharmacy in India, providing medicines at affordable rates."
  },
  {
    name: 'Real Estate',
    type: 'Web Development',
    img: 'work/realestate_logo.svg',
    link: 'https://www.realtytrac.com/',
    description: "A real estate information company and an online marketplace for foreclosed and defaulted properties in the United States."
  },
  {
    name: 'Education',
    type: 'Web Development',
    img: 'work/education_logo.svg',
    link: 'https://www.aacsb.edu/',
    description: "AACSB International (AACSB), a global nonprofit association, connects educators, students, and business to achieve a common goal."
  },
  {
    name: 'Institute',
    type: 'Wordpress',
    img: 'work/math.png',
    link: 'https://www.justvisitonline.com/company/maths-point-by-er-manish-kumar/Patna/coaching%20classes%20for%20mathematics',
    description: "An Education Website is a platform for educational institutions to showcase their courses, faculty, and student activities."
  },
  {
    name: 'Hotel',
    type: 'Web Development',
    img: 'work/hotel-logo.jpg',
    link: 'https://hotelemojiinn.com/',
    description: "A Hotel Website is necessary to establish an online presence, showcase your hotel's brand and unique features."
  },
  {
    name: 'Barbque',
    type: 'Wordpress',
    img: 'work/barbque.svg',
    link: 'https://www.barbequenation.com/',
    description: "A Restaurant Website is necessary to establish an online presence, showcase your restaurant's brand and cuisine."
  },
  {
    name: 'Bussiness',
    type: 'Wordpress',
    img: 'work/aadi.png',
    link: 'https://aadieximhub.in/',
    description: "A Business Website is essential for any business looking to establish an online presence."
  },
  {
    name: 'Coaching',
    type: 'Web Development',
    img: 'work/inst.jpg',
    link: 'https://bhavyaclasses.com/',
    description: "Blastness helps organizations optimize revenue with brand marketing, SEO, SEA, social media, advertising."
  },
  {
    name: 'Institute',
    type: 'Wordpress',
    img: 'work/khan-gs.png',
    link: 'https://www.khangsresearchcentre.co.in/',
    description: "KGS is the Most Trusted Learning Platform. It is best Coaching Institute in India For UPSC, BPSC,BSSC, UPSSSC, SSC, Bank, Railway."
  },
  {
    name: 'Medicine',
    type: 'Wordpress',
    img: 'work/sanyasi-logo.png',
    link: 'https://www.sanyasiayurveda.com/',
    description: "EWP offers user-friendly Medical Shop Websites that allow medical shops to showcase their products and services while providing all the necessary information to customers. "
  }
]
</script>
<style scoped>
h1 {
  line-height: 30px;
  font-size: 2.5rem;
  margin: 20px 0px;
  padding: 10px;
}
h2,
p {
  line-height: 30px;
  margin: 20px 0px;
  padding:5px;
  text-align: left;
}
.heading{
  margin: 100px 0px;
  padding: 5px;
}
@media only screen and (min-width: 1350px) {
  .page-content {
    display: flex;
    margin-top: 25px;
    
  }
}
</style>