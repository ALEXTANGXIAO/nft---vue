<template>
  <v-card
    class="mx-auto"
    max-width="500"
    center
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            v-model="user.email"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            v-model="user.password"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="comformPassword"
            type="password"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="indigo"
        dark
        depressed
        @click="next"
      >
        Next
      </v-btn>
    </v-card-actions>

    <div class="text-center">
      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="indigo"
          dark
        >
          <v-card-text>
            Please stand by
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <v-overlay :value="dialog"></v-overlay>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    step: 1,
    user: {
      name: "",
      telephone: "",
      password: "",
    },
    comformPassword: "",
  }),
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    },
  },
  methods: {
    next() {
      this.step++;
      switch (this.step) {
        case 3:
          this.dialog = true;
          console.log(localStorage.getItem("token"));

          if (this.user.telephone.length != 11) {
            console.log("error");
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
              // console.log(res.data.msg);
              console.log(err);
            });
          console.log("login");
          return;
        default:
          return;
      }
    },
    login() {
      console.log(localStorage.getItem("token"));

      if (this.user.telephone.length != 11) {
        console.log("error");
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
          // console.log(res.data.msg);
          console.log(err);
        });
      console.log("login");
    },
  },
};
</script>