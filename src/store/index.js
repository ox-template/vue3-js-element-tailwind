import { createStore } from "vuex";
const state = {};

const modulesFiles = import.meta.globEager("./modules/*.js");
const modules = Object.values(modulesFiles)
  .map((v) => {
    return v.default || {};
  })

const store = createStore({
  modules,
  state,
});

export default store;
