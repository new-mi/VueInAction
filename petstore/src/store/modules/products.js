import axios from "axios";

export default {
  namespace: "prodik",
  state: {
    products: [],
  },
  mutations: {
    SET_STORE: function(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    initStore: (context) => {
      axios.get("/products.json").then((response) => {
        context.commit("SET_STORE", response.data.products);
      });
    },
  },
  getters: {
    products: (state) => state.products,
  },
};
