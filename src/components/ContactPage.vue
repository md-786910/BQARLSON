<template>
  <div class="page-container">
    <div class="contact-container">
      <lottie-animation
        class="contact-bg"
        animation-data="https://assets9.lottiefiles.com/packages/lf20_kfcwv9hc.json" />
      <form @submit.prevent="onFormSubmit">
        <h1>Contact <span class="highlight">Us</span></h1>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          required />
        <label for="number">Contact No.:</label>
        <input
          type="number"
          id="number"
          name="number"
          v-model="formData.number"
          required />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
          required />
        <label>Services</label>
        <select v-model="formData.service" required class="text-[#000]">
          <option value="" disabled hidden>Select an option</option>
          <option value="UI / UX Design">UI / UX Design</option>
          <option value="software Development">Software Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Search Engine Optimization">
            Search Engine Optimization
          </option>
          <option value="web design">Web Designing</option>
          <option value="web hosting">Web Hosting</option>
          <option value="software testing">Software Testing</option>
          <option value="Professional Email Setup">
            Professional Email Setup
          </option>
          <option value="IT Support">IT Support</option>
          <option value="LOGO Design">LOGO Design</option>
          <option value="digital marketing">Digital Marketing</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Others">Others</option>
        </select>
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          v-model="formData.message"
          required></textarea>
        <input type="submit" value="Submit" class="btn" />
      </form>
      <Teleport v-if="message" to="body">
        <div class="message-modal">
          <div class="message">
            {{ message }}
          </div>
        </div>
      </Teleport>
    </div>
    <div class="middle">
      <img
        src="https://static.wixstatic.com/media/3b771a_1b409b0fad1f455381374af3dc31c2d8~mv2.png/v1/fill/w_560,h_392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contact%20us%20png.png"
        alt="alt" />
      <div>
        <div>
          <h1><span>General</span> Enquiries</h1>
          <p>info@ewebsiteprovider.com</p>
        </div>
        <div class="mid-2">
          <h1><span>Support</span> Enquiries</h1>
          <p>support@ewebsiteprovider.com</p>
        </div>
        <div>
          <h1><span>Hiring</span>Enquiries</h1>
          <p>hr@ewebsiteprovider.com</p>
        </div>
      </div>
    </div>
    <h1 class="heading highlight">Alternatives to get in touch with us</h1>
    <div class="grid-layout">
      <div class="card">
        <div class="image-container">
          <img src="https://freepngimg.com/save/23284-phone-photo/2051x2051" />
          <div class="circular-anim">
            <div class="circle"></div>
            <div class="circle-2"></div>
          </div>
        </div>
        <h4>Call us</h4>
        <p>+1 9296470461</p>
        <p>+91 7324865944</p>
      </div>
      <div class="card">
        <div class="image-container">
          <img
            src="https://freepngimg.com/thumb/graphic_design/47863-9-email-image-png-file-hd.png" />
          <div class="circular-anim">
            <div class="circle"></div>
            <div class="circle-2"></div>
          </div>
        </div>
        <h4>Email us</h4>
        <p>support@ewebsiteprovider.com</p>
        <p>ceo@ewebsiteprovider.com</p>
      </div>
      <div class="card">
        <div class="image-container">
          <img src="https://cdn-icons-png.flaticon.com/512/4942/4942069.png" />
          <div class="circular-anim">
            <div class="circle"></div>
            <div class="circle-2"></div>
          </div>
        </div>
        <h4>visit us</h4>
        <p>
          Head Office:-Floor No-1 ,Block Sector-Kharadi road,Near-Reliance mall
          kharadi Pune, Pin-411014
        </p>
      </div>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4901489987274!2d73.93466667515524!3d18.551928318215722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c336435ac1e9%3A0xe460041492dae378!2sReliance%20Mall!5e0!3m2!1sen!2sin!4v1690059095457!5m2!1sen!2sin"
        width="100%"
        height="350"
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LottieAnimation from "./LottieAnimation.vue";

const formDefaults = {
  name: "",
  email: "",
  message: "",
  service: "",
  number: "",
};

const formData = ref(formDefaults);
const message = ref("");

function onFormSubmit() {
  message.value = "Submitted Succesfully";
  setTimeout(() => {
    message.value = "";
  }, 1000);
  formData.value = formData;
}
</script>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.image-container img {
  height: 80px;
  width: 80px;
  position: absolute;
}

.circular-anim {
  width: 140px;
  height: 140px;
  border: 2px dotted #ccc;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.circle,
.circle-2 {
  width: 15px;
  height: 15px;
  background: #ff777f;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
  display: none;
}
.circle {
  background: #2d65e2;
}
.card:hover .circle {
  animation: circle 6s linear infinite;
  display: block;
}
.card:hover .circle-2 {
  animation: circle-2 6s linear infinite;
  display: block;
}

@keyframes circle {
  0% {
    transform: rotate(-180deg) translate(-70px);
  }
  50% {
    background: #ff777f;
  }
  100% {
    transform: rotate(180deg) translate(-70px);
  }
}
@keyframes circle-2 {
  0% {
    transform: rotate(180deg) translate(-70px);
  }
  50% {
    background: #2d65e2;
  }
  100% {
    transform: rotate(-180deg) translate(-70px);
  }
}
.mid-2 {
  translate: 100px 0;
}
.middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.middle > div {
  width: 50%;
}
.middle h1 {
  color: #ffffff;
  margin-top: 80px;
}

.middle h1 span {
  position: relative;
  z-index: 1;
}

.middle h1 span::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #190897;
  border-radius: 50%;
  translate: -16px -16px;
  z-index: -1;
}

.middle p {
  color: #ffffff;
  text-decoration: underline;
}
.map {
  margin: 32px 0;
}
.card {
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.card h4 {
  margin-top: 30px;
}

.card p {
  margin-top: 10px;
}

.card:hover {
  transform: scale(1.05);
}
.contact-bg {
  background: url("/public/contact-bg.jpg") no-repeat;
  background-size: 80% 100%;
}
.message-modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: #ffffffaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  color: green;
  border: 1px solid #0000005a;
  background: white;
  padding: 50px;
  border-radius: 10px;
}
.contact-container {
  margin-top: 25px;
}

label {
  display: block;
  font-weight: bold;
}

input,
textarea,
select,
option {
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 5px;
}

textarea {
  height: 50px;
  resize: none;
  overflow: auto;
}
.btn {
  background: #0078ff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background: #5ad9ff;
}
footer {
  box-shadow: 0px -1px 0px 0 #ffffff3a;
}
@media only screen and (min-width: 1350px) {
  .middle {
    flex-direction: row;
  }
  .contact-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}
</style>
