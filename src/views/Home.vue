<template>
  <div class="flex column nowrap col-lg-6">
    <section class="flex col-lg-6 f-sec vh-100">
        <div class="home flex col-lg-6 flex-wrap justify-content-space-between align-items-center">
          <trephero></trephero>
        </div>
    </section>
    <section class="flex column nowrap col-lg-6 t-sec justify-content-center align-items-center">
      <p class="heading text-left">THE FOUNDATION</p>
      <p class="par col-lg-3">
        <!-- eslint-disable-next-line -->
Foundation for African Integrity (FAIR) is a non-profit charitable organisation, registered in the United States, United Kingdom, and Nigeria. It is a foundation seeking to create a platform to bring together Africans, African Americans, and other people of African descent, who believe in the nobleness of African virtues and values. This is a group of dedicated people who are committed to the rediscovery of our motherland through youth empowerment and development.      </p>
      <router-link :to="{name: 'about'}">
        <a class="btn btn-colored" href=""> Learn more about us</a>
      </router-link>
    </section>
    <section
      class=" flex col-lg-6 align-items-center justify-content-center flex-wrap product-section">

          <img class="pl-img" src="../assets/img/ceo.jpg" alt="image of Realdrip device">
          <div class="flex justify-content-center col-lg-3 column nowrap commonpadding">
            <p class="heading text-left">FOUNDER AND CEO</p>
            <p class="col-lg-6 text-left par">
            <!-- eslint-disable-next-line -->
This Foundation was established originally in the United Kingdom in 2005 by Mr. Emmanuel Fanimoh. The founder is very passionate about youth empowerment and development in Africa. He has presented several research papers on youth leadership including a recent presentation at GoldenCRI conference in Washington DC in January 2015.            </p>
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
          <p class="heading text-left">
            GET INVOLVED
          </p>
          <p class="par col-sm-5 text-left">
            <!-- eslint-disable-next-line -->
            Join the list of people who share our vision to provide accessible and quality education for children across slums and remote communities and are willing to do something about it.
          </p>
            <span class="flex">
              <router-link :to="{name: 'realdrip'}">
                <a class="btn btn-colored"> Join </a>
              </router-link>
            </span>
        </span>
        <img class="pl-img" src="../assets/medicine.svg" alt="">
      </div>
    </section>
    <!-- eslint-disable -->
    <section
      class=" flex column col-lg-6 align-items-center justify-content-center flex-wrap product-section">
          <p class="heading text-left">
            MEET THE TEAM
          </p>
        <ul class="flex flex-wrap staff-list">
          <li class="flex column nowrap align-items-center">
            <img class="pl-img" src="../assets/img/ceo.jpg" alt="image of Realdrip device">
            <p class="staff-name">John Doe</p>
            <p class="staff-title">CEO</p>
          </li>
          <li class="flex column nowrap align-items-center">
            <img class="pl-img" src="../assets/img/ceo.jpg" alt="image of Realdrip device">
            <p class="staff-name">Anthony Martial</p>
            <p class="staff-title">Project analyst</p>
          </li>
          <li class="flex column nowrap align-items-center">
            <img class="pl-img" src="../assets/img/ceo.jpg" alt="image of Realdrip device">
            <p class="staff-name">Micheal Owen</p>
            <p class="staff-title">Public relations</p>
          </li>
        </ul>
    </section>

  </div>
</template>

<script>
import trephero from '@/components/hero.vue';

export default {
  components: {
    trephero,
  },
};

</script>
<style lang="scss" scoped>
  @import '../assets/css/index.scss';
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
    background: $primaryColor;
    color: #ffffff;
  }
  .mar-for-mobile {
      margin-top : 70px;
    }
    ul.staff-list {
      li {
        margin: 12px 20px;
        .staff-name {
          font-weight: 500;
          font-size: 20px;
        }
        .staff-title {
          text-transform: uppercase;
          color: #9b9b9b;
          font-size: 14px;
        }
      }
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
