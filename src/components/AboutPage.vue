<template>
  <div class="about-page">
    <div class="details">
      <p>
        E-Website Provider (EWP) is a professional website design and development company.that provides
        creative and modern websites according to the needs of clients. Our team of skilled designers and
        developers works closely with our clients to understand their unique business requirements and
        provide customized solutions that align with their goals. At EWP, we pride ourselves on providing
        high-quality website design and development services that exceed our clients' expectations. We
        offer a wide range of website solutions that cater to all types of businesses, from small
        start-ups to large corporations
      </p>
      <p>
        Our Services:
        At EWP, we provide a comprehensive range of website design and development services to meet the
        needs of our clients. Our services include Business Websites, Education Websites, Agency Websites,
        E-commerce Websites, Hotel Websites, Portfolio Websites, Blog Websites, Real Estate Websites,
        Medical Shop Websites, Online Booking Websites, Small Finance Bank Websites, and many more.
      </p>
      <p>
        At E-Website Provider, we understand that creating a website can be overwhelming, which is why we
        offer a streamlined process that ensures a smooth and hassle-free experience for our clients. We
        will work with you every step of the way, from the initial consultation to the final launch, to
        ensure that your website meets your expectations.
      </p>
      <p>
        In addition to website development, we also offer website maintenance and support services to
        ensure that your website remains up to date, secure, and functioning at its best. Our team is
        available to provide ongoing support, including website updates, backups, and security checks, to
        ensure that your website is always performing at its best
      </p>
    </div>
    <h1 style="text-align: center;">OUR MANAGEMENT TEAM</h1>
    <div class="management-details">
      <card-view v-for="data in cardData" :key="data.title" :data="data" />
    </div>
  </div>
</template>

<script setup>
import CardView from './CardView.vue'

 const cardData = [
  {
    img: 'about/pradeep.jpeg',
    title: 'Pradeep Kumar',
    subTitle: 'CEO & Founder',
    description: 'I am committed to helping businesses establish a strong online presence through our user-friendly and innovative website solutions.'
  },
  {
    img: 'about/minhaj.jpeg',
    title: 'Minhaj Alam',
    subTitle: 'CFO & CO-Founder',
    description: 'I am committed to ensuring that we provide our clients with high-quality and affordable website solutions.'
  },
  {
    img: 'about/asif.jpeg',
    title: 'Asif Ullah',
    subTitle: 'Vice President',
    description: 'I am dedicated to ensuring that we deliver top-notch and innovative website solutions to help businesses thrive online.'
  },
  {
    img: 'about/shubham.jpeg',
    title: 'Shubham Kumar Jha',
    subTitle: 'Project Leader',
    description: 'I am committed to delivering exceptional results for our clients.'
  },
  {
    img: 'about/roshan.jpg',
    title: 'Roshan Kumar Jha',
    subTitle: 'Frontend',
    description: 'I am passionate about staying up-to-date with the latest frontend development technologies and using them to create innovative solutions that meet and exceed user expectations.'
  },
  {
    img: '',
    title: 'Pooja Pandey',
    subTitle: 'Frontend',
    description: ''
  },
  {
    img: 'about/prince.jpg',
    title: 'Prince Mishra',
    subTitle: 'Chief Operating Officer',
    description: 'goal is to help businesses of all sizes establish a strong online presence and reach their full potential.'
  },
  {
    img: 'about/deepak.jpg',
    title: 'Deepak Kumar',
    subTitle: 'Senior Advisor',
    description: ' As the Senior Advisor Leader, I bring a wealth of experience and knowledge to our team, helping to guide our company towards success.'
  },
  {
    img: 'about/vivek.jpg',
    title: 'Vivek Kumar',
    subTitle: 'Operation Team',
    description: ''
  },
  {
    img: 'about/dinanath.jpg',
    title: 'Dinanath Kumar',
    subTitle: 'Operation Team',
    description: ''
  }
 ]
</script>

<style scoped>
.about-page {
  height: min-content;
  width: 80%;
  border-inline: 1px solid #00000040;
  padding: 10px 80px;
}
.about-page.details {
  width: 100%;
  height: min-content;
}
.details p {
  padding: 10px 0px;
}
.management-details {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 25px;
  margin-top: 25px;
}
</style>