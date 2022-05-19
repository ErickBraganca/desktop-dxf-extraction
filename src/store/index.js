import { createStore } from "vuex";

const store = createStore({
  state: {
    loadedFiles: [],
    fileContent: [],
  },
  getters: {
    getLoadedFiles: (state) => state.loadedFiles,
    getContentFile: (state) => state.fileContent,
  },
  mutations: {
    //Set state of historic of loaded files
    setLoadedFiles(state, file) {
      const files = state.loadedFiles;
      files.unshift(file);
    },
    //Clean historic loaded files state
    setEmptyFile(state) {
      state.loadedFiles = [];
    },
    /*------------Content File-----------------*/
    //Set file parsed content state
    setContentFile(state, content) {
      state.fileContent = content;
    },
    //Clean content loaded files state
    setEmptyContent(state) {
      state.fileContent = [];
    },
  },
  actions: {
    //Action to set historic loaded file mutation
    SET_LOADED_FILES({ commit }, file) {
      commit("setLoadedFiles", file);
    },
    //Action to set clean file historic mutation
    SET_EMPTY_FILE({ commit }) {
      commit("setEmptyFile");
    },
    /*------------Content File-----------------*/
    //Action to set file parsed content mutation
    SET_FILE_CONTENT({ commit }, content) {
      commit("setContentFile", content);
    },
    //Action to set clean parsed content mutation
    SET_EMPTY_CONTENT({ commit }) {
      commit("setEmptyContent");
    },
  },
});

export default store;
