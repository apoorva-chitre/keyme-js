import Vue from "vue";
import Vuex from "vuex";
import data from "./../../../data.json";
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  //plugins: [createPersistedState()],

  state: {
    keyData: data,
    orderData: []
  },

  getters: {
    getKeyData: state => {
      return state.keyData;
    },

    getOrderData: state => {
      return state.orderData;
    },

    getKeyById: state => id => {
      return state.keyData.find(key => key.id === id);
    }
  },

  mutations: {
    ADD_CART_ITEMS_TO_ORDERS: (state, cartItems) => {
      state.orderData = cartItems;
    },

    RESET_STATE: state => {
      state.keyData = data;
      state.orderData = [];
    }
  },
  actions: {
    addCartItemsToOrders: ({ commit }, cartItems) => {
      commit("ADD_CART_ITEMS_TO_ORDERS", cartItems);
    },

    resetState: ({ commit }) => {
      commit("RESET_STATE");
    }
  },
  modules: {}
});
