<template>
  <div class="page-container">
    <div class="about-content">
      <h1>Our Services and Expertise</h1>
      <div class="content-block">
        <p class="w-50 about-heading">
          Bharat Qarlson Software Technologies Private Limited is a professional
          Web Services,Mobile Apps Development and Digital Marketing Company.We
          are providing proactive IT and Digital Marketing Solutions for more than
          1 years to Small-To-high Sized Businesses.We focus on fostering the areas
          like Web Design & Development, Mobile Apps Development ,SEO, SMM, Digital
          Marketing Services, Web Advertisements, and Developing Creative Content resulting
          in Fully Managed and Highly Successful Online Marketing Campaigns. 
          We aim to provide the best possible Strategic Outcome for our valuable clients through our
          Affordable Digital Marketing Services under one roof. At B-Qarlson Software Technologies
          Private Limited, we have onboard Dynamic Professionals and the Best Digital Marketers, helping
          us to create Powerful Brand Experiences for our Clients. Business Owners belonging to different
          Industries, in need of Business Growth and Marketing needs, resort to us for the best
          Business.
        </p>
        <LottieAnimation class="w-50" animationData="https://assets9.lottiefiles.com/packages/lf20_RkDrfCI7wQ.json" />
      </div>
      <h1>Our Mission and Values</h1>
      <p>
        Our mission is to empower businesses and individuals to achieve their
        online goals through innovative web development solutions. We believe in
        integrity, teamwork, continuous learning, and excellence in everything
        we do.
      </p>
      <div class="content-block">
        <LottieAnimation class="w-50" animationData="https://assets2.lottiefiles.com/packages/lf20_qq5qecip.json" />
        <p class="w-50 heading-content">
          Our Services: At Bharat Qarlson Software Technologies Private Limited,
          We Provide Website Designing and Development( UI/UX Design),
          Software Development, Mobile Application Development , Testing and
          Quality Assurance , Search Engine Optimization , Site Mapping,Data
          Analytics , IT Support , Google My Business Listing , Digital Marketing,
          Manage IT services Bulk SMS Services, Professional Mail Setup, Logo
          Designing,and many more...
        </p>
      </div>
    </div>
    <h1 class="heading">Our Team and Culture</h1>
    <p>
      Our team of skilled designers and developers works closely with our clients to understand 
      their unique business requirements and provide customized solutions that align with their goals. At B-Qarlson Software Technologies Private Limited, we pride
      ourselves on providing high-quality website design and development
      services that exceed our clients' expectations. We offer a wide range of
      website solutions that cater to all types of businesses, from small
      start-ups to large corporations.
    </p>
    <div class="grid-layout">
      <card-view v-for="data in cardData" :key="data.title || data.subTitle" :data="data" />
    </div>
    <h1 class="heading">History</h1>
    <p>
      Founded in 2022, Bharat Qarlson Software Technologies Private Limited has
      been providing top-notch web development services to clients across the
      globe. We have a team of experienced and skilled developers who are
      passionate about delivering high-quality solutions that exceed our
      clients' expectations.
    </p>
  </div>
</template>

<script setup>
import CardView from "./CardView.vue";
import LottieAnimation from "./LottieAnimation.vue";

const cardData = [
  {
    img: "about/pradeep.jpeg",
    title: "Pradeep Kumar",
    subTitle: "CEO & Founder",
    description:
      "I am committed to helping businesses establish a strong online presence through our user-friendly and innovative website solutions.",
  },
  {
    img: "about/minhaj.jpeg",
    title: "Minhaj Alam",
    subTitle: "CFO & CO-Founder",
    description:
      "I am committed to ensuring that we provide our clients with high-quality and affordable website solutions.",
  },
  {
    img: "about/md_ashif.jpeg",
    title: "Md Ashif Reza",
    subTitle: "CTO",
    description:
      "As a CTO, my dedication lies in delivering top-notch, cost-effective website solutions to our clients, ensuring their satisfaction and our technological excellence.",
  },
  {
    img: "about/suva.jpeg",
    title: "Suva Duley",
    subTitle: "Full Stack Developer Team Lead",
    description:
      "As a Team Lead, I'm dedicated to delivering top-notch, budget-friendly website solutions to meet our clients' needs and exceed their expectations.",
  },
  {
    img: "about/asif.jpeg",
    title: "Asif Ullah",
    subTitle: "Director & CO-Founder",
    description:
      "I am dedicated to ensuring that we deliver top-notch and innovative website solutions to help businesses thrive online.",
  },
  {
    img: "about/prince.jpg",
    title: "Prince Mishra",
    subTitle: "Chief Operating Officer",
    description:
      "Our goal is to help businesses of all sizes establish a strong online presence and reach their full potential.",
  },
  {
    img: "about/deepak.jpg",
    title: "Deepak Kumar",
    subTitle: "Senior Advisor",
    description:
      "I bring a wealth of experience and knowledge to our team, helping to guide our company towards success.",
  },
  {
    img: "about/vivek.jpg",
    title: "Vivek Kumar",
    subTitle: "Service Provider",
    description: "We're committed to ensuring your website runs smoothly.",
  },
  {
    img: "about/dinanath.jpg",
    title: "Dinanath Kumar",
    subTitle: "Service Provider",
    description: "We're committed to ensuring your website runs smoothly.",
  },
];
</script>

<style scoped>
.content-block {
  align-items: center;
  margin: 20px;

}

.about-content {
  margin-top: 25px;
  margin-bottom: 20px;
}

.about-heading {
  text-align: justify;
  word-spacing: 0.01px;
  letter-spacing: 0.01px;
}
.heading-content{
  text-align: left;
  word-spacing: 0.01px;
  letter-spacing: 0.01px;
}
@media only screen and (min-width: 1350px) {
  .content-block {
    display: flex;
  }

  /* p {
    letter-spacing: 4px;
    padding: 10px;
    line-height: 30px;
    font-size: 1rem;
  } */
  p {
    letter-spacing: 2.6px;
    padding: 10px;
    line-height: 28px;
    font-size: 1.1rem;
  }

  .w-50 {
    width: 50%;
  }
}
</style>
