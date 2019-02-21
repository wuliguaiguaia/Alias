<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(list,index) in lists" :key="index">
        <img :src="list.img" alt class="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: {
    lists: {
      type: Array,
      require: true
    }
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new Swiper(".swiper-container", {
        // allowTouchMove: false,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-slide img {
  // width: 100%;
  // height: 100%;
}
@media screen and (max-width: 768px) {
  .swiper-slide img {
    // width: 100%;
  }
}
</style>
