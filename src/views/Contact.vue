<template>
  <v-container fluid ma-0 pa-0>
    <v-layout row wrap justify-center fill-height>
      <v-flex sm11>
        <v-card flat class="midCard">
          <v-card-text>
            <p class="text-xs-center mb-5">
              <span class="display-3 font-weight-thin">Unfortunately, the contact form is not yet completed.</span>
            </p>
            <p class="text-xs-center">
              <span class="display-1 font-weight-thin">For now, Please check my profile in <b>LinkedIn.</b></span><br>
            <v-btn flat outline large class="ma-5" href="https://www.linkedin.com/in/mcklien-ross/">Check my LinkedIn</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
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