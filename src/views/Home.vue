<template>
  <div class="flex column nowrap col-lg-6">
    <section class="flex col-lg-6 f-sec vh-100">
        <div class="home flex col-lg-6 flex-wrap justify-content-space-between align-items-center">
          <div class="flex column nowrap mar-for-mobile">
            <h1 class="echo text-left">Test, Refine, <br> Evaluate <br> and Prototype</h1>
            <p class="text-20 text-left mar-tb-15">Building Africa's biggest IoT lab.</p>
            <div class="flex">
              <router-link :to="{name: 'contact'}">
                <a class="btn btn-colored" href=""> Talk to Us</a>
              </router-link>
            </div>
            <div class="plusify">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 205 71" width="320px" height="120px" style="enable-background:new 0 0 205 71;" xml:space="preserve">
              
              <polyline class="st0" points="7.5,37.5 49.5,37.5 57.5,21.5 66.5,52.5 72.5,31.5 78.5,46.5 91.5,9.5 101.5,50.5 111.5,27.5 
                121.5,59.5 124.5,37.5 202.5,37.5 "/>
              </svg>
            </div>
          </div>
          <trephero></trephero>
        </div>
    </section>
    <section class="flex column nowrap col-lg-6 t-sec justify-content-center align-items-center">
      <p class="heading text-left">EXPERIENCE THE NEXT PHASE OF CONNECTED TECHNOLOGY</p>
      <p class="par col-lg-3">
        TREP LABS is designed to provide and build affordable hardware solutions to health problems in Africa. The lab believes that connectivity will shift health care from curing sickness to enabling wellness.
      </p>
      <router-link :to="{name: 'about'}">
        <a class="btn btn-colored" href=""> Learn more about us</a>
      </router-link>
    </section>
    <section class=" flex col-lg-6 align-items-center justify-content-center flex-wrap product-section">

          <img class="pl-img" src="../assets/rd.svg" alt="image of Realdrip device">
          <div class="flex justify-content-center col-lg-3 column nowrap commonpadding">
            <p class="heading text-left">THE REALDRIP DEVICE </p>
            <p class="col-lg-6 text-left par">
              REALDRIP, a non-invasive device makes blood transfusion and drip treatment simpler and safer by continuously monitoring the flow rate, volume administered and automating the treatment process. This device leverages the IoT technology to eliminate the guesswork in setting IV flow rate, monitoring dosages and time taken as indicated on the treatment plan. This information is connected to dashboard and alerts to keep health professionals informed about each patient's specific situation.
            </p>
            <span class="flex">
              <router-link :to="{name: 'realdrip'}">
                <a class="btn btn-colored"> Learn more </a>
              </router-link>
            </span>

          </div>
    </section>
    <section class="flex col-lg-6 s-sec justify-content-center align-items-center">
      <div class="flex col-lg-6 flex-wrap justify-content-center align-items-center">
        <span class="flex column nowrap col-lg-3">
          <p class="heading text-left">using connectivity and physical internet to drive a new era in physical health and wellness</p>
          <p class="par col-sm-5 text-left">
            We are on a mission to save lives by empowering today's medical team with affordable medical devices and services to improve their planning, process and producitivity.
          </p>
        </span>
        <img class="pl-img" src="../assets/medicine.svg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import trephero from '@/components/hero';

export default {
  components: {
    trephero,
  },
};

</script>
<style scoped>
  .pulsify {
    width: 320px;
  }
  .st0 {
      fill: none;
      stroke-width:1; stroke-miterlimit:10;
      stroke: #025e2d;
      stroke-dasharray: 497;
      stroke-dashoffset: 497;
      animation: draw 9s ease-in-out 2s forwards infinite;
    }
    @keyframes draw {
        from{ stroke-dashoffset: 1000; }
        to { stroke-dashoffset: 0; }
    }
  .product-list li {
    width: 250px; height: 350px;
    overflow: hidden;
    position: relative;
  }
  .echo {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 50px;
  }
  .f-sec, .s-sec, .t-sec, .product-section {
    padding: 50px 100px;
  }
  .f-sec {
    background:  #FFF;
    /* background:; */
    /* background: linear-gradient(-45deg, #006622 0%, #1ae28a 100%); */
    position: relative;
  }
  .t-sec {
    background: #fcfcfc;
  }
  .commonpadding {
    padding: 25px;
  }
  .s-sec {
    background: #fcfcfc;
    /* background: linear-gradient(0deg, rgb(165, 164, 164) 0%, #fff 100%); */
  }
  .img-x {
    width: 500px;
    object-fit: contain;
  }
  .img-hero {
    width: 800px;
    object-fit: cover;
  }
  .btn {
    display: flex;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    padding: 9px 20px;
    border: 1px solid #ffffff;
    background: #ffffff;
    font-size: 14px;
    border-radius: 3px;
    margin: 20px 0;
  }
  .btn-colored {
    background: #025e2d;
    color: #ffffff;
  }
  .mar-for-mobile {
      margin-top : 70px;
    }
  @media only screen and (max-width: 720px) {
    
    .nodisplayformobile {
      display: none;
    }
    .f-sec, .s-sec, .t-sec, .product-section {
      padding: 25px 20px;
    }
    .commonpadding {
      padding: 20px 0;
    }
    .col-lg-6, .col-lg-5, .col-lg-3, .col-sm-5 {
      width: 100%;
    }
    .img-x {
      width: 90%;
      object-fit: contain;
    }
  }
</style>
