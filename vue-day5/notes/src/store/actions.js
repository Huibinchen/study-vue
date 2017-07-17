export default {
  addNote ({commit}) {
    commit('ADD_NOTE')
  },
  updateActiveNote ({commit}, item) {
    commit('UPDATE_ACTIVE_NOTE', item)
  },
  toggleFavorite ({commit}) {
    commit('TOGGLE_FAVORITE')
  },
  deleteNote ({commit}) {
    commit('DELETE_NOTE')
  }
}
