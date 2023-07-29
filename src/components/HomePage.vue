<template>
  <div class="home-page">
    <div class="home-container">
      <div class="w-50 home-texts">
        <h1 class="light-weight">{{ showText.f }}</h1>
        <h1>{{ showText.s }}</h1>
        <h1>{{ showText.t }}</h1>
        <div class="word-animation">
          <p>{{ showText.d }}</p>
        </div>
        <div class="logo-container">
          <img v-for="x in imgs" :key="x" :src="x" />
        </div>
      </div>
      <div class="w-50">
        <!-- <LottieAnimation animationData="https://assets3.lottiefiles.com/packages/lf20_SkhtL8.json"/> -->
        <img class="home-img" :src="showText.src" />
      </div>
    </div>
    <h1>About Us</h1>
    <div class="content-block">
      <div class="about-us-block w-50">
        <p>
          E-Website Provider Private Limited (EWPPL) is a professional Web
          Services ,Mobile Apps Development and Digital Marketing Company.We are
          providing proactive IT and Digital Marketing Solutions for more than 1
          years to Small-To-high Sized Businesses.We focus on fostering the
          areas like Web Design & Development, Mobile Apps Development ,SEO,
          SMM, Digital Marketing Services, Web Advertisements, and Developing
          Creative Content resulting in Fully Managed and Highly Successful
          Online Marketing Campaigns. We aim to provide the best possible
          Strategic Outcome for our valuable clients through our Affordable
          Digital Marketing Services under one roof. At e Website Provider
          Private Limited, we have onboard Dynamic Professionals and the Best
          Digital Marketers, helping us to create Powerful Brand Experiences for
          our Clients. Business Owners belonging to different Industries, in
          need of Business Growth and Marketing needs, resort to us for the best
          Business.
        </p>
        <button @click="router.push('/about')" class="bg-[yellow] text-[blue]">Know More</button>
      </div>
      <LottieAnimation
        class="w-50"
        animationData="https://assets7.lottiefiles.com/packages/lf20_450hEfBjlr.json" />
    </div>
    <ServicePage />
    <!-- <WorkPage />
    <ContactPage /> -->
  </div>
</template>

<script setup>
import ServicePage from "./ServicePage.vue";
// import WorkPage from "./WorkPage.vue";
// import ContactPage from "./ContactPage.vue";
import { computed, ref } from "vue";
import LottieAnimation from "./LottieAnimation.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const imgs = [
  "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2014.png",
  "webtest.png",
  "webdev.png",
  "ai.png",
];

const text = [
  {
    f: "Offshore",
    s: "Dedicated",
    t: "Development Team",
    src: "bnr-large-01.webp",
    d: "Delivering Software solutions to build intelligent enterprises with speed and agility",
  },
  {
    f: "Future Ready",
    s: "Software Development",
    t: "Company",
    src: "bnr-large-02.webp",
    d: "First step towards taking your business online",
  },
];

const aciveIndex = ref(0);
setInterval(() => {
  aciveIndex.value++;
  if (text.length === aciveIndex.value) aciveIndex.value = 0;
}, 5000);
const showText = computed(() => {
  return text[aciveIndex.value];
});
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: space-evenly;
}
.light-weight {
  font-weight: 300;
}
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-container {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  padding: 16px 0;
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
  background: #39cbfb;
  color: #fff;
}
.word-animation {
  display: block;
  text-align: center;
}
.content-block {
  margin: 20px;
}

@media only screen and (min-width: 1350px) {
  .home-texts {
    padding-inline: 100px 0;
  }
  .logo-container {
    height: 100px;
  }
  .content-block {
    display: flex;
  }
  p {
    letter-spacing: 4px;
    padding: 10px;
    line-height: 30px;
    font-size: 1.2rem;
  }
  .w-50 {
    width: 50%;
  }
}
.home-img {
  width: 100%;
}
@media screen and (min-width: 1000px) {
  .word-animation {
    display: flex;
  }
  .home-container {
    flex-direction: row;
  }
  h1 {
    font-size: 3rem;
    text-align: left;
  }
  p {
    text-align: left;
  }
}
.logo-container img {
  height: 100%;
}
</style>
