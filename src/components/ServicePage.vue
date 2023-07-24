<template>
  <div class="page-container">
    <h1>We Provide Better Service for Your Business</h1>
    <!-- <div class="grid-layout">
      <card-view v-for="data in cardData" :key="data.title" :data="data" />
    </div> -->
    <div class="container">
      <div>
        <div class="sub-head">
          <h1 class="highlight">YOUR DIGITAL PARTNER...!</h1>
          <h2>Top Web Consultants in Pune, India</h2>
        </div>
        <div class="displayImg">
          <img src="digital-marketing-banner.webp" alt="" class="banner1" />
          <img src="seo-analytics-banner.webp" alt="" class="banner2" />
          <img src="web-design-banner.webp" alt="" class="banner3" />
          <img src="Banner4.png" alt="" class="banner4" />
          <img src="Banner5.jpg" alt="" class="banner5" />
        </div>
      </div>
      <div class="content">
        <div class="service">
          <div>
            <img src="Website-Designing-Banner.png" alt="" />
            <h4>Website Designing</h4>
          </div>
          <p>
            Best Web Design Company in India with talented in-house UI/UX web
            designers & developers in Pune
          </p>
          <img src="icon-arrow-right.png" alt="" />
        </div>
        <div class="service">
          <div>
            <img src="Mobile-Apps-Banner.png" alt="" />
            <h4>Mobile Apps</h4>
          </div>
          <p>
            Award winning agency offering mobile app development services in
            India on iOS and Android platforms
          </p>
          <img src="icon-arrow-right.png" alt="" />
        </div>
        <div class="service">
          <div>
            <img src="Digital-Marketing-Banner.png" alt="" />
            <h4>Digital Marketing</h4>
          </div>
          <p>
            Top digital marketing company in India powered by AI technology,
            market research and data analytics
          </p>
          <img src="icon-arrow-right.png" alt="" />
        </div>
      </div>
    </div>
    <h1 class="left-align heading highlight">TECHNOLOGY STACK</h1>
    <h2 class="left-align">
      Elevating software development with a robust technology stack
    </h2>
    <p class="left-align">
      Our technology stack includes the latest programming languages and
      frameworks to deliver custom software development services & solutions. As
      a top software development company, we use agile methodologies to ensure
      rapid development and scalable solutions.
    </p>
    <el-tabs v-model="activeName" class="service-tabs">
      <el-tab-pane
        v-for="(icons, key) in services"
        :key="key"
        :label="key"
        :name="key">
        <Icon v-for="icon in icons" :key="icon" :icon="icon" />
      </el-tab-pane>
    </el-tabs>
    <BestPractices />
    <div class="achievements">
      <div class="block" v-for="data in blockData" :key="data.name">
        <LottieAnimation
          style="height: 200px"
          v-if="data.animation"
          :animationData="data.animation" />
        <!-- <img class="block-icon" :src="data.icon"/> -->
        <h3>{{ data.value }}</h3>
        <p>{{ data.name }}</p>
      </div>
    </div>
    <div>
      <h1 class="heading">Your success is our focus</h1>
      <p>
        Work with our highly skilled team and get everything done faster. We’re
        using the latest technologies and advanced expertise on any project,
        from small business websites to complex web applications. You’ll have
        one of the best Indian teams of web developers ready to create solutions
        that help your business grow.
      </p>
    </div>
    <div class="achievements">
      <div class="block" v-for="data in category" :key="data.name">
        <LottieAnimation
          style="height: 200px"
          v-if="data.animation"
          :animationData="data.animation" />
        <h3>{{ data.value }}</h3>
        <p>{{ data.name }}</p>
      </div>
    </div>
    <h1>We care about you, your project and your business</h1>
    <ul class="list">
      <li>
        <div class="icon">
          <img
            src="https://cdn2.iconfinder.com/data/icons/project-management-outline-1/60/Data-Report-Manager-reporting-clipboard-woman-user-256.png"
            alt="alt" />
        </div>
        <p>Dedicated Project Manager</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn1.iconfinder.com/data/icons/seo-accessibility-usability-2-3/256/Usability_Evaluation-256.png"
            alt="alt" />
        </div>
        <p>Theme Testing</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn3.iconfinder.com/data/icons/speed-4/384/Speedometer-256.png"
            alt="alt" />
        </div>
        <p>Page Speed Optimization</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_code_coding_laptop-256.png"
            alt="alt" />
        </div>
        <p>Semantically Rich Code</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn0.iconfinder.com/data/icons/seo-and-marketing-26/100/seo_marketing-21-256.png"
            alt="alt" />
        </div>
        <p>SEO-Optimal Code</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn4.iconfinder.com/data/icons/proglyphs-computers-and-development/512/Responsive_Design-256.png"
            alt="alt" />
        </div>
        <p>Responsive Design</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn0.iconfinder.com/data/icons/complete-common-version-3-5/1024/remote6-256.png"
            alt="alt" />
        </div>
        <p>Version Control</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn0.iconfinder.com/data/icons/business-953/42/team-256.png"
            alt="alt" />
        </div>
        <p>In-House Team</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn2.iconfinder.com/data/icons/finance-253/24/password-security-lock-shield-protection-256.png"
            alt="alt" />
        </div>
        <p>Security</p>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami17-23-256.png"
            alt="alt" />
        </div>
        <p>Easy To Access</p>
      </li>
    </ul>
    <div>
      <h1 class="heading">Dedicated development team</h1>
      <p>
        With our dedicated development teams, we can guarantee that each project
        gets the best skillset and the right level of attention. We’ll select
        the perfect team based on the technical & creative requirements. Also,
        we’ll consider the necessary amount of work and the deadline.
      </p>
    </div>
  </div>
