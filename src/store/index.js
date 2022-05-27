import { createStore } from "vuex";
import { uploadFile, readFile } from "@/engine/interface";
import { notifyer } from "../service/notifyer";

const store = createStore({
  state: {
    currentFile: null,
    loadedFiles: [],
    fileContent: [],
  },
  getters: {
    getCurrentFile: (state) => state.currentFile,
    getContentFile: (state) => state.fileContent,
    getLoadedFiles: (state) => state.loadedFiles,
  },
  mutations: {
    SetCurrentFile(state, file) {
      state.currentFile = file;
    },

    SetLoadedFile(state, file) {
      const files = state.loadedFiles;
      const rawDate = new Date();
      const newDate = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(rawDate);
      file.date = newDate;
      if (files.length > 2) {
        files.pop();
      }
      files.unshift(file);
    },

    SetContentFile(state, content) {
      state.fileContent = content;
    },

    SetEmptyFile(state) {
      state.loadedFiles = [];
    },

    SetEmptyCurrent(state) {
      state.currentFile = null;
    },

    SetEmptyContent(state) {
      state.fileContent = null;
    },
  },
  actions: {
    SET_DIALOG_FILE({ commit }, query) {
      const load = (file) => {
        commit("SetCurrentFile", file);
      };
      uploadFile(query, load);
    },

    SET_READ_FILE({ commit }, file) {
      const read = (content) => {
        commit("SetContentFile", content);
        commit("SetLoadedFile", file);
        commit("SetEmptyCurrent");
        notifyer.sucess("Extração Concluída");
      };
      readFile(file, read);
    },

    SET_READ_INSTANCE({ commit }, file) {
      const read = (content) => {
        commit("SetContentFile", content);
        notifyer.sucess("Extração Concluída");
      };
      readFile(file, read);
    },

    SET_EMPTY_FILE({ commit }) {
      commit("SetEmptyCurrent");
      commit("SetEmptyFile");
    },

    SET_EMPTY_CONTENT({ commit }) {
      commit("SetEmptyContent");
    },
  },
});

export default store;
