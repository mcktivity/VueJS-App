<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-center>
      <v-flex sm11 md4 lg3>
        <v-card flat class="leftCard">
          <v-card-text>
            <p class="text-xs-right mr-3">
              <span class="display-2 font-weight-thin">User Experience (UX) Designer</span>
              <v-rating v-model="rating" color="gray darken-3" background-color="gray lighten-3" half-increments readonly></v-rating>
              <v-btn flat outline large to="/contact" class="ma-4">Get in touch!</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm11 md6 lg5>
        <v-card class="rightCard elevation-7">
          <v-img src="http://fresco.ie/wp-content/uploads/sites/366/2018/08/perspective-psd-mockups-to-showcase-website-design-cover-2" aspect-ratio="2.3" alt="image of web designs from fresco.ie" class="mb-3"></v-img>

          <v-card-text>

            <span class="headline text-xs-right">User Experience (UX) Design</span>
            <p class="pa-1 mb-3">Who doesn't like designing? Having a product to be displayed everywhere is something everyone dream of. Designing a product that will provide great experiences for the users is never an easy task. Design, function and usability must be considered and creating solutions that caters all of these is a designer's job.</p>
            <p class="pa-1 mb-3"> Design tools and technology for wireframing and prototyping that I've used so far are Powerpoint, Figma and the most popular, pen-and-paper combo.</p>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      rating: 4
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