<template>
  <div  class="flex justify-content-center align-items-center trephero">
    <img class="hero-img" src="../assets/img/boy.jpg" alt="">
    <div class="black-overlay"></div>
    <h1 class="hero-text">Children's right must be protected</h1>
  </div>
</template>
<style lang="scss" scoped>
  .trephero {
    position: absolute;
    right: 0;
    width: 100%;
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
    display: none;
    opacity: 0;
    visibility: hidden;
    }
  }
</style>
<script>
export default {
  name: 'trephero',
  props: {
    msg: String,
  },
};
</script>
<style scoped>

</style>
