import stocks from '../data/index.js'

const state = {
  stocks: []
};

const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  randomStocks(state) {

  }
};

const actions = {
  buyStock(context, order) {
    context.commit('', order)
  },
  initStocks(context) {
    context.commit('setStocks', stocks)
  },
  randomizeStocks(context) {
    context.commit('randomStocks')
  }
};

const getters = {
  stocks(state) {
    return state.stocks
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}