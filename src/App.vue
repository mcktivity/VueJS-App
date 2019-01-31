<template>
  <v-app>
    <v-content>
      <Menu/>
        <v-container mt-5 px-0 fluid>
          <v-layout row wrap justify-center fill-height>
              <transition name="router-anim" mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
                <router-view/>
              </transition>
          </v-layout>
        </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
}
</script>
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1em;
  background: rgba(255,255,255,1);
  background: -moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));
  background: -webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
}
#app .animated {
  animation-duration: 0.8s;
  }
</style>
