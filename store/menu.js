export const state = () => ({
  visible: false,
})

export const actions = {
  show({ commit }) {
    commit('SET_VISIBILITY', true)
  },

  hide({ commit }) {
    commit('SET_VISIBILITY', false)
  },

  toggle({ commit, state }) {
    commit('SET_VISIBILITY', !state.visible)
  },
}

export const mutations = {
  SET_VISIBILITY(state, visibility) {
    state.visible = visibility
  }
}