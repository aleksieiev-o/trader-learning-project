import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  /* --- STATE --- */
  state: {
    funds: 5000,
    actualStocks: [],
    acquiredStocks: [],
    stocks: [
      {
        title: 'BMW',
        price: 150,
      },
      {
        title: 'Google',
        price: 450,
      },
      {
        title: 'Facebook',
        price: 250,
      },
      {
        title: 'Twitter',
        price: 180,
      },
    ],
    disabled: false,
  },
  /* --- GETTERS --- */
  getters: {
    getActualStocks(state) {
      // console.log(state.actualStocks)
      return state.actualStocks
    },
    getAcquiredStocks(state) {
      // console.log(state.acquiredStocks)
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
        // eslint-disable-next-line no-param-reassign
        item.price += randomFuncPrice(-10, 10)
        const itemPrice = state.acquiredStocks.find(cost => cost.title === item.title)
        if (itemPrice) {
          itemPrice.price = item.price
        }
      })
    },
    setDisabled(state, payload) {
      state.disabled = payload
    },
    setBuyFunds(state, { price, title, quantity }) {
      const record = state.acquiredStocks.find(item => item.title === title);
      if (record) {
        record.quantity += quantity
      } else {
        state.acquiredStocks.push({
          title,
          price,
          quantity,
        })
      }
      state.funds -= price * quantity
    },
    setCellFunds(state, { price, title, quantity }) {
      const record = state.acquiredStocks.find(item => item.title === title);
      if (record.quantity > quantity) {
        record.quantity -= quantity
      } else {
        state.acquiredStocks.splice(state.acquiredStocks.indexOf(record), 1)
      }
      state.funds += price * quantity
    },
    writeSavingData(state, payload) {
      state.funds = payload.funds ? payload.funds : 0
      state.actualStocks = payload.actualStocks ? payload.actualStocks : []
      state.acquiredStocks = payload.portfolio ? payload.portfolio : []
    },
  },
  /* --- ACTIONS --- */
  actions: {
    /* load data in DB */
    loadStocks({ state }) {
      axios({
        method: 'put',
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
    loadData({ commit }) {
      commit('setDisabled', true)
      axios.get('https://stock-app-6807c.firebaseio.com/saveData.json')
        .then((resp) => {
          const response = resp
          commit('writeSavingData', response.data)
          return response.data
        })
        // .then(resp => console.log(resp))
        .then(() => commit('setDisabled', false))
        .catch(err => console.error(err))
    },
  },
})
