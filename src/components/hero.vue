<template>
  <div  class="flex justify-content-center align-items-center trephero">
    <carousel :per-page="1" :autoplay="true" :loop="true" autoplayTimeout="5000">
      <slide>
        <img class="hero-img" src="../assets/img/boy.jpg" alt="">
      </slide>
      <slide>
        <img class="hero-img" src="../assets/img/group.jpg" alt="">
      </slide>
      <slide>
        <img class="hero-img" src="../assets/img/pages.jpg" alt="">
      </slide>
    </carousel>
    <!-- <div class="black-overlay"></div> -->
    <!-- <h1 class="hero-text">Children's right must be protected</h1> -->
  </div>
</template>
<style lang="scss" scoped>
  .trephero {
    width: 100%;
    margin-bottom: 100px;
      img.hero-img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
      }
      .black-overlay {
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100vh;
        background: rgba($color: #000000, $alpha: 0.5);
      }
      h1.hero-text {
        position: absolute;
        color: #FFF;
      }
  }
  @media only screen and (max-width: 720px) {
    .trephero {
    }
  }
</style>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'trephero',
  props: {
    msg: String,
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
<style scoped>

</style>
