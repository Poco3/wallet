<template>
  <div>
    <h1>新規登録画面</h1>
    <center>
      <table>
        <tr>
          <th>ユーザー名:</th>
          <td>
            <input type="text" placeholder="userName" v-model="username" />
          </td>
        </tr>
        <tr>
          <th>メールアドレス:</th>
          <td>
            <input type="text" placeholder="E-mail" v-model="email" />
          </td>
        </tr>
        <tr>
          <th>パスワード:</th>
          <td>
            <input type="password" placeholder="Password" v-model="password" />
          </td>
        </tr>
      </table>
    </center>
    <br />

    <button @click="Signup" class="button">新規登録</button>

    <br />
    <router-link to="/">ログインはこちら</router-link>
    <br />
  </div>
</template>

<script>
export default {
  date() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    Signup() {
      this.$store.dispatch("createUser", {
        email: this.email,
        password: this.password,
        username: this.username,
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
