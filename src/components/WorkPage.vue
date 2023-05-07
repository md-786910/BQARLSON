<template>
  <div class="page-container">
    <h1>CREATE SIMILAR WEBSITES LIKE</h1>
    <div class="grid-layout">
      <WorkCard v-for="data in  workData" :key="data.name" :data="data"/>
    </div>
  </div>
</template>

<script setup>
import WorkCard from "./WorkCard.vue"

const workData = [
  {
    name: 'Bussiness',
    type: 'Web Development',
    img: 'work/bussiness.png',
    link: 'https://www.blastness.com/'
  },
  {
    name: 'The Agency',
    type: 'Web Development',
    img: 'service/the-agency-logo.gif',
    link: 'https://theagencyrealestate.ca/'
  },
  {
    name: 'Medical Shop',
    type: 'Web Development',
    img: 'work/medical-shop.png',
    link: 'https://www.bluemedix.in/'
  },
  {
    name: 'Real Estate',
    type: 'Web Development',
    img: 'work/realestate_logo.svg',
    link: 'https://www.realtytrac.com/'
  },
  {
    name: 'Education',
    type: 'Web Development',
    img: 'work/education_logo.svg',
    link: 'https://www.aacsb.edu/'
  },
  {
    name: 'Institute',
    type: 'Wordpress',
    img: 'work/math.png',
    link: 'https://www.justvisitonline.com/company/maths-point-by-er-manish-kumar/Patna/coaching%20classes%20for%20mathematics'
  },
  {
    name: 'Hotel',
    type: 'Web Development',
    img: 'service/hotel-logo.jpg',
    link: 'https://hotelemojiinn.com/'
  },
  {
    name: 'Barbque',
    type: 'Wordpress',
    img: 'work/barbque.svg',
    link: 'https://www.barbequenation.com/'
  },
  {
    name: 'Bussiness',
    type: 'Wordpress',
    img: 'work/aadi.png',
    link: 'https://aadieximhub.in/'
  },
  {
    name: 'Coaching',
    type: 'Web Development',
    img: 'work/inst.jpg',
    link: 'https://bhavyaclasses.com/'
  },
  {
    name: 'Institute',
    type: 'Wordpress',
    img: 'work/khan-gs.png',
    link: 'https://www.khangsresearchcentre.co.in/'
  },
  // {
  //   name: 'School',
  //   type: 'Wordpress',
  //   img: 'work/school.webp',
  //   link: 'https://www.brightcareerschoolpurnea.com/'
  // },
  {
    name: 'Medicine',
    type: 'Wordpress',
    img: 'work/sanyasi-logo.png',
    link: 'https://www.sanyasiayurveda.com/'
  }
]
</script>
