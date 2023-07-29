<template>
  <div id="specialOffer">
    <div class="topBanner">
      <div class="left">
        <div>
          <h1>Special Offer : Choose Free Domain Registration or SEO Audit</h1>
          <h4>
            Now for a Limited Time, Get A Free Domain Registration or A Free SEO
            Audit with your Website!
          </h4>
        </div>
        <div>
          <h1>For a free consultation</h1>
          <h2>Get in Touch Now</h2>
        </div>
        <div>
          <img src="red-underline.png" alt="Stroke" />
          <h2 class="left-align">
            <a href="tel:123-456-7890">+123-456-7890</a>
          </h2>
        </div>
      </div>
      <div class="right">
        <DiscountForm />
      </div>
    </div>

    <div class="commendation">
      <h1>A special commendation from Asha Ji herself !!</h1>
      <div class="main">
        <img src="asha-bhosle.jpg" alt="" class="rounded-[8px]" />
        <div class="right">
          <p>
            Consequuntur impedit expedita praesentium odio quae, hic accusamus
            repudiandae sed velit accusantium nobis enim minima nesciunt eum.
            Est nihil quas saepe magnam perferendis quis minus dolor temporibus
            laboriosam consequatur aliquam vero non qui ut assumenda incidunt,
            sint ab fuga placeat ex eos totam. Odit facilis, veritatis sequi
            quod dolores soluta sed cum quasi vitae quas id blanditiis?
          </p>
          <p>
            Consequuntur impedit expedita praesentium odio quae, hic accusamus
            repudiandae sed velit accusantium nobis enim minima nesciunt eum.
            Est nihil quas saepe magnam perferendis quis minus dolor temporibus
            laboriosam consequatur aliquam vero non qui ut assumenda incidunt,
            sint ab fuga placeat ex eos totam. Odit facilis, veritatis sequi
            quod dolores soluta sed cum quasi vitae quas id blanditiis?
          </p>
          <div class="credentials">
            <div class="hr"></div>
            <h3>Asha Bhosle</h3>
            <h5>Legendary playback singer</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="top">
        <h1>Digital Services</h1>
        <p>
          As your complete Digital Agency, we at E-Website Provider evolve your
          marketing strategy to all digitized versions. Designing needs thorough
          study and detailing of your USPs so as to convert them into the web
          versions. Checkout our web design services ranging from responsive
          websites to intuitive dashboard designs.
        </p>
      </div>
      <div class="bottom">
        <div class="service">
          <div class="icon"><Icon icon="ic:baseline-laptop" /></div>
          <span class="highlight">SEO</span>
        </div>
        <div class="service">
          <div class="icon"><Icon icon="mdi:responsive" /></div>
          <span class="highlight">Responsive Web Design</span>
        </div>
        <div class="service">
          <div class="icon">
            <Icon icon="carbon:ibm-cloud-direct-link-2-dedicated-hosting" />
          </div>
          <span class="highlight">Web Hosting</span>
        </div>
        <div class="service">
          <div class="icon"><Icon icon="fluent-mdl2:website" /></div>
          <span class="highlight">E-Commerce</span>
        </div>
        <div class="service">
          <div class="icon"><Icon icon="carbon:application" /></div>
          <span class="highlight">Android Mobile Application</span>
        </div>
        <div class="service">
          <div class="icon"><Icon icon="fxemoji:email" /></div>
          <span class="highlight">EMS</span>
        </div>
      </div>
    </div>

    <div class="start">
      <div class="left">
        <div class="circle">
          <div class="sideCircle"></div>
          <div class="outerCircle"></div>
          <div class="innerCircle">Start Project with Us</div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li>
            Affordable quick-start packages best suited for start-ups, new
            businesses, new app launches, real estate, restaurants, Individuals
            and Personalities.
          </li>
          <li>
            Responsive and SEO friendly, Google compatible websites starting at
            Rs.27,000.
          </li>
          <li>Template-based and ready theme-based options available.</li>
          <li>
            Advanced Custom website design package suited for larger businesses,
            e-commerce sites and business houses.
          </li>
        </ul>
        <button>Get a Quote</button>
      </div>
    </div>

    <div class="grid md:grid-cols-2 place-items-center gap-[16px] py-8 px-2">
      <div>
        <span>Frequently Asked Questions</span>
        <img src="faq-questions.jpg" alt="faq" class="w-[400px] max-w-screen" />
      </div>
      <FAQSection />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import DiscountForm from "/src/homenew/DiscountForm.vue";
import FAQSection from "/src/homenew/FAQSection.vue";
</script>

<style scoped>
.faqSection {
  width: 100%;
}
#specialOffer .topBanner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 100px 150px;
}

#specialOffer .topBanner .left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: items-center;
  height: 100%;
  width: 45%;
}

#specialOffer .topBanner .left div:nth-child(1) h1 {
  font-weight: 500;
  padding-bottom: 20px;
}

#specialOffer .topBanner .left div:nth-child(1) h4 {
  font-weight: 400;
  padding: 0 30px 50px 0;
  color: rgb(7, 7, 118);
}

