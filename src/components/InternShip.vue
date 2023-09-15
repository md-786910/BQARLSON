<template>
  <div class="page-container">
    <h1 class="pb-4">Internship</h1>
    <p class="text-left">
      Welcome to the E Website Provider PVT. LTD. Internship Program Application
      Form! We're excited that you're interested in joining our team and gaining
      valuable experience in your chosen field. <br />
      Our internship program is designed to provide hands-on experience and
      mentorship to aspiring professionals.
    </p>
    <h2 class="text-left py-4">Why Apply</h2>
    <p class="text-left" v-for="(data, i) in whyList" :key="i">{{ data }}</p>
    <h2 class="text-left py-4">How to Apply</h2>
    <p class="text-left" v-for="(data, i) in howList" :key="i">{{ data }}</p>
    <h3 class="text-left py-4">Location: Remote</h3>
    <h2 class="text-left py-4">Certificate of Completion</h2>
    <p class="text-left">
      Successful interns will receive a certificate recognizing their
      achievement upon completing the internship program, subject to meeting
      specified requirements.
    </p>
    <h2 class="text-left py-4">Question?</h2>
    <p class="text-left">
      If you have any questions or need further information, please contact at
      hr@ewebsiteprovider.com or 7324865944.<br />
      Thank you for your interest in the E Website Provider PVT. LTD. Internship
      Program. We look forward to reviewing your application and potentially
      welcoming you to our team!
    </p>
  </div>
</template>

<script setup>
const whyList = [
  "Gain practical skills and real-world experience in your chosen field.",
  "Work with a passionate and experienced team.",
  "Network with industry professionals.",
  "Opportunity to receive a certificate upon successful completion.",
];
const howList = [
  "Please fill out this application form with accurate information.",
  "Select the internship role(s) you are interested in.",
  "Showcase your qualifications, skills, and enthusiasm.",
  "Submit your application",
];
</script>

