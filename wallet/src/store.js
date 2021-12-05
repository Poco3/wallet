import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            email: "",
            password: "",
            username: "",

        }
    },
    getters: {
        email: state => state.email,
        password: state => state.password,
        username: state => state.username,


    },
    mutations: {
        setUser(state, payload) {
            state.email = payload.email
            state.password = payload.password
            state.username = payload.username
        },
    },
    actions: {
        createUser(context, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    firebase.auth().currentUser.updateProfile({
                        displayName: payload.username
                    })
                        .then(() => {
                            context.commit('setUser', payload)
                        })
                        .then(() => {
                            router.push('/home')
                        })
                })
                .catch((error) => {
                    console.log(error);
                })

        },
        loginUser(context, payload) {
            firebase
                .auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(() => {
                    context.commit('setUser', payload)
                })
                .then(() => {
                    router.push('/home')
                })
                .catch((error) => {
                    console.log(error)
                    alert('エラー');
                })

        }
    }

});

