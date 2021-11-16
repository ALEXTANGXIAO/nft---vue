<template>
  <v-app>
    <!-- indigo 紫色
    primary 蓝色 -->
    <v-app-bar
      app
      color="indigo"
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
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-wallet</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <!--v-navigation-drawer -->
        <v-navigation-drawer
          v-model="drawer"
          fixed
          temporary
          right
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/23/ERH22cVB_o_1esmssoo79dg1b481nhrk1om11v.jpeg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="font-weight-medium">John Leider</div>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              @click="$router.replace({ name: item.router })"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <div class="font-weight-medium">{{ item.title }}</div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div class="pa-2">
            <v-btn
              block
              @click="$router.replace({ name: 'LoginPage' })"
            > Logout </v-btn>
          </div>

          <template>
            <v-footer
              dark
              padless
              absolute
            >
              <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-center"
              >
                <v-card-text>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-2 white--text"
                    icon
                  >
                    <v-icon size="26px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                  Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
                  amet. Mauris cursus commodo interdum.
                </v-card-text>
              </v-card>
            </v-footer>
          </template>
        </v-navigation-drawer>
      </v-container>
    </v-main>

    <!--v-footer -->
    <v-footer app>
      <v-bottom-navigation
        v-model="value"
        :input-value="active"
        color="indigo"
        app
      >
        <v-btn>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log("fuck u");
    console.log(this.$vuetify.breakpoint.width);
    if (this.$vuetify.breakpoint.width <= 400) {
      this.active = true;
    }
  },
  data() {
    return {
      value: 1,
      active: false,
      drawer: null,
      template: 1,
      items: [
        // { title: "Home", icon: "mdi-view-dashboard" },
        // { title: "About", icon: "mdi-forum" },
        { title: "Dashboard", icon: "mdi-view-dashboard", router: "Music" },
        { title: "Account", icon: "mdi-account-box", router: "CardPage" },
        { title: "Admin", icon: "mdi-gavel", router: "Calendar" },
        { title: "Music", icon: "mdi-music-box", router: "Music" },
        { title: "CardPage", icon: "mdi-credit-card-fast", router: "CardPage" },
        {
          title: "Calendar",
          icon: "mdi-application-settings",
          router: "Calendar",
        },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
