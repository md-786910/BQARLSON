<template>
  <div class="page-container">
    <div class="contact-container">
      <lottie-animation class="contact-bg" animation-data="https://assets9.lottiefiles.com/packages/lf20_kfcwv9hc.json"/>
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
    </div>
    <FooterLayout/>
  </div>
</template>

<script setup>
import { ref } from "vue"
import FooterLayout from './FooterLayout.vue'
import LottieAnimation from './LottieAnimation.vue'

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
.contact-bg {
  background: url('/public/contact-bg.jpg') no-repeat;
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
footer {
  box-shadow: 0px -1px 0px 0 #ffffff3a;
}
@media only screen and (min-width: 1350px) { 
  .contact-container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 25px;
  }
}
</style>