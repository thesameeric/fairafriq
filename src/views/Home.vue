<template>
  <div class="flex column nowrap col-lg-6">
    <section class="flex col-lg-6 vh-100">
        <div class="home flex col-lg-6 flex-wrap justify-content-space-between align-items-center">
          <trephero></trephero>
        </div>
    </section>
    <section style="margin-top: 50px;"
      class="flex column nowrap col-lg-6 t-sec justify-content-center align-items-center">
      <p class="heading text-left">WHO ARE WE</p>
      <p class="par col-lg-3">
        <!-- eslint-disable-next-line -->
FairAfriq is a non profit development organization transforming the society by empowering underserved and remote communities with quality education, entrepreneurial skills. The Foundation was established originally in the United Kingdom in 2005 by Mr Emmanuel Fanimoh. The founder is very passionate about youth empowerment and development in Africa which is achieved by collaborating with the government, private sector, individuals, civil society organizations and other developmental agencies towards building a resourceful and sustainable network. Most importantly building a network of socially responsible community of volunteers committed to social reformation.
</p>
      <router-link :to="{name: 'about'}">
        <a class="btn btn-colored" href=""> Learn more about us</a>
      </router-link>
    </section>
      <!-- eslint-disable -->
    <section
      class=" flex col-lg-6 align-items-center flex-wrap product-section">
      <form role="" form="" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="donate">
      <div class="form-group">
        <p class="heading text-left">DONATION BOX</p>
        <input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="business" value="accounts@fairafriq.org">
        <input type="hidden" name="lc" value="US">
        <input type="hidden" name="item_name" value="Foundation for African Integrity">
        <input type="hidden" name="button_subtype" value="services">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
        <input type="hidden" name="on0" value="Contribution/payment for African development">
        <label for="os0">Contribution/payment for African development</label>

        <select name="os0" class="form-control">
          <option value="Basic contribution/payment for African development =">Basic contribution/payment for African development = $25.00 USD</option>
          <option value="Advance contribution/payment for African development =">Advance contribution/payment for African development = $50.00 USD</option>
          <option value="Premium contribution/payment for African development =">Premium contribution/payment for African development = $150.00 USD</option>
          <option value="Corporate Contribution =">Corporate Contribution = $250.00 USD</option>
          <option value="Director's Contribution =">Director's Contribution = $500.00 USD</option>
        </select> 

        <input type="hidden" name="on1" value="Write any instructions here:">
        <label for="os1"> Enter any Instruction</label>
        <input type="text" class="form-control" id="os1" name="os1" placeholder="" style="width:350px;">

        <input type="submit" border="0" name="submit" value="Contribute">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </div>
      </form>
    </section>
    <!-- eslint-disable -->
    <section
      class=" flex column col-lg-6 align-items-center justify-content-center flex-wrap product-section">
          <p class="heading text-left">
            MEET THE TEAM
          </p>
        <ul class="flex flex-wrap justify-content-center staff-list">
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/EmmanuelFanimoh">
              <img class="pl-img" src="../assets/img/members/1.jpg" alt="image of Realdrip device">
              <p class="staff-name">Mr Emmanuel Fanimoh</p>
              <p class="staff-title">Founder/CEO</p>
            </router-link>
          </li>
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/AyotolaFanimoh">
              <img class="pl-img" src="../assets/img/members/2.jpg" alt="image of Realdrip device">
              <p class="staff-name">Mrs Ayotola O. Fanimoh</p>
              <p class="staff-title">Executive Director, Corporate Development<br>and Field Operation</p>
            </router-link>
          </li>
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/MarianOyindamolaFanimoh">
              <img class="pl-img" src="../assets/img/members/3.jpg" alt="image of Realdrip device">
              <p class="staff-name">Miss Marian Oyindamola Fanimoh</p>
              <p class="staff-title">Executive Director and Administration</p>
            </router-link>
          </li>
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/TillyOpoku">
              <img class="pl-img" src="../assets/img/members/4.jpg" alt="image of Realdrip device">
              <p class="staff-name">Mrs Tilly Opoku</p>
              <p class="staff-title">Executive Director of Ghana Urban Affairs</p>
            </router-link>
          </li>
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/PetronellaKapijimpanga">
              <img class="pl-img" src="../assets/img/members/5.jpg" alt="image of Realdrip device">
              <p class="staff-name">Ms Petronella Kapijimpanga</p>
              <p class="staff-title">Executive Director of Zambia Urban Affairs </p>
            </router-link>
          </li>
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/MaryAloayeOtukpe">
              <img class="pl-img" src="../assets/img/members/6.jpeg" alt="image of Realdrip device">
              <p class="staff-name">Mrs Mary Aloaye Otukpe</p>
              <p class="staff-title">Executive Board member and Partner</p>
            </router-link>
          </li>
          <li class="flex column nowrap align-items-center">
            <router-link to="/team/IsaacOgunmola">
              <img class="pl-img" src="../assets/img/members/7.jpg" alt="image of Realdrip device">
              <p class="staff-name">Mr Isaac Ogunmola</p>
              <p class="staff-title">Executive Director of Nigeria Urban’s Affairs</p>
            </router-link>
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
  .form-group {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    input {
      padding: 7px 20px;
      min-width: 200px;
      height: 45px;
      border-radius: 3px;
      border: 1px solid #eeeeee;
      margin: 7px 0;
      max-width: 300px;
    }
    input[type='submit'] {
      background: #139efc;
      color: #FFF;
      font-weight: 700;
    }
    select {
      padding: 7px;
      height: 45px;
      min-width: 200px;
      border-radius: 3px;
      border: 1px solid #eeeeee;
      margin: 7px 0;
      max-width: 300px;
    }
    label {
      padding: 5px 0;
      margin-top: 12px;
      text-transform: capitalize;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 700;
    }
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
