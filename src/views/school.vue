<template>
<!-- eslint-disable -->
  <div class="flex column justify-content-center align-items-center about">
    <section class="flex col-lg-6 justify-content-center align-items-center about-hero ">
       <div class="pages-img-holder">
         <img src="../assets/img/full-frame-shot-of-stadium-247839.jpg" alt="">
       </div>
      <h1 class="page-quote">FAIRAFRIQ INTEGRITY SCHOOL OF THOUGHT</h1>
    </section>
    <section class="flex column align-items-center nowrap col-lg-3 sc-items">
      <h1>About</h1>
      <p>
        Most schools across rural communities and remote villages lack basic infrastructure and learning tools required for 21st-century education. Fairafriq Integrity School of Thought (FIST) bridges this gap by adopting public schools in partnership with the government and providing new safe learning spaces, adequate infrastructure and up to date technology to ensure that every child irrespective of their background have access to equal educational support.  Set up fairafriq integrity school of thought in all African community and Life integrity personal development team program (IPDTP) 
      </p>
    </section> 
    <section class="flex column align-items-center nowrap col-lg-3 sc-items">
      <div>
      <h1>Mission</h1>
      <p>
        The fairafriq integrity school of thought is one of its kind with a mission to providing  a good standard of education to  orphans and the less privilege a quality education thereby preparing them to be leaders of tomorrow both in their community and the nation at large. our aim to offer a clear teaching and stressing the importance of honesty and integrity.   Our school of thought aim to centre on building children from their early stage of life, the importance of integrity in our home, communit and nation. This will give the children a notion that their leaders thinks highly of them and that they matter.<br><br>
        Fairafriq aim at making people understand that we are all equal no matter the circumstance’s that surround our births. That all children deserve equal opportunity to go to a well structure standard school that. We take it upon ourselves at Fairafriq to give our orphans and less privileged children a free standard education so as to bridge the gap between the rich and the poor. <br><br>
        Breeding children and youths with integrity will protect our community and national security in addition to law enforcement whereby corruption in government institution, offices will be limited and more opportunity for our next generation. 
       <i>...If you have integrity, nothing else matters, and if you do not have integrity, nothing else matters</i>
      </p>
      </div>
      <img class="rd-img" src="../assets/img/kids.jpg" alt="">
    </section>
    <Section class=" sc-items">
      <h1>Vision</h1>
      <p>
        We envision a world where every child would have quality education.</p>
    </section> 
    <section class="flex column nowrap col-lg-5 sc-items">
      <h1>Objective</h1>
      <ul>
        <li>Reduce the level of literacy strengths and weakness in our community. </li>
        <li>Identify reason for dropout and determine the course of action to follow. </li>
        <li>Engage the children in the integrity school of thought educative programs</li>
        <li>Work with parents to Identify reasons for children behaviour that led to dropout.</li>
        <li>Provide apprenticeship to children in their areas of interest.</li>
        <li>Build our youths, orphans and less privilege children to become African leaders with integrity</li>
        <li>Protect our women and girls from abuse and rape</li>
        <li>Provide a career development scheme for all children.</li>
      </ul>
    </section>
    <section class="flex column nowrap col-lg-5 sc-items">
      <h1>Subsidiary Objective</h1>
      <p>In furtherance of the foregoing main objectives, the Fairafriq integrity school of Thought shall have the following subsidiary aims</p>
      <ul class="">
        <li>That each orphans who attends our academy should gain the confidence to be the best and subsequently enjoy the success that they richly deserve.</li>
        <li>To enhance the confidence of students who may previously have struggled academically</li>
        <li>That each orphans should respect, value and support his or her peers in the group and accept encouragement at all times to develop an excellent team spirit.</li>
        <li>That each orphans should work towards fulfilling their full potential as an active and independent learner in the areas of Mathematics, English, Science and Reasoning Skills.</li>
        <li>Prepare each orphans to demonstrate his/her full potential related to testing procedures that they meet related to Standard Assessment Tests (SAT’s), Selective Tests and GCSC</li>
      </ul>
    </section>
    <section class="flex column nowrap col-lg-5 sc-items">
      <h1>What we Offer</h1>
      <ul class="">
        <li>We provide our pupils with a large class size, airy classroom. It is set in a one acre of beautiful ground to play.</li>
        <li>We provide breakfast club at7.30am and after school Club activities for our pupils. </li>
        <li>Free  transportation from home to school and back. </li>
        <li>We offer our pupil exchange programs given them the opportunity to learn other schools culture and value.</li>
        <li>We offer children to compete in educative programs that enhance their mental capacity and excellence </li>
        <li>Provide our pupils with an exciting, creatives and simulative environment. </li>
        <li>Provide an experience and motivated staff with passion to support and enlarge their leadership skill.</li>
      </ul>
    </section>
    <section>
      <p>Please kindly fill the form below (Parent/Guardian) to :
        ➢ Book a visit 
        ➢ Request for prospectus 
        ➢ Complaint 
      </p>
      <form class="flex column nowrap sendmail" action="">
        <input type="text" placeholder="Name" name="" id="">
        <input type="text" placeholder="Phone number" name="" id="">
        <textarea name="" placeholder="Drop your feedback here" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
   </div>
</template>
<style lang="scss" scoped>
.sendmail input {
  margin: 10px;
  padding: 10px 15px;
  border: 1px solid #CCC;
  border-radius: 3px;
  min-height: 32px;
}
.sendmail textarea {
  margin: 10px;
  padding: 10px 15px;
  border: 1px solid #CCC;
  border-radius: 3px;
}
.sc-items {
  padding: 30px;
}
ul, ul.dotted-ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: disc outside none;
  margin: 20px;
}
.rd-img {
    width: 400px;
    height: 300px;
    object-fit: cover;
}
ul.dotted-ul li {
  display: flex;
  list-style: disc outside none;
  padding: 7px;
}
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
  .sc-items {
  padding: 20px;
}
    .about {
      padding: 0px;
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
