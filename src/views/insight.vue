<template>
  <div class="flex column about">
    <section class="flex story-board vh-100 justify-content-center align-items-center">
      <blockquote>
        <h1>But how could you live and have no story to tell?</h1>
      </blockquote>
      <p>― Fyodor Dostoevsky, White Nights</p>
    </section>
    <section class="flex column nowrap story-board">
      <img class="story-img" src="../assets/trep2.jpg" alt="">
      <div class="flex column justify-content-flex-end story-text">
        <p class="story-p">
          A Nigerian start-up is using connectivity and physical internet to drive a new era in physical health and wellness
        </p>
        <a href="">thinkmedia</a>
      </div>
    </section>
    <section class="flex column nowrap story-board">
      <img class="story-img" src="../assets/trep2.jpeg" alt="">
      <div class="flex column justify-content-flex-end story-text">
        <p class="story-p">
          If TREP was a person, what would the person look like?
        </p>
        <a href="">zumalo</a>
      </div>
    </section>

  </div>
</template>
<style scoped>
.about {
  padding: 50px 100px;
}
.about h1 {
  font-weight: 32px;
  font-weight: normal;
}
.story-board {
  max-width: 700px;
  position: relative;
  margin: 20px 0;
}
.story-img {
  z-index: -1;
  width: 700px;
  height: 393px;
  object-fit: cover;
}
.story-text {
  position: absolute;
  color: rgb(253, 253, 253);
  z-index: 99;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 47%);
  height: 393px;
}
.story-p {
  padding: 9px 30px;
  font-size: 30px;
}
</style>
