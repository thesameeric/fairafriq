<template>
  <div id="app">
    <trepHeader></trepHeader>
    <router-view/>
    <trepFooter></trepFooter>
  </div>
</template>
<script>
import trepHeader from '@/components/trepHeader';
import trepFooter from '@/components/trepFooter';

export default {
  components: {
    trepHeader,
    trepFooter,
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
