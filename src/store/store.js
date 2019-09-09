import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  /* --- STATE --- */
  state: {
    funds: 1000,
    actualStocks: [],
    acquiredStocks: [],
    stocks: [
      {
        title: 'BMW',
        price: 80,
      },
      {
        title: 'Google',
        price: 45,
      },
      {
        title: 'Facebook',
        price: 100,
      },
      {
        title: 'Twitter',
        price: 65,
      },
    ],
    disabled: false,
  },
  /* --- GETTERS --- */
  getters: {
    getActualStocks(state) {
      return state.actualStocks
    },
    getAcquiredStocks(state) {
      return state.acquiredStocks
    },
    getDisabled(state) {
      return state.disabled
    },
    getFunds(state) {
      return state.funds
    },
  },
  /* --- MUTATIONS --- */
  mutations: {
    setActualStocks(state, payload) {
      state.actualStocks = payload
    },
    setNewStocksProperties(state) {
      const randomFuncPrice = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
      state.actualStocks.forEach((item) => {
        item.price += randomFuncPrice(-10, 10)
      })
    },
    setDisabled(state, payload) {
      state.disabled = payload
    },
    setFunds(state, payload) {
      state.funds -= payload.cost * payload.quantity
      state.acquiredStocks.push({
        title: payload.title,
        price: payload.cost,
        quantity: payload.quantity,
      })
    },
  },
  /* --- ACTIONS --- */
  actions: {
    /* load data in DB */
    loadStocks({ state }) {
      axios({
        method: 'post',
        url: 'https://stock-app-6807c.firebaseio.com/stocks.json',
        data: state.stocks,
      })
        .then(resp => console.log(resp))
    },
    loadActualStocks({ commit }) {
      axios.get('https://stock-app-6807c.firebaseio.com/stocks.json')
        .then(resp => resp.data)
        .then((resp) => {
          commit('setActualStocks', resp)
          return resp
        })
        .catch(err => console.error(err))
    },
    beginNewDay({ state, commit }) {
      commit('setNewStocksProperties')
      commit('setDisabled', true)
      axios({
        method: 'put',
        url: 'https://stock-app-6807c.firebaseio.com/stocks.json',
        data: state.actualStocks,
      })
        .then(() => commit('setDisabled', false))
        .catch(err => console.error(err))
    },
  },
})
