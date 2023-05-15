<template>
  <div class="page-container">
    <div class="contact-container">
      <form @submit.prevent="onFormSubmit">
        <h1 class="heading">Contact Us</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="formData.name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="formData.email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" v-model="formData.message" required></textarea>
        <input type="submit" value="Submit" class="btn">
      </form> 
      <Teleport v-if="message" to="body">
        <div class="message-modal">
          <div class="message">
            {{ message }}
          </div>
        </div>
      </Teleport>
      <div class="detail-container">
        <h1 class="heading">Get in touch</h1>
        <p><img src="location.svg" alt="location"> Head Office:-Floor No-1 ,Block Sector-Kharadi road,Near-Reliance mall kharadi Pune,Maharashtra, Pin-411014</p>
        <p><img src="location.svg" alt="location"> Branch Office:-3A-Sri Durga Enclave, Plot no 39B, 2nd Street, River View Residency, Karapakkam, Chennai, Tamil Nadu 600097</p>
        <p><img src="location.svg" alt="location"> Branch Office:-Floor no 2, Vidhyashri Building, Chowdeshwari Layout, Marathalli, Banglore, 560037</p>
        <p><img src="mobile.svg" alt="location"> +918873732631 / +918800604320 / +917324865944</p>
        <p><img src="mail.svg" alt="location"> ceo@ewebsiteprovider.com</p>
        <p><img src="mail.svg" alt="location"> support@ewebsiteprovider.com</p>
        <h3>Follow Us</h3>
        <div class="contact-icons">
          <a href="https://www.linkedin.com/company/e-websiteprovider/" target="blank"><img src="linkedin.svg" alt="ln"></a>
          <a href="https://www.facebook.com/ewebsiteprovider.official/" target="blank"><img src="facebook.svg" alt="fb"></a>
          <a href="https://twitter.com/ewprovider/" target="blank"><img src="twitter.svg" alt="twitter"></a>
          <a href="https://www.instagram.com/ewebsiteprovider/" target="blank"><img src="instagram.svg" alt="insta"></a>
        </div>
        <p class="cp-text">© Copyright 2022 e-Website Provider. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const formDefaults = {
  name:'',
  email:'',
  message:''
}

const formData = ref(formDefaults)
const message = ref("")

function onFormSubmit() {
  message.value = 'Submitted Succesfully'
  setTimeout(()=>{
  message.value = ''
  },1000)
  formData.value = formData
}
</script>

<style scoped>
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
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 5px;
}

textarea {
  height: 150px;
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
.cp-text { 
  color: #ffffff1a; 
  text-shadow: 0 1px #ffffff5a;
}

.contact-icons{
  padding: 5px;
  margin: 10px;
}

.contact-icons a{
  margin-right: 20px;
}
a img {
  width: 30px;
}

p {
  text-align: left;
}

@media only screen and (min-width: 1350px) { 
  .contact-container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 25px;
  }
}
</style>