import { createStore } from "vuex";

const store = createStore({
  state: {
    filesLoaded: [
      { name: "Projeto de Estruturas", date: "18/05/2022" },
      { name: "Projeto de Casas", date: "18/05/2022" },
      { name: "Diagrama Elétrico", date: "18/05/2022" },
    ],
    fileContent: [],
  },
  getters: {
    getFilesLoaded: (state) => state.filesLoaded,
  },
  mutations: {
    setFilesLoaded(state, files) {
      state.filesLoaded = files;
    },
  },
  actions: {
    async SetFilesLoaded({ commit }, files) {
      commit("setFilesLoaded", files);
    },
  },
  modules: {},
});

export default store;