</template>

<script setup>
// import CardView from "./CardView.vue";
import LottieAnimation from "./LottieAnimation.vue";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import BestPractices from "@/homenew/BestPractices.vue";

// const cardData = [
//   {
//     img: "service/education-logo.jpg",
//     animation: "https://assets2.lottiefiles.com/private_files/lf30_TBKozE.json",
//     title: "",
//     subTitle: "Education Website",
//     description:
//       "An Education Website is a platform for educational institutions to showcase their courses, faculty, and student activities.",
//   },
//   {
//     img: "service/business-logo.avif",
//     animation: "https://assets6.lottiefiles.com/packages/lf20_gzx4caln.json",
//     title: "",
//     subTitle: "Business Website",
//     description:
//       "A Business Website is essential for any business looking to establish an online presence.",
//   },
//   {
//     img: "service/the-agency-logo.gif",
//     animation: "https://assets7.lottiefiles.com/packages/lf20_dxtrw7q0.json",
//     title: "",
//     subTitle: "Agency Website",
//     description:
//       "An Agency Website is a platform for advertising and marketing agencies to showcase their portfolio and services.",
//   },
//   {
//     img: "service/ecommerce-logo.webp",
//     animation: "https://assets1.lottiefiles.com/packages/lf20_rVEgYArLER.json",
//     title: "",
//     subTitle: "E-commerce Website",
//     description:
//       "An E-commerce Website is an online store that allows businesses to sell their products online.",
//   },
//   {
//     img: "service/hotel-logo.jpg",
//     animation: "https://assets9.lottiefiles.com/packages/lf20_g1dkgxdv.json",
//     title: "",
//     subTitle: "Hotel Website",
//     description:
//       "A Hotel Website is necessary to establish an online presence, showcase your hotel's brand and unique features.",
//   },
//   {
//     img: "service/restaurant-logo.jpg",
//     animation: "https://assets6.lottiefiles.com/packages/lf20_tll0j4bb.json",
//     title: "",
//     subTitle: "Restaurant Website",
//     description:
//       "A Restaurant Website is necessary to establish an online presence, showcase your restaurant's brand and cuisine.",
//   },
//   {
//     img: "service/medical-logo.jpg",
//     animation: "https://assets4.lottiefiles.com/packages/lf20_0fhlytwe.json",
//     title: "",
//     subTitle: "Medical Shop Website",
//     description:
//       "EWP offers user-friendly Medical Shop Websites that allow medical shops to showcase their products and services while providing all the necessary information to customers. ",
//   },
//   {
//     img: "service/blog-logo.avif",
//     animation: "https://assets7.lottiefiles.com/private_files/lf30_5u6A5U.json",
//     title: "",
//     subTitle: "Blog Website",
//     description:
//       "EWP offers user-friendly Blog Websites that allow writers and content creators to share their thoughts and ideas with the world while providing a seamless reading experience for readers.",
//   },
//   {
//     img: "service/real-state-logo.webp",
//     animation: "https://assets10.lottiefiles.com/packages/lf20_leneywe2.json",
//     title: "",
//     subTitle: "Real Estate Website",
//     description:
//       "EWP offers visually appealing and user-friendly Real Estate Websites that allow real estate agents to showcase their properties and services while being optimized for search engines. ",
//   },
// ];
const services = {
  "Front End": [
    "logos:html-5",
    "logos:css-3",
    "logos:javascript",
    "devicon:angularjs",
    "devicon:react-wordmark",
    "devicon:vuejs-wordmark",
    "skill-icons:jquery",
    "devicon-plain:wordpress-wordmark",
  ],
  "Back End": [
    "devicon:nodejs",
    "vscode-icons:file-type-csharp2",
    "devicon:php",
    "devicon:python-wordmark",
    "devicon:java-wordmark",
    "devicon:dotnetcore",
  ],
  "Mobile App": [
    "devicon:android",
    "logos:flutter",
    "devicon:react-wordmark",
    "vscode-icons:file-type-kotlin",
    "logos:swift",
  ],
  "DevOps / Clouds": [
    "devicon:jenkins",
    "skill-icons:aws-light",
    "logos:docker",
    "logos:google-cloud",
    "logos:kubernetes",
    "devicon:azure",
  ],
  DataBase: [
    "devicon:mongodb-wordmark",
    "logos:mysql",
    "logos:postgresql",
    "logos:mariadb-icon",
    "devicon:dynamodb",
  ],
};
const activeName = ref("Front End");

