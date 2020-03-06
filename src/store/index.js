import Vue from "vue";
import Vuex from "vuex";
import db from "../db/db.json";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        product: db,
        cart: []
    },
    getters: {
        getProduct(state) {
            return state.product;
        },
        getCartCount(state) {
            return state.cart.length;
        },
        getCart(state) {
            return state.cart;
        }
    },
    mutations: {
        addCart(state, product) {
            state.cart.push(product);
        },
        deleteCart(state, cart) {
            state.cart.splice(state.cart.indexOf(cart), 1);
        }
    },
    actions: {
        actionAddCart({ commit }, product) {
            return new Promise((reslove, reject) => {
                reslove(commit("addCart", product));
                reject("error");
            });
        },
        actionDeleteCart({ commit }, product) {

            return new Promise((reslove, reject) => {
                reslove(commit("deleteCart", product));
                reject("error");
            });
        }
    },
    modules: {},
    plugins: [new VuexPersistence().plugin]
});