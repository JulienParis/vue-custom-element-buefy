
export const defaultStore = {
  state: {
    boolean: false
  },
  mutations: {
    changeBoolean (state) {
      state.boolean = !state.boolean
    }
  },
  actions: {
    changeBool ({ commit }) {
      commit('changeBoolean')
    }
  }
}
