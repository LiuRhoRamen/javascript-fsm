import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    current: 'auto',
    auto: { to: 'hot' },
    hot: { to: 'cold' },
    cold: { to: 'wind' },
    wind: { to: 'dry' },
    dry: { to: 'auto' }
  },
  mutations: {
    press(state) {
      state.current = state[state.current].to;
    },

    hot(state) {
      state.current = 'hot';
    }
  },
  actions: {
    press(context) {
      context.commit('press')
    },

    hot(context) {
      context.commit('hot')
    }
  }
});

export default Store;
