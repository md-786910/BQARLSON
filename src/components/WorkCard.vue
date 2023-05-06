<template>
  <div class="work-details" @mouseover="onMoseEnter" @mouseleave="onMouseLeave">
    <img :src="data.img" :alt="data.name">
    <div class="work-section" :style="{display: isHovering ? 'flex':'none'}">
      <h3>{{ data.name + ' / ' + data.type }}</h3>
      <div class="actions">
        <a :href="data.link" rel="noopener noreferrer"><img src="link.svg" alt="link" /></a>
        <!-- <img src="zoom.svg" alt="zoom" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  data: Object
})

const isHovering = ref()
function onMoseEnter() {
  isHovering.value = true
}

function onMouseLeave() {
  isHovering.value = false
}
</script>

<style scoped>
.work-details {
  width: 100%;
  min-height: 400px;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #00000040;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
}

.work-details img {
  max-width: 250px;
  max-height: 250px;
}

.work-section {
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: backscene 1s forwards;
  border-radius: 10px;
}
.actions img {
  display: inline;
  height: 30px;
  width: 30px;
  margin-left: 8px;
}

@keyframes backscene {
  0%   {
    background: #0078ff00;
    scale: 0;
  }
  100% {
     background: #0078ff99;
    scale: 1; 
  }
}
</style>