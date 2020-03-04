/* eslint-disable max-len */
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
          <!-- eslint-disable -->
          Empowering the youth, women and developing by raising leaders with integrity in Africa country
          <br>
          To see that Africa re-discover their value of integrity and impacting via empowering, developing our people and their community.<br>
          To allow our continent to take their rightful place in the world.<br>
          To harmonized and utilized Africa enormous natural and human resources.<br>
          To bridge the gap between the people and their government, between Africa and the developed countries.
          </p>
      </article>
      <article class="flex column nowrap align-items-start about-article">
        <img class="about-icon" src="../assets/icon/mission.svg" alt="">
        <p class="about-article-header">MISSION</p>
        <p class="text-left">
          <ul class="flex column nowrap unordered-list">
            <li>Demonstrate the power of integrity in all Africa community in social, economic and political.</li>
            <li>Lay the foundation of the core value of integrity</li>
            <li>Engage and mentor African young and dynamic citizen</li>
            <li>Develop the deprived Africa community</li>
            <li>Empower the people of Africa community to embark on development initiative as to realize their creative potential</li>
            <li>Promote the role of women in social and economic development.</li>
            <li>Plant integrity school of thought in all Africa community through the support of Government and other organization.</li>
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
      padding: 0px;
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
