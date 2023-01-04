
export const defaultStore = {
  state: {
    boolean: undefined
  },
  mutations: {
    setBoolean (state, bool) {
      state.boolean = bool
    }
  },
  actions: {
    setBool ({ commit }, bool) {
      commit('setBoolean', bool)
    }
  }
}
