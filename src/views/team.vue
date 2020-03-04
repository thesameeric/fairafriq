<template>
  <div class="flex column nowrap team-holder">
    <div class="flex the-stuff" v-for="person in members" v-bind:key="person.id">
      <!-- eslint-disable -->
      <div class="flex flex4mobile"
      v-if="urlSlug === person.slug">
        <div class="flex column nowrap align-items-center">
          <img class="img-avatar" :src="person.img" :alt="person.name">
          <p class="name">{{person.name}}</p>
          <p class="title">{{person.position}}</p>
        </div>
        <div class="flex column nowrap bio-holder">
          <p class="about-head">About</p>
          <p v-html="person.biography">{{person.biography}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about-head {
  padding: 15px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 700;
}
.the-stuff {
  padding: 20px 200px;
}
  .bio-holder {
    max-width: 800px;
    padding: 10px 50px;
    p {
      text-align: left;
    }
  }
  .team-holder {
    margin-top: 100px;
    .name {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
    }
    .title {
      font-weight: 500;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      max-width: 250px;
    }
  }
  .img-avatar {
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 12px 20;
  }
  @media only screen and (max-width: 720px) {
    .the-stuff {
      padding: 12px;
      justify-content: center;
    }
    .flex4mobile {
      flex-flow: column nowrap;
    }
    .team-holder {
      margin-top: 10px;
    }
  }
</style>
<script>
export default {
  computed: {
  },
  data() {
    return {
      urlSlug: this.$route.params.name,
      members: {
        0: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/1.jpg'),
          name: 'Mr. Emmanuel Fanimoh',
          slug: 'EmmanuelFanimoh',
          position: 'cto',
          biography: 'Mr Fanimoh has his first degree in accountancy, an associate member of Cost and Executive Accountant and earned his Master’s degree in Business Administration from Lansdowne University in the United Kingdom. He also has a degree in Hospitality Management, Education and Housing management <br><br> He has worked as an assessment and resettlement Officer in various local government in the <br><br>United Kingdom. He is currently working on a project (free education for Orphans and Less <br><br>privileged children and High School Drop-out) and in Akure, Ondo State, Nigeria under the <br><br> umbrella of Fairafriq Integrity School of thought and a vision to build free education in all Africa community. <br><br> He is a motivator of youths, a counsellor, a public speaker, a community leader and has presented research papers on youth leadership in the UK and US including a presentation at GoldenCRI conference in Washington DC.',
        },
        1: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/2.jpg'),
          name: 'Mrs Ayotola O. Fanimoh',
          slug: 'AyotolaFanimoh',
          position: 'Executive Director, Corporate Development and Field Operation',
          biography: 'Mrs  Ayotola bags a (B.SC) Business Administration from Ekiti State University. A graduate member of project management professional institute ( PMPI)- NIG. Also a Peer Educator Trainer ( PET) on HIV/AIDS and Adolescent Sexual Reproductive Health. A one time volunteer for a USAID founded program SIDHAS- Project executed by family health international (fhi360) and partners. She\'s currently the executive director corporate development and field operations at foundation for African integrity.',
        },
        2: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/3.jpg'),
          name: 'Miss Marian Oyindamola Fanimoh',
          slug: 'MarianOyindamolaFanimoh',
          position: 'Executive Director and Administration',
          biography: 'Miss Marian Oyindamola Fanimoh is a BSc holder in accounting and finance, a part qualified accountant (ACCA). She  currently works as an accountant in a Tech company.',
        },
        3: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/4.jpg'),
          name: 'Mrs Tilly Opoku',
          slug: 'TillyOpoku',
          position: 'Executive Director of Ghana Urban Affairs',
          biography: 'Team member',
        },
        4: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/5.jpg'),
          name: 'Ms Petronella Kapijimpanga',
          slug: 'PetronellaKapijimpanga',
          position: 'Executive Director of Zambia Urban Affairs',
          biography: 'Mrs Petronella Kapijimpanga is the Personal Executive to CEO Anti Corruption Zambia. She is holds Certificate Psycho Social and Focal point person for HIV/AIDS activities and Certificate in Diplomatic Practice, Protocol & Public Relations',
        },
        5: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/6.jpeg'),
          name: 'Mrs Mary Aloaye Otukpe',
          slug: 'MaryAloayeOtukpe',
          position: 'Executive Board member and Partner',
          biography: 'Mrs Mary Aloaye Otukpe is holds a BSc in prrofessional Nursing (Practice). She is the Founder of Alo-Feli Empowerment Foundation',
        },
        6: {
          // eslint-disable-next-line global-require
          img: require('../assets/img/members/7.jpg'),
          name: 'Mr Isaac Ogunmola',
          slug: 'IsaacOgunmola',
          position: 'Executive Director of Nigeria Urban’s Affairs',
          biography: '...',
        },
      },
    };
  },
};
</script>
