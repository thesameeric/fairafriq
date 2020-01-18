<template>
  <div class="flex column about">
    <section class="flex col-lg-6 justify-content-center align-items-center about-hero ">
       <div class="pages-img-holder">
         <img src="../assets/img/pages.jpg" alt="">
       </div>
      <h1 class="page-quote">Every story has a beginning, this is ours</h1>
    </section>

    <section class="flex column align-items-center nowrap">
      <article class="flex column nowrap align-items-start about-article">
        <img class="about-icon" src="../assets/icon/vision.svg" alt="">
        <p class="about-article-header">VISION</p>
        <p class="text-left">
          <!-- eslint-disable-next-line -->
          Our vision is to empower African youths to re-discover their values and exact positive influences on their communities through leadership empowerment, thereby utilizing Africa's enormous natural and human resources for overall development.
          <br>
          To enable our continent take its rightful place in world affairs .</p>
      </article>

      <article class="flex column nowrap align-items-start about-article">
        <img class="about-icon" src="../assets/icon/objective.svg" alt="">
        <p class="about-article-header">OBJECTIVE</p>
        <p class="text-left">
          <!-- eslint-disable -->
          <ul class="flex column nowrap unordered-list">
            <li>The To enable our continent take its rightful place in world affairs..</li>
            <li>To harmonize and utilize Africa’s enormous natural and human resources for Africa’s development..</li>
            <li>To reconnect the people and their governments, develop intergovernmental relationships coupled with mutual cooperation between Africa and the developed countries.</li>
            <li>integrity in all African communities in the social, economic and political spheres.</li>
            <li>To lay the foundation of the core value of integrity</li>
            <li>To engage and mentor the youth of Africa and of African descent, into a dynamic and conscious citizenry.</li>
            <li>To develop the deprived African community</li>
            <li>To empower the people of Africa communities to embark on developmental initiatives in the realization of their creative and developmental potential</li>
            <li>To promote the role of women in social and economic development.</li>
          </ul>
        </p>
      </article>

      <article class="flex column nowrap align-items-start about-article">
        <img class="about-icon" src="../assets/icon/mission.svg" alt="">
        <p class="about-article-header">MISSION</p>
        <p class="text-left">
          <ul class="flex column nowrap unordered-list">
            <li>To demonstrate the power of integrity in all Africa community in social, economic and political.</li>
            <li>To lay the foundation of the core value of integrity</li>
            <li>To engage and mentor African young and dynamic citizen</li>
            <li>To develop the deprived Africa community</li>
            <li>To empower the people of Africa community to embark on development initiative as to realize their creative potential</li>
            <li>To promote the role of women in social and economic development.</li>
            <li>FAIR plan to plant integrity school of thought in all Africa community through the support of Government and other organization.</li>
          </ul>
        </p>
      </article>

      <article class="flex column nowrap align-items-start about-article">
        <img class="about-icon" src="../assets/icon/alms.svg" alt="">
        <p class="about-article-header">Fair code of ALMS</p>
        <p class="text-left">
          <ul class="flex column nowrap unordered-list">
            <li>TO SERVE OUR COMMUNITIES AND NATIONS IN THE INTEGRITY OF OUR HEART AND THE INNOCENCY OF OUR HAND.</li>
            <li>THAT WE WOULD NOT BE MOVED AGAINST BY THE OTHER WHO HAS SOLD OUT THEIR INTEGRITY BUT SHALL HOLD FAST OUR INTEGRITY TO SERVE OUR NATIONS.</li>
            <li>WE WOULD NOT LET ANY MAN BOUGHT US OUT OF OUR INTEGRITY.</li>
            <li>THE LORD JUDGES US ACCORDING TO OUR INTEGRITY THAT WAS IN US.</li>
            <li>THAT OUR INTEGRITY AND UPRIGHTNESS SHALL PRESERVE US IN THE PRESENCE OF OUR COUNTRY MEN.</li>
            <li>TO WALK AT ALL TIME IN OUR INTEGRITY AND TRUSTED IN THE LORD ALMIGHTY THAT WE MAY STAND IN TIME OF NEED.</li>
            <li>WE WOULD LET OUR INTEGRITY QUILD US AND LET THE PERVERSENESS OF THE OPPOSITION DESTROY THEM.</li>
          </ul>
        </p>
      </article>

      <article class="flex column nowrap align-items-start about-article">
        <img class="about-icon" src="../assets/icon/alms.svg" alt="">
        <p class="about-article-header">ALMS WILL</p>
        <p class="text-left">
          <ul class="flex column nowrap unordered-list">
            <li>ACCOMPLISH WHAT WE DO TOGETHER, AND SHARE OUR SUCCESS, NEVER LET ANY ONE OF US FAIL ALONE.</li>
            <li>BELIEVE WE ARE FULLY GROWN ADUILTS AND WILL ACT AS SUCH AND EXPECT THE SAME FROM THE PEOPLE AROUND US.</li>
            <li>NOT KEEP SECRET, INFORMATION THAT AFFECTS US ALL WILL BE SHARED BY ALL US AND WE WILL QUICKLY AND OPENLY WORK TO SEPARATE FACTS FROM FICTION.</li>
            <li>NOT LIE TO OURSELVES OR TO EACH OTHERS AND WILL NOT TOLERATE ANY OF US DOING SO BUT WILL DEPENDS ON EACH OTHER FOR THE TRUTH.</li>
            <li>KEEP OUR WORD, SAY WHAT WE MEAN AND DO WHAT WE SAY, TO TRUST THE WORD OF OTHERS TO BE GOOD AS WELL.</li>
            <li>KEEP OUR HEAD AND NOT PANIC IN THE FACE OF TOUGH TIMES BUT WILL ALWAYS CHOOSE TO ROLL UP OUR SLEEVES RATHER THAN WRONG OUR HANDS.</li>
            <li>DEVELOP OUR ABILITIES AND TAKE PRIDE IN THEM, BY SETTING OUR OWN STANDARDS HIGHER THAN OURMOST CHALLENGING OPPONENT AND WE WILL PLEASE OUR MEMBERS BY PLEASING OURSELVES.</li>
            <li>BE UNSELFISH AND EXPECT THAT EVERYONE ELSE WILL EXHIBIT THIS SAME QUALITY AND WILL CARE ABOUT EACH OTHER WITHOUT EXPECTATION.</li>
            <li>LOOK OUT FOR EACH OTHER AND TRULY BELIEVE THAT WE ARE OUR BROTHERS KEEPER.</li>
            <li>ARE ALL STUDENTS AT AIMS AND AS SUCH WILL STRIVE TO GRDUATE. WE TAKE PRIDE IN OUR GRADE POINT AND EXPECT OUR MEMBERS TO DO THE SAME.</li>
            <li>LOOSING CANNOT AND WILL NOT BE TOLERATE IN ANYTHING WE DO, LOSING TO US IS BE SHAMED, EMBARRASSED, HUMILATED.</li>
          </ul>
        </p>
      </article>
    </section>
  </div>
</template>
<style lang="scss" scoped>

.about-article {
  max-width: 800px;
  padding: 15px;
  margin: 15px;
}
.about-article p {
  padding: 8px 0;
}
.about-article-header {
  font-size: 35px;
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
.about-icon {
  width: 80px; height: 80px;
  object-fit: contain;
}
ul.unordered-list {
  padding-left: 25px;
  li {
    list-style-type: disc;
    padding: 3px 0;
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
  },
};
</script>
