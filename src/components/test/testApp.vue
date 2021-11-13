<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
    >
      <v-btn @click="$router.replace({ name: 'Home' })">
        <span>Video</span>

        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn @click="$router.replace({ name: 'Music' })">
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn @click="$router.replace({ name: 'Calendar' })">
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn @click="$router.replace({ name: 'CardPage' })">
        <span>Image</span>

        <v-icon>mdi-image</v-icon>
      </v-btn>

    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    value: 3,
  }),
  computed: {
    color() {
      // switch (this.value) {
      //   case 0:
      //     return "blue-grey";
      //   case 1:
      //     return "teal";
      //   case 2:
      //     return "brown";
      //   case 3:
      //     return "indigo";
      //   default:
      //     return "blue-grey";
      // }
      // primary
      switch (this.value) {
        case 0:
          return "primary";
        case 1:
          return "primary";
        case 2:
          return "primary";
        case 3:
          return "primary";
        default:
          return "primary";
      }
    },
  },
};
</script>
