import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCOUIjNQxAwOKVbkMXQ2tAh7aqZ92Dr-lk",
  authDomain: "vue-wallet-f12e5.firebaseapp.com",
  projectId: "vue-wallet-f12e5",
  storageBucket: "vue-wallet-f12e5.appspot.com",
  messagingSenderId: "750848606042",
  appId: "1:750848606042:web:b7b30dfb4fba4e92cc7d63"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

