import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 3,
    colorCode: 'green',
  },

  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber

    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },

    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },



  },
  actions: {
    increaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })

    },

    decreaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseCounter', response.data)
      })

    },
  },
  getters: {
    coutnerSquared(state) {
      return state.counter * state.counter
    }
  },

  modules: {
  }
})
