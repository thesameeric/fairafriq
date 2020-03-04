import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/whatwedo',
      name: 'what we do',
      component: () => import('./views/realdrip.vue'),
    },
    {
      path: '/stories',
      name: 'our stories',
      component: () => import('./views/ourstories.vue'),
    },
    {
      path: '/team/:name',
      name: 'team',
      component: () => import('./views/team.vue'),
    },
    {
      path: '/school',
      name: 'school',
      component: () => import('./views/school.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
});
