<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-center>
      <v-flex sm11 md4 lg3>
        <v-card flat class="leftCard">
          <v-card-text>
            <p class="text-xs-right mr-3">
              <span class="display-2 font-weight-thin">System Administrator (Sysadmin)</span>
              <v-rating v-model="rating" color="gray darken-3" background-color="gray lighten-3" half-increments readonly></v-rating>
              <v-btn flat outline large to="/contact" class="ma-4">Hire me!</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm11 md6 lg5>
        <v-card class="rightCard elevation-7">
          <v-img src="https://www.tagetik.com/en/blog/images/2016-07-28-ssa-mantini" aspect-ratio="2.5" alt="image of a sysadmin from tagetik.com" class="mb-3"></v-img>

          <v-card-text>

            <span class="headline text-xs-right">System Administration</span>
            <p class="pa-1 mb-3">System admins are responsible for the daily management, upkeep and configuration of computer systems of an organization or business. This includes installing and managing desktop and laptop computers, servers or Networks.</p>

            <p class="pa-1 mb-3">In my school days, we used Oracle VM to practice Linux and Powershell commands while also documenting what is being done.</p>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      rating: 3.5
    })
  }
</script>
<style scoped>
.leftCard {
  background-color: transparent;
}
.rightCard {
  padding: 0;
}
</style>