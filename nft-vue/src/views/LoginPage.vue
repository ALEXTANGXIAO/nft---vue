<template>

  <v-container
    class="mx-auto align-center justify-center"
    width="90%"
  >
    <v-card
      style="margin: 60px"
      max-width="400px"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>请登录</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ new Date().getDay() | getDay }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ today }}</div>

        <div>一个人最大的挑战，是如何去克服自己的缺点</div>
      </v-card-text>
    </v-card>
    <v-form
      style="margin: 60px"
      ref="form"
      v-model="valid"
      lazy-validation
      class="v_form"
    >
      <v-text-field
        v-model="user.telephone"
        :counter="32"
        :rules="nameRules"
        label="用户名"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.password"
        type="password"
        :rules="passwordRules"
        label="密码"
        :counter="64"
        required
      ></v-text-field>

      <v-checkbox
        v-model="remember"
        label="记住登录状态"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="login"
      >
        登录
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        重置
      </v-btn>

      <v-btn
        color="warning"
        class="mr-4"
        @click="$router.replace({ name: 'ResigterPage' })"
      >
        前往注册
      </v-btn>
    </v-form>
  </v-container>

</template>

<script>
export default {
  name: "Login",
  data: () => ({
    user: {
      name: "",
      telephone: "",
      password: "",
    },
    valid: true,
    username: "574809918@qq.com",
    nameRules: [
      (v) => !!v || "用户名不能为空",
      (v) => (v && v.length <= 32) || "用户名不能超过32个字符",
    ],
    password: "123456",
    passwordRules: [
      (v) => !!v || "密码不能为空",
      (v) => (v && v.length <= 64) || "密码不能超过64个字符",
    ],
    remember: false,
  }),
  filters: {
    getDay(r) {
      return ["周一", "周二", "周三", "周四", "周五", "周六", "周日"][r - 1];
    },
  },
  computed: {
    today() {
      const addZero = (val) => (val >= 10 ? val : "0" + val);
      const today = new Date();
      return `${addZero(today.getFullYear())}-${addZero(
        today.getMonth() + 1
      )}-${addZero(today.getDay())}`;
    },
  },
  methods: {
    async validate() {
      const valid = this.$refs.form.validate();
      if (!valid) return;
      if (this.username === "574809918@qq.com" && this.password === "123456") {
        await this.$store.dispatch("login", !!this.remember);
        await this.$router.push("/");
      }
    },
    reset() {
      this.$refs.form.reset();
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

<style scoped>
.v_form {
  min-width: 280px;
}
</style>