#specialOffer .topBanner .left div:nth-child(2) {
  margin: 30px 0;
}

#specialOffer .topBanner .left div:nth-child(2) h1 {
  letter-spacing: 1px;
  font-weight: 500;
  padding-bottom: 10px;
}

#specialOffer .topBanner .left div:nth-child(2) h2 {
  letter-spacing: 1px;
  font-weight: 500;
  padding-bottom: 8px;
  color: #ffb900;
}

#specialOffer .topBanner .left div:nth-child(3) h2 {
  padding-top: 4px;
  color: rgb(64, 64, 228);
}

#specialOffer .topBanner .right {
  width: 55%;
  height: 100%;
}

#specialOffer .commendation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#specialOffer .commendation h1 {
  margin: 30px;
}

#specialOffer .commendation .main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0 250px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.448),
    0px -1px 10px rgba(128, 128, 128, 0.448);
}

#specialOffer .commendation .main .left {
  position: relative;
  padding: 50px;
  align-self: flex-start;
}

#specialOffer .commendation .main .right {
  padding: 25px 50px 25px 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#specialOffer .commendation .main .right p {
  letter-spacing: 0.01rem;
  margin-bottom: 16px;
}

#specialOffer .commendation .main .right .credentials {
  width: 100%;
  margin-top: auto;
}

#specialOffer .commendation .main .right .credentials .hr {
  width: 100%;
  height: 2px;
  background-color: #ffb900;
}

#specialOffer .commendation .main .right .credentials h3 {
  margin: 10px 20px 5px;
  text-align: right;
  color: rgb(7, 7, 126);
}

#specialOffer .commendation .main .right .credentials h5 {
  margin: 0 20px 0;
  text-align: right;
  font-weight: 300;
}

#specialOffer .services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.448),
    0px -1px 10px rgba(128, 128, 128, 0.448);
}

#specialOffer .services .top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#specialOffer .services .top h1 {
  text-align: center;
  margin: 40px;
}

#specialOffer .services .top p {
  text-align: center;
  font-weight: 400;
  margin-bottom: 50px;
  padding: 5px 90px;
}

#specialOffer .services .bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;
}

#specialOffer .services .bottom .service {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
}

#specialOffer .services .bottom .service .icon {
  font-size: 2rem;
  margin-bottom: 20px;
  padding: 2rem;
  border-radius: 50%;
  background-color: #ffb900;
}

#specialOffer .services .bottom .service span {
  font-weight: 500;
  display: block;
  text-align: center;
  margin: 0 0 10px;
}

#specialOffer .start {
  margin: 80px 250px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
}

#specialOffer .start .left {
  padding: 40px;
  position: relative;
}

#specialOffer .start .left .circle {
  position: relative;
  width: 300px;
  height: 300px;
}

#specialOffer .start .left .sideCircle {
  position: absolute;
  bottom: -50px;
  left: 0;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 1px solid grey;
  z-index: 1;
  filter: drop-shadow(0px 0px 5px rgb(128, 128, 128)),
    inset drop-shadow(0px 0px 5px rgb(128, 128, 128));
}

#specialOffer .start .left .outerCircle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: 1px solid #fff;
  z-index: 2;
  background: #000;
}

#specialOffer .start .left .innerCircle {
  font-size: 35px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid #fff;
  z-index: 3;

  filter: drop-shadow(0px 0px 5px rgb(128, 128, 128)),
    inset drop-shadow(0px 0px 5px rgb(128, 128, 128));
}

#specialOffer .start .right ul {
  padding: 20px 40px 0px 0px;
}

#specialOffer .start .right ul li {
  padding: 10px;
}

#specialOffer .start .right button {
  margin: 20px 0 0 10px;
  background-color: #ffb900;
  padding: 15px 20px;
  border: 2px solid white;
  border-radius: 50px;
  box-shadow: 1px 3px 10px #ccc;
}

#specialOffer .start .right .faq-btn {
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  color: #ffb900;
  transition: all 0.3s linear;
}

.f-align-f-start {
  align-items: flex-start;
}

#specialOffer .faq-s {
  margin-top: 120px;
}

