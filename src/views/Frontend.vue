<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-center>
      <v-flex sm11 md4 lg3>
        <v-card flat class="leftCard">
          <v-card-text>
            <p class="text-xs-right mr-3">
              <span class="display-2 font-weight-thin">Front-end Web Developer</span>
              <v-rating v-model="rating" color="gray darken-3" background-color="gray lighten-3" half-increments readonly></v-rating>
              <v-btn flat outline large to="/contact" class="ma-4">Hire me!</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm11 md6 lg5>
        <v-card class="rightCard elevation-7">
          <v-img src="http://spxstudios.com/wp-content/uploads/web-351-232.png" aspect-ratio="2.5" alt="image consists of electronic device from spxstudios.com" class="mb-3"></v-img>

          <v-card-text>

            <span class="headline text-xs-right ma-2">Front-end Development</span>
            <p class="ma-2">Front-end development is one of the things I enjoy doing. Converting designs from wireframes and prototypes and turning them to an actual application is always exciting. Finding solutions on how to convert a design into an actual app often leads to new knowledge and self-improvement which is really good for any developer as we know that technology never stops evolving.</p>

            <p class="ma-2">Front-end developing tools and technology I've used so far are HTML, CSS, VueJS, MVC and right now, I am trying to learn React. I also have some knowledge on Wordpress and Wix.</p>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      rating: 4.5
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