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
    </section>
    <Section class="sc-items vision2020">
      <h1 class='header-fancy'>We envision a world where every child would have quality education.</h1>
    </section> 
    <section class="flex row nowrap col-lg-5 sc-items">
      <img class='that-image' src='../assets/img/mission-image.jpg' alt='image of a globe ball'/>
      <div class='flex column nowrap align-items-start justify-content-center pad-30'>
        <h1 class='header-fancy'>Objective</h1>
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
      </div>
    </section>
    <section class="flex row nowrap col-lg-5 sc-items reverse-this">
      <div class='flex column nowrap align-items-start justify-content-center pad-30'>
        <h1 class='header-fancy'>Subsidiary Objective</h1>
        <p class='text-left'>In furtherance of the foregoing main objectives, the Fairafriq integrity school of Thought shall have the following subsidiary aims</p>
        <ul class="flex column nowrap justify-content-start">
          <li>That each orphans who attends our academy should gain the confidence to be the best and subsequently enjoy the success that they richly deserve.</li>
          <li>To enhance the confidence of students who may previously have struggled academically</li>
          <li>That each orphans should respect, value and support his or her peers in the group and accept encouragement at all times to develop an excellent team spirit.</li>
          <li>That each orphans should work towards fulfilling their full potential as an active and independent learner in the areas of Mathematics, English, Science and Reasoning Skills.</li>
          <li>Prepare each orphans to demonstrate his/her full potential related to testing procedures that they meet related to Standard Assessment Tests (SAT’s), Selective Tests and GCSC</li>
        </ul>
      </div>
      <img class='that-image' src='../assets/img/subobj.jpg' alt='image of a globe ball'/>
    </section>
    <section class="flex row nowrap col-lg-5 sc-items">
      <img class='that-image' src='../assets/img/wwg.jpg' alt='image of a globe ball'/>
      <div class='flex column nowrap align-items-start justify-content-center pad-30'>
        <h1 class='header-fancy'>What we Offer</h1>
        <ul class="">
          <li>We provide our pupils with a large class size, airy classroom. It is set in a one acre of beautiful ground to play.</li>
          <li>We provide breakfast club at7.30am and after school Club activities for our pupils. </li>
          <li>Free  transportation from home to school and back. </li>
          <li>We offer our pupil exchange programs given them the opportunity to learn other schools culture and value.</li>
          <li>We offer children to compete in educative programs that enhance their mental capacity and excellence </li>
          <li>Provide our pupils with an exciting, creatives and simulative environment. </li>
          <li>Provide an experience and motivated staff with passion to support and enlarge their leadership skill.</li>
        </ul>
      </div>
    </section>
    <section>
      <p class='strong'>Please kindly fill the form below (Parent/Guardian) to :
        ➢ Book a visit 
        ➢ Request for prospectus 
        ➢ Complaint 
      </p>
      <form @submit.prevent="sendMail" class="flex column nowrap sendmail" action="">
        <input v-model="name" type="text" placeholder="Name" name="" id="" required>
        <input v-model="mail" type="text" placeholder="Email or Phone number" name="" id="" required>
        <textarea v-model="message" name="" placeholder="Drop your feedback here" id="" cols="30" rows="10" required></textarea>
        <button type="submit">{{mailStatus}}</button>
      </form>
    </section>
   </div>
</template>
<style lang="scss" scoped>
.pad-30 {
  padding: 30px;
}
.that-image {
  width: 400px;
  object-fit: cover;
}
.vision2020 {
  background: #CCC;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.header-fancy {
  display: flex;
  flex-flow: column nowrap;
}
.header-fancy::after {
  content: '';
  display: inline-block;
  width: 100px; height: 3px;
  border-radius: 3px;
  background: #965300;
  margin-top: 9px;
  margin-bottom: 10px;
}
button {
  padding: 13px 20px;
  max-width: 200px;
  text-align: center;
  margin: 10px;
  background: #fa9b2f;
  color: #FFF;
  border: none;
  border-radius: 3px;
  font-weight: 500;
}
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
ul li, ul.dotted-ul li {
  padding: 7px;
  text-align: left;
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
    margin: 30px 8px;
  }
  .pad-30 {
    padding: 0px;
  }
  .sc-items {
    padding: 10px;
    flex-flow: column nowrap;
    align-items: center;
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
import axios from 'axios';

export default {
  data() {
    return {
      mailStatus: "Sumbit",
      name: null,
      mail: null,
      message: null,
    };
  },
  mounted() {
  },
  methods: {
    sendMail() {
      this.mailStatus = "Please wait ...";
      axios.post('http://fairafriq.org/api/public/mail', {
        senderName: this.name,
        senderEmail: this.mail,
        message: this.message,
      }).then((response) => {
        if (response.status === 200) {
          alert('Your feedback has been sent. Thank you');
        }else {
          alert('Unable to send feedback at the moment. Try again later');
        }
      }).catch((err) => {
        alert('Unable to send feedback at the moment try again later');
      }).finally(() => {
        this.mailStatus = 'Submit';
      });
    }
  },
};
</script>
