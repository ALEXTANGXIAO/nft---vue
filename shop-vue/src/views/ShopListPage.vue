<template>
  <v-card
    class="mx-auto"
    max-width="95%"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="auto"
        >
          <v-card>
            <v-img
              class="white--text align-end mx-auto"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="180px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
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
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/20/qbmg7qik_o_1esfjcb3333vh5lun13me1v1ju.jpeg",
        flex: 6,
      },
      {
        title: "Favorite road trips",
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/23/bWLcyX8C_o_1esmncguf16lh1s7b12r294g7on11.png",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/01/23/ERH22cVB_o_1esmssoo79dg1b481nhrk1om11v.jpeg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/11/15/o_1fkh1mbtsjkp1tmjkktckttnap.jpeg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://tcloud-1258327636.cos.ap-guangzhou.myqcloud.com/uploads/2021/11/15/o_1fkh1mbts1lso6ae6lvk9lbk9m.jpeg",
        flex: 6,
      },
    ],
  }),
};
</script>