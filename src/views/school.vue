<template>
<!-- eslint-disable -->
  <div class="flex column justify-content-center align-items-center about">
    <section class="flex col-lg-6 justify-content-center align-items-center about-hero ">
       <div class="pages-img-holder">
         <img src="../assets/img/full-frame-shot-of-stadium-247839.jpg" alt="">
       </div>
      <h1 class="page-quote">Every story has a beginning, this is ours</h1>
    </section>
    <section class="flex flex-wrap col-lg-6 justify-content-center align-items-center ss2">
      <span class="flex column align-items-center nowrap">
        <p class="heading text-left">EDUCATION / SCHOOL SUPPORT</p>
        <img class="logo" src="../assets/logo.svg" alt="">
        <div class="flex flex-wrap justify-content-center align-items-center reverse-this">
          <p class='rd-def par text-left'>
            Most schools across rural communities and remote villages lack basic infrastructure and learning tools required for 21st-century education. Fair Afriql tackles this by adopting public schools in partnership with the government and providing new learning spaces, adequate infrastructure and up to date technology to ensure that every child irrespective of their background have access to equal educational support. We also have Specialised training to all members of fair through our integrity school of thought Set up fairafriq integrity school of thought in all African community and Live integrity personal development team program(IPDTP)  
          </p>
          <img class="rd-img" src="../assets/img/young.jpg" alt="">
        </div>
      </span>
    </section>
   </div>
</template>
<style lang="scss" scoped>
.logo {
  height: 80px;
  object-fit: contain;
  margin: 20px 30px;
}
.about-hero {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 500px;
  width: 100%;
  .page-quote {
    z-index: 9999;
    color: #f7f7f7;
  }
  .pages-img-holder {
    position: absolute;
    width: 100%;
    img {
      width: 100%;
      height: 500px;
    }
  }
}
.about h1 {
  font-weight: 32px;
  font-weight: normal;
}
.rd-prop {
  background: #fcfcfc;
}
.rd-pros article {
  margin: 15px;
}
.rd-def {
  max-width: 500px;
  text-align: center;
  padding: 10px 20px;
}
.rd-img {
    width: 400px;
    height: 300px;
    object-fit: cover;
}
.ss2 {
  margin: 50px 0;
}
.about {
  padding: 0px;
}
@media only screen and (max-width: 720px) {
  .ss2 {
    margin: 30px;
  }
    .nodisplay {
      display: none;
      visibility: hidden;
    }
    .about {
      padding: 0px;
    }
    .rd-img {
      width: 100%; object-fit: cover;
    }
    .rd-def {
      width: 100%;
    }
    .commonpadding {
      padding: 20px 0;
    }
    .reverse-this {
      flex-direction: column-reverse;
    }
    .col-lg-6, .col-lg-5, .col-lg-3, .col-sm-5 {
      width: 100%;
    }
  }
</style>
<script>
export default {
  data() {
    return {
      texts: ['Andriod', 'Medical', 'Nigeria'],
      count: 0,
    };
  },
  mounted() {
    this.changeText();
  },
  methods: {},
};
</script>
