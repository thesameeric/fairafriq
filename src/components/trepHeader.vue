<template>
    <header id="header"
        class="flex col-lg-6 header justify-content-space-between align-items-center">
        <div>
            <a href="/">
                <img class="logo" src="../assets/logo.jpg" alt="">
            </a>
        </div>
        <menu class="flex menu-holder">
            <div @click="toggleMenu" id="menuToggle">
                <input type="checkbox" id="menumenu" />
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav class="nav slideinMenu">
                <router-link :to="{name: 'home'}">
                    <a @click="toggleMenu2" href="">Home</a>
                </router-link>
                <router-link :to="{name: 'about'}">
                    <a @click="toggleMenu2" href="">About</a>
                </router-link>
                <router-link :to="{name: 'what we do'}">
                    <a @click="toggleMenu2" href="">What we do</a>
                </router-link>
                <router-link :to="{name: 'our stories'}">
                    <a @click="toggleMenu2" href="">Our stories</a>
                </router-link>
                <router-link :to="{name: 'school'}">
                    <a @click="toggleMenu2" href="">School / Education</a>
                </router-link>
                <router-link :to="{name: 'contact'}">
                    <a @click="toggleMenu2" href="">Contact</a>
                </router-link>
            </nav>
        </menu>
    </header>
</template>
<script>
export default {
  methods: {
    getElement(element) {
      const ele = document.querySelectorAll(element);
      for (let i = 0; i < ele.length; i += 1) {
        return ele[i];
      }
    },
    toggleMenu() {
      const style = document.createElement('style');
      const startTime = 0.3;
      const timeDiff = 0.2;

      document.head.appendChild(style);
      const nav = this.getElement('.slideinMenu');
      nav.classList.toggle('open');
      const navA = nav.children;
      for (let i = 0; i < navA.length; i += 1) {
        navA[i].classList.add(`trepSlideIn${i}`);
        style.sheet.insertRule(`.trepSlideIn${i} {margin-left:0px; animation-name: slideitin${i}; animation-duration: ${startTime + (i * timeDiff)}s; animation-iteration-count:1 } `);
        style.sheet.insertRule(`@keyframes slideitin${i} { ${10 * i}% { margin-left:-500px; visibility:0;} 100% {margin-left: 0px; visibility:1} }`);
      }
    },
    toggleMenu2() {
      if (document.getElementById('menumenu').checked === true) {
        document.getElementById('menumenu').checked = false;
      }
      const nav = this.getElement('.slideinMenu');
      nav.classList.toggle('open');
    },
  },
};
</script>
<style scoped>
    .header .logo {
        height: 80px;
        object-fit: contain;
        margin: 20px 30px;
    }
    nav {
        display: flex;
        padding: 20px;
    }
    nav a {
        padding: 5px 20px;
        color: rgb(53, 53, 53);
        font-weight: 500;
    }
    .nav a {
        color: #000;
    }
    .header {
        position: fixed;
        left: 0; top: 0;
        transition: all ease-in-out 2s;
        z-index: 99999999999;
    }
    .header.open {
        background: rgba(255, 255, 255, 0.7);
        z-index: 999999999;
    }
    .header.open .logo{
        height: 50px;
        margin: 0 30px;
    }
    #menuToggle input
    {
        display: none;
    }
    @media only screen and (max-width: 720px) {
        .menu-holder {
            position: absolute;
            top: 0;
            min-width: 100%;
        }
        .nav {
            display: none;
            flex-flow: column nowrap;
            align-items: flex-start;
            height: 100vh;
            min-width: 100%;
            width: 100%;
            background: rgb(255, 255, 255);
        }
        nav a {
            color: #000;
            font-size: 20px;
            margin-bottom: 20px;
        }
        .nav.open {
            display: flex;
            position: absolute;
            padding-top: 90px;
        }
        #menuToggle
        {
            display: block;
            height: 20px;
            position: absolute;
            right: 9px;
            -webkit-user-select: none;
            user-select: none;
            margin: 20px;
        }

        #menuToggle input
        {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;
            cursor: pointer;
            opacity: 0; /* hide this */
            z-index: 2; /* and place it over the hamburger */
            -webkit-touch-callout: none;
        }
        #menuToggle span
        {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;
            background: #333333;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        opacity 0.55s ease;
        }
        #menuToggle span:first-child
        {
            transform-origin: 0% 0%;
        }
        #menuToggle span:nth-last-child(2)
        {
            transform-origin: 0% 100%;
        }
        #menuToggle input:checked ~ span
        {
            opacity: 1;
            transform: rotate(-45deg) translate(-2px, -2px);
            background: #313131;
        }
        #menuToggle input:checked ~ span:nth-last-child(2)
        {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }
        #menuToggle input:checked ~ span:nth-last-child(3)
        {
            transform: rotate(45deg) translate(0, -1px);
        }
    }
</style>
