<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <!-- <v-system-bar
      color="pink darken-2"
      dark
    >
    <v-spacer></v-spacer>

    <v-icon>mdi-window-minimize</v-icon>

    <v-icon>mdi-window-maximize</v-icon>

    <v-icon>mdi-close</v-icon>
    </v-system-bar>
    -->
    <!-- <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>The Walker</v-list-item-title>
            <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer></v-spacer>

          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            <v-btn icon>
              <v-icon>mdi-pause</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon
            class="ml-0"
            :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
          >
            <v-btn icon>
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </v-card>
</template>


<script>
export default {
  name: "Music",
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#0098FF",
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2020/12/31/zYSPPEWA_o_1eqs22cqh1adiscj1mqg1hsmq7jd.jpeg",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
  methods: {
    login() {
      if (this.user.telephone.length != 11) {
        this.ShowTelephoneDanger = true;
      }
      const api = "http://localhost:5000/api/auth/login";
      this.axios
        .post(api, { ...this.user })
        .then((res) => {
          console.log(res);
          //保存token
          // storageService.set(storageService.USER_TOKEN,res.data.data.token)
          localStorage.setItem("token", res.data.data.token);
          //跳转到主页
          this.$router.replace({ name: "Home" });
        })
        .catch((err) => {
          console.log(res.data.msg);
        });
      console.log("login");
    },
  },
};
</script>