#specialOffer .faq-s .left div {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: red;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  #specialOffer .topBanner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 40px 80px;
  }

  #specialOffer .topBanner .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    height: 100%;
    /* border: 1px solid black; */
    width: 100%;
    padding-left: 20px;
  }

  #specialOffer .topBanner .left div:nth-child(1) h1 {
    padding-bottom: 20px;
  }

  #specialOffer .topBanner .left div:nth-child(1) h4 {
    padding: 0px;
    color: rgb(7, 7, 118);
  }

  #specialOffer .topBanner .left div:nth-child(2) {
    margin: 30px 0;
  }

  #specialOffer .topBanner .left div:nth-child(2) h1 {
    letter-spacing: 1px;
    padding-bottom: 10px;
  }

  #specialOffer .topBanner .left div:nth-child(2) h2 {
    letter-spacing: 1px;
    padding-bottom: 8px;
    color: #ffb900;
  }

  #specialOffer .topBanner .left div:nth-child(3) h2 {
    padding-top: 4px;
    color: rgb(64, 64, 228);
  }

  #specialOffer .topBanner .right {
    width: 55%;
    height: 100%;
  }

  #specialOffer .commendation h1 {
    margin: 20px;
    text-align: center;
  }

  #specialOffer .commendation .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px;
    height: auto;
    padding: 10px;
    margin: 20px;
  }

  #specialOffer .commendation .main .left {
    padding: 20px;
  }

  #specialOffer .commendation .main .left img {
    width: auto;
    height: 200px;
  }

  #specialOffer .commendation .main .right {
    height: auto;
  }

  #specialOffer .services {
    margin: 30px 0 0;
    padding: 15px 30px;
  }

  #specialOffer .services .top h1 {
    margin: 20px;
  }

  #specialOffer .services .top p {
    text-align: center;
    margin-bottom: 8px;
    padding: 5px 0px;
  }

  #specialOffer .services .bottom {
    /* display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center; */
    width: 100%;
    margin: 0 5px;
  }

  #specialOffer .services .bottom .service {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    align-items: center;
    width: 170px;
    /* padding: 0 5px; */
    /* border: 1px solid black; */
    margin-bottom: 8px;
  }

  #specialOffer .start {
    margin: 80px 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #specialOffer .start .left {
    padding: 0px;
    position: relative;
    width: 100%;
  }

  #specialOffer .start .left .circle {
    position: relative;
    width: 100%;
    height: 100px;
  }

  #specialOffer .start .left .sideCircle {
    display: none;
  }

  #specialOffer .start .left .outerCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100px;
    border-radius: 20px;
  }

  #specialOffer .start .left .innerCircle {
    width: 93%;
    height: 80px;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.448),
      0px -1px 10px rgba(128, 128, 128, 0.448);
  }

  #specialOffer .start .right ul {
    padding: 30px;
  }

  #specialOffer .start .right ul li {
    padding: 10px;
  }

  #specialOffer .start .right button {
    margin: 0;
    background-color: #ffb900;
    padding: 10px 15px;
    border: 2px solid white;
    border-radius: 50px;
    box-shadow: 1px 3px 10px #ccc;
  }

  #specialOffer .start .right .faq-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: #ffb900;
    transition: all 0.3s linear;
  }
  #specialOffer .faq-s .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #specialOffer .faq-s .left img {
    height: auto;
    width: 200px;
    margin: auto;
  }

  #specialOffer .faq-s .left div {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: red;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 600px) {
  #specialOffer .topBanner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 40px 20px;
  }

  #specialOffer .topBanner .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    height: 100%;
    /* border: 1px solid black; */
    width: 80%;
  }

  #specialOffer .topBanner .right {
    width: 90%;
    height: 100%;
  }

  #specialOffer .commendation h1 {
    margin: 20px;
    text-align: center;
  }

  #specialOffer .commendation .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 50px;
    height: auto;
    padding: 10px;
    margin: 20px;
  }

  #specialOffer .commendation .main .left {
    padding: 20px;
  }

  #specialOffer .commendation .main .left img {
    width: auto;
    height: 200px;
  }

  #specialOffer .commendation .main .right {
    height: auto;
  }

  #specialOffer .services {
    margin: 30px 0 0;
    padding: 15px 30px;
  }

  #specialOffer .services .top h1 {
    margin: 20px;
  }

  #specialOffer .services .top p {
    text-align: center;
    font-weight: 400;
    margin-bottom: 8px;
    padding: 5px 0px;
  }

  #specialOffer .services .bottom {
    /* display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center; */
    width: 100%;
    margin: 0 5px;
  }

  #specialOffer .services .bottom .service {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    align-items: center;
    width: 170px;
    /* padding: 0 5px; */
    /* border: 1px solid black; */
    margin-bottom: 8px;
  }

  #specialOffer .start {
    margin: 80px 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #specialOffer .start .left {
    padding: 0px;
    position: relative;
    width: 100%;
  }

  #specialOffer .start .left .circle {
    position: relative;
    width: 100%;
    height: 100px;
  }

  #specialOffer .start .left .sideCircle {
    display: none;
  }

  #specialOffer .start .left .outerCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100px;
    border-radius: 20px;
  }

  #specialOffer .start .left .innerCircle {
    font-size: 20px;
    width: 93%;
    height: 80px;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.448),
      0px -1px 10px rgba(128, 128, 128, 0.448);
  }

  #specialOffer .start .right ul {
    padding: 30px;
  }

  #specialOffer .start .right ul li {
    padding: 10px;
  }

  #specialOffer .start .right button {
    margin: 0;
    background-color: #ffb900;
    padding: 10px 15px;
    border: 2px solid white;
    border-radius: 50px;
    box-shadow: 1px 3px 10px #ccc;
  }

  #specialOffer .start .right .faq-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: #ffb900;
    /* transition: var(--transition); */
    transition: all 0.3s linear;
  }

  /* #specialOffer .faq-s .left {
        width: 100%;
    } */

  #specialOffer .faq-s .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #specialOffer .faq-s .left img {
    height: auto;
    width: 200px;
    margin: auto;
  }

  #specialOffer .faq-s .left div {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: red;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
