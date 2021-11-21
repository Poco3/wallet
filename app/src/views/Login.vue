<template>
  <div>
    <center>
      <table class="login">
        <tr>
          <th>メールアドレス:</th>
          <td>
            <input type="text" placeholder="E-mail" v-model="loginMail" />
          </td>
        </tr>
        <tr>
          <th>パスワード:</th>
          <td>
            <input type="password" placeholder="Password" v-model="loginPassword" />
          </td>
        </tr>
      </table>
    </center>
    <button class="button" @click="Login">ログイン</button>
    <br />
    <router-link to="/sign-up">新規登録はこちら</router-link>
  </div>
</template>

<script>
export default {
  date() {
    return {
      loginMail: "",
      loginPassword: "",
    };
  },
  methods: {
    Login() {
      this.$store.dispatch("loginUser", {
        loginMail: this.loginMail,
        loginPassword: this.loginPassword,
      });
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.button {
  border: solid aqua;
  border-radius: 10px;
  padding: 10px;
  color: aqua;
  background: white;
}
</style>

