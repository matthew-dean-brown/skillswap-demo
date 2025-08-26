<template>
  <navbar-comp></navbar-comp>
  <router-view/>
  <footer-comp></footer-comp>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';

export default{
  components:{
    NavbarComp,
    FooterComp
  }
}
</script>

<style>
*{
  box-sizing: 0;
  margin: 0;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}





</style>
