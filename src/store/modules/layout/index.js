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
};
