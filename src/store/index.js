import Vue from "vue";
import Vuex from "vuex";
import { BASE_URL } from "../config/keys";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weights: [],
    showAddDialog: false,
  },
  mutations: {
    setWeights(state, weights) {
      state.weights = weights;
    },
    deleteWeight(state, payload) {
      const i = state.weights.findIndex((w) => w._id == payload);
      state.weights.splice(i, 1);
    },
    showAddDialog(state) {
      state.showAddDialog = true;
    },
    closeAddDialog(state) {
      state.showAddDialog = false;
    },
  },
  actions: {
    async fetchWeights({ commit }) {
      try {
        const response = await fetch(`${BASE_URL}/api/weights`);
        const json = await response.json();
        switch (response.status) {
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
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        console.log(response);
        switch (response.status) {
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
    },
    async removeWeight({ commit }, payload) {
      try {
        const response = await fetch(`${BASE_URL}/api/weights/${payload}`, {
          method: "DELETE",
        });
        console.log(response);
        const text = await response.text();
        console.log(text);
        switch (response.status) {
          case 400:
          case 404:
            throw new Error(JSON.stringify(response));

          default:
            commit("deleteWeight", payload);
            break;
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  modules: {},
});
