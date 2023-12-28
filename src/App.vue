<template>
  <v-app>
    <LoadScreen v-show="loading"></LoadScreen>
    <HomeScreen v-show="!loading"></HomeScreen>
  </v-app>
  

</template>

<script>
import LoadScreen from './components/LoadScreen.vue';
import HomeScreen from './components/HomeScreen.vue';

export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 0);
  },
  components: {
    LoadScreen,
    HomeScreen
  }
}
</script>

<style>
#app {
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0%;
}
</style>
