<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" cols="auto">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            max-width="300"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/03/13/hrQccUqT_wa_6_6.png"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-subtitle
              class="pb-0"
              v-text="card.subtitle"
            ></v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon @click="console.log(App.template)">
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import App from "../App.vue";

export default {
  name: "ShopList",
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        subtitle: "PixelSquad",
        price: 100,
        timed: 10,
        flex: 12,
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/20/qbmg7qik_o_1esfjcb3333vh5lun13me1v1ju.jpeg",
      },
      {
        title: "Favorite road trips",
        subtitle: "PixelSquad",
        price: 100,
        timed: 10,
        flex: 6,
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/23/bWLcyX8C_o_1esmncguf16lh1s7b12r294g7on11.png",
      },
      {
        title: "Best airlines",
        subtitle: "PixelSquad",
        price: 100,
        timed: 10,
        flex: 6,
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/23/ERH22cVB_o_1esmssoo79dg1b481nhrk1om11v.jpeg",
      },
    ],
  }),
};
</script>