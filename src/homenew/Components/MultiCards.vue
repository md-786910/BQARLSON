<template>
  <div>
    <section class="section-padding" id="overview">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="overview-right">
              <h3 class="sec-head">{{ data[0]?.heading }}</h3>
              <h4 class="sub-head">{{ data[0]?.subheading }}</h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div v-if="data[1]?.desc" class="white-box box1">
              <div class="box-img">
                <img :src="data[1]?.img" alt="" />
              </div>
              <p>
                <b>{{ data[1]?.title }}</b>
              </p>
              <p>{{ data[1]?.desc }}</p>
            </div>
            <div v-if="data[3]?.desc" class="white-box box3">
              <div class="box-img">
                <img :src="data[3]?.img" alt="" />
              </div>
              <p>
                <b>{{ data[3]?.title }}</b>
              </p>
              <p>{{ data[3]?.desc }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div v-if="data[2]?.desc" class="white-box box2">
              <div class="box-img">
                <img :src="data[2]?.img" alt="" />
              </div>
              <p>
                <b>{{ data[2]?.title }}</b>
              </p>
              <p>{{ data[2]?.desc }}</p>
            </div>
            <div v-if="data[4]?.desc" class="white-box box4">
              <div class="box-img">
                <img :src="data[4]?.img" alt="" />
              </div>
              <p>
                <b>{{ data[4]?.title }}</b>
              </p>
              <p>{{ data[4]?.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  data: { type: Array, default: () => [] },
});
</script>

<style scoped>
.section-padding {
  padding: 5rem 0;
  display: block;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-lg-4,
.col-md-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col-lg-4 {
  /* -ms-flex: 0 0 33.333333%; */
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.overview-right {
  padding: 3rem 3rem 0 3rem;
}

.overview-right .sec-head {
  padding-left: 2rem;
  position: relative;
  margin-top: 10rem;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  line-height: 1.2;
}

.overview-right .sec-head:before {
  content: "";
  position: absolute;
  left: -0.5rem;
  top: -2rem;
  width: 6.5rem;
  height: 6.5rem;
  background-color: #ffb900;
  border-radius: 50%;
  z-index: -1;
}
.overview-right .sec-head:after {
  content: url("https://www.dimakhconsultants.com/img/circle-dashed-small.png");
  position: absolute;
  left: 3rem;
  top: -5rem;
}
.overview-right .sub-head {
  font-size: 1.3rem;
  font-weight: 500;
}
.white-box {
  background-color: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin-bottom: 3rem;
  border-radius: 1rem;
}
.white-box p {
  color: #000;
  text-align: left;
}
.box-img {
  position: relative;
}
.box-img:before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 4.5rem;
  background-color: #ffb900;
  left: -2rem;
  top: 0;
}
.white-box.box1 {
  position: relative;
  margin-top: 10rem;
}

@media (max-width: 768px) {
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .overview-right .sec-head {
    margin-top: 0;
  }
}
@media (max-width: 426px) {
  .col-md-6 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .overview-right {
    padding: 5px;
  }
  .white-box.box1 {
    margin-top: 4rem;
  }
}
</style>
