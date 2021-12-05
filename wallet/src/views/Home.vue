<template>
  <div>
    <div class="title">
      <h2>{{user}}さんようこそ!!</h2>
      <p>
        残高1000
        <button>ログアウト</button>
      </p>
    </div>
    <h1>ユーザー覧</h1>
    {{user}}
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user.displayName;
    });
  },
};
</script>

<style>
.title {
  width: 100%;
}
h2 {
  text-align: left;
  float: left;
  font-size: 18px;
  padding-left: 20%;
  margin: 0;
}

div.title p {
  font-size: 14px;
  text-align: right;
  padding: 0;
  margin: 0;
  padding-right: 20%;
}
</style>