const blockData = [
  {
    animation: "https://assets3.lottiefiles.com/packages/lf20_dBF8frvgma.json",
    icon: "service/peoples.svg",
    value: "20+",
    name: "Happy Clients",
  },
  {
    animation: "https://assets3.lottiefiles.com/packages/lf20_uktq0eKz9C.json",
    icon: "service/check.svg",
    value: "50+",
    name: "Projects Completed",
  },
  {
    animation:
      "https://assets10.lottiefiles.com/private_files/lf30_htpumt01.json",
    icon: "service/journal.svg",
    value: "5+",
    name: "Years of Experience",
  },
];

const category = [
  {
    animation: "https://assets8.lottiefiles.com/packages/lf20_ijdvsseu.json",
    value: "SEAMLESS FUNCTIONALITY",
    name: "Need your website to be a mighty tool that supports your core business? This is what we deliver. We'll develop a scalable web platform to match your business needs and new features as your company grows.",
  },
  {
    animation: "https://assets10.lottiefiles.com/packages/lf20_X8wA00rqrk.json",
    value: "EASY TO MANAGE",
    name: "Content management will always be easy & intuitive. You have complete control over the site. No matter how advanced your technical skills are, you can manage your website to keep it up to date and relevant for customers.",
  },
  {
    animation: "https://assets8.lottiefiles.com/packages/lf20_mcydtktl.json",
    value: "STAND OUT FROM THE CROWD",
    name: "Choose the perfect team for your project. At tagDiv, we create more than web design and functionality. We create innovative and fresh websites with an online visual identity that makes your business unique from your competitors.",
  },
];
</script>

