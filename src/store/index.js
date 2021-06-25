import Vue from "vue";
import Vuex from "vuex";
import { BASE_URL } from "../config/keys";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weights: [],
    showAddDialog: false
  },
  mutations: {
    setWeights(state, weights) {
      state.weights = weights;
    },
    showAddDialog(state) {
      state.showAddDialog = true;
    },
    closeAddDialog(state) {
      state.showAddDialog = false;
    }
  },
  actions: {
    async fetchWeights({ commit }) {
      try {
        const response = await fetch(`${BASE_URL}/api/weights`);
        const json = await response.json();
        switch (json.status) {
          case 400:
          case 404:
            throw new Error(JSON.stringify(json));

          default:
            commit("setWeights", json);
            break;
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async addWeight({ dispatch }, payload) {
      console.log(payload);
      try {
        const response = await fetch(`${BASE_URL}/api/weights`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const json = await response.json();
        console.log(json);
        switch (json.status) {
          case 400:
          case 404:
            throw new Error(JSON.stringify(json));

          default:
            dispatch("fetchWeights");
            break;
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  modules: {},
});
