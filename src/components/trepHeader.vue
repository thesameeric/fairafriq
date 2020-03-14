<template>
    <header id="header" class="flex center middle">
      <div class="flex center middle mar-15 logolize">
          <img src="../assets/logo.jpg" alt="logo">
          <div class="flex center pad-15" id="mobile-nav">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
      <nav class="menu">
        <ul>
            <li>
                <router-link @click="closeMenu" :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link @click="closeMenu" :to="{name: 'about'}">About</router-link>
            </li>
            <li>
              <a class="pikined" href="#">What we do</a>
              <ul>
                <li>
                  <router-link @click="closeMenu" :to="{name: 'school'}">
                    School / Education</router-link>
                </li>
                <li>
                  <router-link @click="closeMenu" :to="{name: 'what we do'}">Others</router-link>
                </li>
              </ul>
            </li>
            <li><router-link @click="closeMenu" :to="{name: 'our stories'}">
                  Our stories
                </router-link>
            </li>
            <li><router-link @click="closeMenu" :to="{name: 'contact'}">
                  Contact
                </router-link>
            </li>
        </ul>
    </nav>
    </header>
</template>
<script>
export default {
  mounted() {
    let offset = window.pageYOffset;
    const header = document.querySelector('#header');
    window.onscroll = () => {
      offset = window.pageYOffset;
      if (offset >= 200) {
        header.classList.add('open');
      } else {
        header.classList.remove('open');
      }
    };

    if (offset >= 200) {
      header.classList.add('open');
    } else {
      header.classList.remove('open');
    }

    function ele(selector) { return document.querySelectorAll(selector); }
    const x = ele('.menu ul li a');
    const mobile = ele('#mobile-nav');
    const y = ele('.menu');

    [].forEach.call(x, (el) => {
      el.addEventListener('click', (e) => {
        if (!el.classList.contains('pikined')) {
          [].forEach.call(y, (a) => {
            a.classList.toggle('down');
          });
          [].forEach.call(mobile, (u) => {
            u.classList.toggle('open');
          });
        } else {
          e.preventDefault();
        }
      });
    });

    [].forEach.call(mobile, (nav) => {
      nav.addEventListener('click', (q) => {
        nav.classList.toggle('open');
        [].forEach.call(y, (u) => {
          u.classList.toggle('down');
        });
      });
    });
  },
  methods: {
    closeMenu() {
      const y = document.querySelectorAll('.menu');
      [].forEach.call(y, (u) => {
        u.classList.toggle('down');
      });
    }
  }
};
</script>
<style scoped>
  header {
    width: 100%;
    padding: 0 11px;
    position: fixed;
    z-index: 9999999999;
    top: 0; left: 0;
    height:auto;
  }
  header.open {
    background: #fa9b2f;
    color: #FFF;
    z-index: 999999999999;
  }
  header img {
    width: 100px; height: 100px;
    object-fit: contain;
    margin: 0 25px;
  }
  header.open img {
    width: 50px; height: 50px;
  }
  .recog-div {
    width: 50%;
  }
  .fkup{
    background-image: linear-gradient(to right, #2575fc 0%,#6a11cb  80%);
    color: #FFF;
  }
  .recog-div img{
    width: 100%; height: 450px;
    object-fit: contain;
  }
  #mobile-nav{
    display: none;
    width: 35px;
    height: 28px;
    margin:0 10px;
    align-self: center;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  #mobile-nav span {
    display: block;
    position: absolute;
    height: 3px;
    width: 50%;
    background: #FFF;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #mobile-nav span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  #mobile-nav span:nth-child(odd) {
    left:0px;
    border-radius: 9px 0 0 9px;
  }

  #mobile-nav span:nth-child(1), #mobile-nav span:nth-child(2) {
    top: 0px;
  }

  #mobile-nav span:nth-child(3), #mobile-nav span:nth-child(4) {
    top: 10px;
  }

  #mobile-nav span:nth-child(5), #mobile-nav span:nth-child(6) {
    top: 20px;
  }

  #mobile-nav.open span:nth-child(1),#mobile-nav.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  #mobile-nav.open span:nth-child(2),#mobile-nav.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  #mobile-nav.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }
  #mobile-nav.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  #mobile-nav.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  #mobile-nav.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  #mobile-nav.open span:nth-child(5) {
    left: 5px;
    top: 15px;
  }

  #mobile-nav.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 15px;
  }
  nav {
      margin: 5px auto;
  }

  nav ul {
      padding: 0;
    margin: 0;
      list-style: none;
      position: relative;
      }

  nav ul li {
      display:inline-block;
      }

  nav a {
      display:block;
      padding:10px;
      color:#FFF;
      text-decoration:none;
  }

  nav a:hover {
      color: #CCC;
  }

  /* Hide Dropdowns by Default */
  nav ul ul {
      display: none;
      position: absolute;
    border-top: 3px solid #FFF;
    background: #fa9b2f;
      top: 44px; /* the height of the main nav */
  }

  /* Display Dropdowns on Hover */
  nav ul li:hover > ul {
      display:inherit;
  }

  /* Fisrt Tier Dropdown */
  nav ul ul li {
      min-width:170px;
      float:none;
      display:list-item;
      position: relative;
  }

  /* Second, Third and more Tiers*/
  nav ul ul ul li {
      position: relative;
      top:-60px;
      left:170px;
  }


  /* Change this in order to change the Dropdown symbol */
  li > a:after { font-family:"Ionicons";content:  "\f3d0"; padding: 5px; margin-top: 3px;}
  li > a:only-child:after { content: ''; }

    @media only screen and (max-width: 720px) {
header{
      flex-flow: column nowrap;
    }
    .logolize {
      width: 100%;
      justify-content: space-between;
    }
    .menu {
      margin: 0; padding: 0;
      display: none;
      width: 100%;
      height: 0px; width: 0;
      overflow: hidden;
      flex-flow: column nowrap;
      transition: height 2s ease-in-out;

    }
    .menu.down {
      display: flex;
      height: auto; width: 100%;
      transition: height 2s ease-in;
    }
    nav ul li {
        display:block;
      text-align: center;
        }
    #mobile-nav {
      display: flex;
    }
    nav ul ul {
        display: none;
        position: inherit;
      border-top: none;
      background: #fa9b2f;
        top: 44px; /* the height of the main nav */
    }
    nav ul li ul li {
      text-align: center;
      margin: 0 auto;
    }
    header {
      background: #fa9b2f;
      color: #FFF;
    }
    header img {
      width: 50px; height: 50px;
    }
    }
</style>
