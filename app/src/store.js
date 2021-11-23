import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            email: "",
            password: "",
            username: "",
            loginMail: "",
            loginPassword: "",
        }
    },
    getters: {
        email: state => state.email,
        password: state => state.password,
        username: state => state.username,
        loginMail: state => state.loginMail,
        loginPassword: state => state.loginPassword,


    },
    mutations: {
        setUser(state, word) {
            state.email = word.email
            state.password = word.password
            state.username = word.username
        },
        setLogin(state, pass) {
            state.loginMail = pass.loginMail
            state.loginPassword = pass.loginPassword

        }
    },
    actions: {
        createUser(context, word) {
            firebase.auth().createUserWithEmailAndPassword(word.email, word.password)
                .then(() => {
                    context.commit('setUser', word)
                }).catch((error) => {
                    console.log(error);
                })

        },
        loginUser(context, pass) {
            firebase
                .auth()
                .signInWithEmailAndPassword(pass.loginMail, pass.loginPassword)
                .then(() => {
                    context.commit('setLogin', pass)
                }).catch((error) => {
                    console.log(error)
                    alert('エラー');
                })

        }
    }

})