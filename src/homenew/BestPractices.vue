<template>
  <h2>Our Best Practices <span class="highlight">Make Your Life Easy</span></h2>
  <div class="best-practice-container">
    <div class="bestpraccard-column">
      <div class="card">
        <div class="image-container">
          <img src="./discover-requirement.png" />
          <div class="circular-anim">
            <div class="circle"></div>
          </div>
        </div>
        <h4 class="heading">Discovering Requirements</h4>
        <p>
          We work to eliminate miscommunications, ambiguous requirements,
          unclear vocabulary, and other challenges and discover your need
          painstakingly to guarantee the best results. You’ll rest easy that all
          your needs have been recorded and articulated.
        </p>
      </div>
    </div>
    <div class="bestpraccard-column">
      <div class="card">
        <div class="image-container">
          <img src="./solution-designing.png" />
          <div class="circular-anim">
            <div class="circle-2"></div>
          </div>
        </div>
        <h4 class="heading">Solution Designing</h4>
        <p>
          We believe in an iterative, step-by-step process in which you are
          involved at every stage. Our designs help you instantly visualize your
          final solution. You partner with us to successfully implement the best
          solution you want.
        </p>
      </div>
    </div>
    <div class="bestpraccard-column">
      <div class="card">
        <div class="image-container">
          <img src="./solution-building.png" />
          <div class="circular-anim">
            <div class="circle"></div>
          </div>
        </div>
        <h4 class="heading">Dependable Solution Building</h4>
        <p>
          Technology Jargon can be terrifying. You feel a loss of control when
          new technical terms are thrown around. We communicate in simple terms,
          so you are in control throughout the development process.
        </p>
      </div>
    </div>
    <div class="bestpraccard-column">
      <div class="card">
        <div class="image-container">
          <img src="./delivering.png" />
          <div class="circular-anim">
            <div class="circle-2"></div>
          </div>
        </div>
        <h4 class="heading">Delivering</h4>
        <p>
          Most deliveries are hurried and incomplete. The secret to our success
          is delivering an extraordinary user experience. Receiving a web
          solution is all about how it makes you feel. We work extra to deliver
          the experience you desire.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.best-practice-container {
  display: grid;
  gap: 32px;
}

@media only screen and (min-width: 800px) {
  .best-practice-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1350px) {
  .best-practice-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
.card {
  text-align: center;
}
.bestpraccard-column:nth-child(even) {
  padding-top: 50px;
}
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
img {
  height: 100px;
  width: 100px;
  position: absolute;
  translate: 4px 8px;
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
.bestpraccard-column:hover .circle {
  display: block;
  animation: circle 6s linear infinite;
}
.bestpraccard-column:hover .circle-2 {
  display: block;
  animation: circle 6s linear infinite;
}
@keyframes circle {
  0% {
    transform: rotate(0deg) translate(-70px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-70px) rotate(-360deg);
  }
}
</style>
