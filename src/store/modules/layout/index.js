export default {
  namespaced: true,

  state: {
    sidebarClose: true,
  },

  mutations: {
    switchSidebar(state, value) {
      if (value) {
        state.sidebarClose = value;
      } else {
        state.sidebarClose = !state.sidebarClose;
      }
    },
  },

  actions: {
    switchSidebar({ commit }, value) {
      commit("switchSidebar", value);
    },
  },
};
