<template>
  <div class="work-details" @mouseover="onMoseEnter" @mouseleave="onMouseLeave">
    <div class="flip-container">
      <div class="image-block">
      <img :src="data.img" :alt="data.name">
      <p v-if="data.description">{{data.description}}</p>
      </div>
      <div class="work-section">
        <h3>{{ data.name + ' / ' + data.type }}</h3>
        <div class="actions">
          <a :href="data.link" rel="noopener noreferrer"><img src="link.svg" alt="link" /></a>
        </div>
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
  height: 300px;
  box-shadow: -1px 1px 0px 1px #e0f1f944;
  border: 1px solid #00000040;
  border-radius: 10px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  perspective: 500px;
}

.work-details:hover .flip-container {
  transform: rotateY(180deg);
}

.flip-container {
  background-image: linear-gradient(180deg, #FFFFFF 0%, #e0f1f9 100%);
  height: 100%;
  width: 100%;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

p {
  line-height: 30px;
  color: #000000aa;
  height: calc(100% - 150px);
}
.work-details img {
  width: 150px;
}

.image-block {
  position: absolute;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  backface-visibility: hidden;
  z-index: 2;
  transform: rotateY(0deg);
  top: 0;
  left: 0;
}
.work-section {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: backscene 1s forwards;
  border-radius: 10px;
  left: 100%;
  overflow: hidden;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  top: 0;
  left: 0;
}

.flip-container:hover .work-section {
  animation: expand 0.5s forwards;
}

@keyframes expand {
  0% {
    scale: 0;
  }
  100% {
    scale: 1;
  }
}
.actions img {
  display: inline;
  height: 30px;
  width: 30px;
  margin-left: 8px;
}
</style>