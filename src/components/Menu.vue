<template>
  <v-container ma-0 pa-0 fluid>
    <v-layout row wrap class="text-uppercase">
        <Slide>
          <a class="menuBTN" v-for="item in menuItems" :key="item.name">
            <router-link :to="`${item.link}`">
              <span large class="menuBTN">{{item.name}}</span>
            </router-link>
          </a>

          <v-divider></v-divider>
          
          <a class="menuBTN" href="https://www.figma.com/proto/hBUjERXfIa4cbyzxNzDQcMgx/Github-Portfolio?scaling=min-zoom">
            Prototype
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
    },
    data: () => ({
      menuItems: [
        { name:'Home', link:'/'},
        { name:'Frontend', link:'/frontend'},
        { name:'Uxdesign', link:'/uxdesign'},
        { name:'Systemadmin', link:'/sysadmin'},
        { name:'Contact', link:'/contact'},
      ]
    })
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

