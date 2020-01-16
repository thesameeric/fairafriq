<template>
  <div class="flex column about">
    <section class="flex flex-wrap col-lg-6 justify-content-center align-items-center mar-common">
      <img class="rd-img"  src="../assets/rdprocess.svg" alt="realdrip device">
      <span class="flex column align-items-left nowrap">
        <p class="heading text-left">What is the Realdrip device?</p> 
        <p class='rd-def par text-left'>REALDRIP, a non-invasive device makes blood transfusion and drip treatment simpler and safer by continuously monitoring the flow rate, volume administered and automating the treatment process. This device leverages the IoT technology to eliminate the guesswork in setting IV flow rate, monitoring dosages and time taken as indicated on the treatment plan. This information is connected to dashboard and alerts to keep health professionals informed about each patient's specific situation.</p>
      </span>
    </section>
    <section class="flex col-lg-6 align-items-center justify-content-center flex-wrap mar-common rd-prop">
      <div class="flex column nowrap rd-pros">
        <article class="flex nowrap text-left">
          <img class="mini-icons" src="../assets/icon/002-smartphone.svg" alt="">
          <div class="flex column nowrap text-left">
            <p class="flex align-items-center heading">
              Realtime Notification</p>
            <p class="rd-def par">
              REALDRIP onboard visual display, mobile and web dashboard allows it show the flow rate in real time to the users,  reducing the time taken to track drip treatment.
            </p>
          </div>
        </article>
        <article class="flex nowrap text-left">
          <img class="mini-icons" src="../assets/icon/001-newspaper.svg" alt="">
          <div class="flex column nowrap text-left">
            <p class="heading">Excellent Documentation</p>
            <p class="rd-def par">
              Monitoring IV fluids and getting a documentable measurement is a time-consuming and difficult task. This problem is now easily remedied with the acquisition of REALDRIP.
            </p>
          </div>
        </article>
        <article class="flex nowrap text-left">
          <img class="mini-icons" src="../assets/icon/003-internet.svg" alt="">
          <div class="flex column nowrap text-left">
            <p class="heading">Simple Integration</p>
            <p class="rd-def par">
              Anybody from individuals to clinics can use REALDRIP to administer infusion therapy quickly with little or no technical know-how.
            </p>
          </div>
        </article>
      </div>
      <img class="rd-img nodisplay" src="../assets/rdd.png" alt="realdrip dashboard">
    </section>
  </div>
</template>
<style scoped>
.rd-prop {
  background: #fcfcfc;
}
.rd-pros article {
  margin: 15px;
}
.rd-def {
  max-width: 502px;
}
.rd-img {
    width: 500px;
    height: 500px;
    object-fit: contain;
}
.about {
  padding: 50px 100px;
}
@media only screen and (max-width: 720px) {
    .nodisplay {
      display: none;
      visibility: hidden;
    }
    .about {
      padding: 25px 20px;
    }
    .rd-img {
      width: 350px; object-fit: contain;
    }
    .rd-def {
      width: 100%;
    }
    .commonpadding {
      padding: 20px 0;
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
      currentText: 'Trep',
      texts: ['Andriod', 'Medical', 'Nigeria'],
      count: 0,
    };
  },
  mounted() {
    this.changeText();
  },
  methods: {
    changeText() {
      const vm = this;
      if (vm.count = vm.texts.length - 1) {
        vm.count = 0;
      }
      window.setTimeout(() => {
        vm.currentText = vm.texts[vm.count];
        vm.count++;
      }, 5000);
      vm.changeText();
    },

  },
};
</script>
