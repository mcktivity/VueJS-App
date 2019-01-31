<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-center fill-height>
      <v-flex xs11>
        <v-card flat class="midCard">
          <v-card-text>
            <p class="text-xs-center">
              <span class="display-3 font-weight-thin">Hi, I am Mcklien. <br/> Welcome to my online <b>Portfolio.</b></span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm11 md9 lg7>
        <v-container ma-0 pa-0 fluid>
          <v-layout row wrap justify-center>
            <Chart/>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Chart from '../components/Chart.vue'

  export default {
    components: {
      Chart
    },
    data: () => ({
      rating: 4,
    })
  }
</script>
<style scoped>
.midCard {
  background-color: transparent;
}
</style>