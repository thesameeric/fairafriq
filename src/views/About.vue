<template>
  <div class="flex column about">
    <section class="flex col-lg-6 vh-100 justify-content-center align-items-center about-hero ">
       <div id="particles-js"></div>
      <h1>We're connecting everything to the internet</h1>
    </section>

    <section>
      <h1>Our Story</h1>
      <ul class="flex flex-wrap justify-content-center our-story mar-tb-30">
        <li class="flex column nowrap align-items-center">
          <div class="tm pulse">
            <img class="mini-icons2" src="../assets/icon/001-data-science.svg" alt="">
          </div>
          <p class="the-story">we Design and Analyze support from the hardware level up to complete product engineering with Back end and app support at any stage of the IoT product lifecycle.</p>
        </li>
        <li class="flex column nowrap align-items-center">
          <div class="tm pulse">
            <img class="mini-icons2" src="../assets/icon/003-programming.svg" alt="">
          </div>
          <p class="the-story">TREP LABS uses deep technologies which includes a MQTT broker for data transfer and a NoSQL Database to store and analyze data and develop robust applications.</p>
        </li>
        <li class="flex column nowrap align-items-center">
          <div class="tm pulse">
            <img class="mini-icons2" src="../assets/icon/002-linear-regression.svg" alt="">
          </div>
          <p class="the-story">We create and develop the best suitable IoT DEVICE with security and scale in mind.</p>
        </li>
      </ul>
    </section>

    <section class="flex column align-items-center nowrap">
      <div class="flex flex-wrap">
        <article class="flex column nowrap align-items-start about-article">
          <img class="about-icon" src="../assets/icon/024-research.svg" alt="">
          <p class="about-article-header">Test</p>
          <p class="text-left">TREP LABS facilitates a holistic approach for IoT solution development by handholding research driven process throughout the complete IoT application development lifecycle.</p>
        </article>

        <article class="flex column nowrap align-items-start about-article">
          <img class="about-icon" src="../assets/icon/023-question.svg" alt="">
          <p class="about-article-header">Refine</p>
          <p class="text-left">We build and integrate apps and analytics to evaluate the data to capture business insight and refine assets.</p>
        </article>
      </div>

      <div class="flex flex-wrap">
        <article class="flex column nowrap align-items-start about-article">
          <img class="about-icon" src="../assets/icon/028-text.svg" alt="">
          <p class="about-article-header">Evaluate</p>
          <p class="text-left">We collaborate to understand and evaluate the problem/pain points and it’s impact on people, technology and business. Based on problem definition, various IoT solutions and associated technical solution map is devised.</p>
        </article>

        <article class="flex column nowrap align-items-start about-article">
          <img class="about-icon" src="../assets/icon/prototype.svg" alt="">
          <p class="about-article-header">Prototype</p>
          <p class="text-left">Our Team works closely together to design the APP (Both Web & Mobile) that is completely customized users comfort.</p>
        </article>
      </div>
    </section>
  </div>
</template>
<style scoped>
canvas {
  display: block;
  vertical-align: bottom;
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.our-story li{
  width: 350px;
  padding: 20px;
  position: relative;
}
.our-story li div.tm {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  width: 50px; height: 50px;
  border-radius: 50%;
  position: relative;
}
.our-story li div.tm::after {
  content: '';
  position: absolute;
  bottom: -130px;
  display: flex;
  height: 100px; width: 2px;
  border-left: 5px dotted #cacaca;
  margin: 3px 0;
}
.our-story li:nth-child(even) div.tm::after {
  bottom: -55px;
  height: 30px; width: 1px;
}
.our-story li .the-story {
  margin-top: 130px;
}
.our-story li:nth-child(even) .the-story {
  margin-top: 55px;
}
.about-article {
  max-width: 390px;
  padding: 15px;
  margin: 15px;
  border: 1px solid linear-gradient(0deg, rgba(0,0,0,0.5) 6%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 77%, rgba(0,0,0,0.35) 94%);
}
.about-article p {
  padding: 8px 0;
}
.about-article-header {
  font-size: 35px;
}
.about {
  padding: 50px 100px;
}
.about-hero {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.about h1 {
  font-weight: 32px;
  font-weight: normal;
}
.about-icon {
  width: 80px; height: 80px;
  object-fit: contain;
}
.pulse {
  /* background: #0a2b4e; */
  color: #f7f7f7;
  cursor: pointer;
  box-shadow: 0 0 0 #0a2b4e;
  animation: pulse 2s infinite;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pulse:hover {
  animation: none;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(10, 43, 78, 0.5);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(10, 43, 78, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(10, 43, 78, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(10, 43, 78, 0.5);
    box-shadow: 0 0 0 0 rgba(10, 43, 78, 0.5);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(10, 43, 78, 0);
      box-shadow: 0 0 0 10px rgba(10, 43, 78, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(10, 43, 78, 0);
      box-shadow: 0 0 0 0 rgba(10, 43, 78, 0);
  }
}
@media only screen and (max-width: 720px) {
    .about {
      padding: 25px 20px;
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
    };
  },
  mounted() {
    particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
  },
};
</script>