<style>
.service-tabs {
  width: calc(100% - 32px);
  margin: 32px 0;
  --el-text-color-primary: #fff;
}
.el-tabs__nav {
  justify-content: space-evenly;
  width: 100%;
}
.el-tabs__nav .el-tabs__item {
  font-size: 1.2rem;
}
.el-tab-pane {
  display: flex;
  justify-content: space-between;
  padding: 32px 16px;
}
.el-tab-pane svg {
  font-size: 3rem;
}
.container {
  margin: 50px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.container .sub-head {
  border-left: 2px solid Red;
  padding: 16px;
}

.container .content .service {
  position: relative;
  z-index: 5;
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  box-shadow: 0 0px 16px #ffffffa1;
  margin: 20px 0;
  padding: 10px;
  border-radius: 16px;
  background-color: #fff;
}
.container .content .service div {
  height: 100px;
  width: 100px;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px #0000007a;
}
.container .content .service div img {
  position: absolute;
  background: #ffff;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
  display: flex;
  top: -40%;
  left: -25%;
}
.container .content .service:nth-child(1) div {
  background-color: #00aad5;
}

.container .content .service:nth-child(2) div {
  background-color: #dc3545;
}

.container .content .service:nth-child(3) div {
  background-color: #28a745;
}
.container .content .service h4 {
  text-align: center;
  padding: 32px;
}
.container .content .service p {
  text-align: left;
  padding: 16px;
  color: #000;
}
.container .content .service img:hover {
  transform: scale(1.4);
}

.list {
  list-style-type: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
}
.list li p {
  color: #fff;
}
.list .icon {
  border: 1px solid #4a26cc;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 16px;
  background-color: #fff;
}

.list .icon img {
  width: 100%;
  height: 100%;
}

@media (min-width: 1000px) {
  .list {
    grid-template-columns: repeat(5, 1fr);
  }
}

.achievements {
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
@media only screen and (min-width: 1350px) {
  .achievements {
    grid-template-columns: repeat(3, 1fr);
  }
  .container {
    flex-direction: row;
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
.container .displayImg {
  position: relative;
  border-radius: 50%;
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.container .displayImg .banner1,
.banner2,
.banner3,
.banner4,
.banner5 {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  padding: 50px;
  background-image: radial-gradient(#ffffff00, #ffffffaa);
  backdrop-filter: 4px;
}

.banner1 {
  animation: slide1 15s linear infinite;
}

.banner2 {
  animation: slide2 15s linear infinite;
}

.banner3 {
  animation: slide3 15s linear infinite;
}

.banner4 {
  animation: slide4 15s linear infinite;
}

.banner5 {
  animation: slide5 15s linear infinite;
}

@keyframes slide1 {
  0% {
    visibility: visible;
  }
  20% {
    visibility: hidden;
  }
  40% {
    visibility: hidden;
  }
  60% {
    visibility: hidden;
  }
  80% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}

@keyframes slide2 {
  0% {
    visibility: hidden;
  }

  20% {
    visibility: hidden;
  }
  40% {
    visibility: visible;
  }
  60% {
    visibility: hidden;
  }
  80% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}

@keyframes slide3 {
  0% {
    visibility: hidden;
  }
  20% {
    visibility: hidden;
  }
  40% {
    visibility: hidden;
  }
  60% {
    visibility: visible;
  }
  80% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}

@keyframes slide4 {
  0% {
    visibility: hidden;
  }
  20% {
    visibility: hidden;
  }
  40% {
    visibility: hidden;
  }
  60% {
    visibility: hidden;
  }
  80% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
}

@keyframes slide5 {
  0% {
    visibility: hidden;
  }
  20% {
    visibility: hidden;
  }
  40% {
    visibility: hidden;
  }
  60% {
    visibility: hidden;
  }
  80% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
</style>
