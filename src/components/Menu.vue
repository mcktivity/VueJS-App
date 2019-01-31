<template>
  <v-container ma-0 pa-0 fluid>
    <v-layout row wrap class="text-uppercase">
        <Slide>
          <a class="menuBTN">
            <router-link to="/">
              <span large class="menuBTN">Home</span>
            </router-link>
          </a>
          <v-divider></v-divider>

          <a>
            <router-link to="/frontend">
              <span class="menuBTN">FrontEnd</span>
            </router-link>
          </a>
          <a class="menuBTN">
            <router-link to="/uxdesign">
              <span class="menuBTN">UXDesign</span>
            </router-link>
          </a>
          <a class="menuBTN">
            <router-link to="/sysadmin">
              <span class="menuBTN">SystemAdmin</span>
            </router-link>
          </a>
          
          <v-divider></v-divider>
          
          <a class="menuBTN">
            <router-link to="/contact">
              <span class="menuBTN">Contact</span>
            </router-link>
          </a>
          
          <v-divider></v-divider>
          
          <a class="menuBTN" href="https://github.com/mcktivity">
            Github
          </a> 
        </Slide >
    </v-layout>
  </v-container>
</template>

<script>
  import { Slide  } from 'vue-burger-menu'  

  export default {
    components: {
      Slide  
    }
  }
</script>

<style scoped>
a, span.menuBTN {
  text-decoration: none !important;
  color: white;
  letter-spacing: 1px; 
  font-weight: 100; 
}
</style>

