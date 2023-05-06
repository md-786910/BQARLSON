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
      <div class="detail-container">
        <h1 class="heading">get in touch</h1>
        <p><img src="location.svg" alt="location"> Head Office:-Floor No-1 ,Block Sector-Kharadi road,Near-Reliance mall kharadi Pune,Maharashtra, Pin-411014</p>
        <p><img src="location.svg" alt="location"> Branch Office:-3A-Sri Durga Enclave, Plot no 39B, 2nd Street, River View Residency, Karapakkam, Chennai, Tamil Nadu 600097</p>
        <p><img src="location.svg" alt="location"> Branch Office:-Floor no 2, Vidhyashri Building, Chowdeshwari Layout, Marathalli, Banglore, 560037</p>
        <p><img src="mobile.svg" alt="location"> +918873732631</p>
        <p><img src="mail.svg" alt="location"> ceo@ewebsiteprovider.com</p>
        <p><img src="mail.svg" alt="location"> support@ewebsiteprovider.com</p>
        <div class="contact-icons">
          <a href=""><img src="linkedin.svg" alt="ln"></a>
          <a href=""><img src="facebook.svg" alt="fb"></a>
          <a href=""><img src="twitter.svg" alt="twitter"></a>
          <a href=""><img src="instagram.svg" alt="insta"></a>
        </div>
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

function onFormSubmit() {
  console.log("error while submitting form")
  formData.value = formData
}
</script>

<style scoped>
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

.contact-icons,
p {
  padding: 5px;
  margin: 10px;
}

.contact-icons a{
  margin-right: 20px;
}
a img {
  width: 30px;
}

@media only screen and (min-width: 1350px) { 
  .contact-container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 25px;
  }
}
</style>