<template>
  <div id="app">
    <Header :cartItemCount="cartItemCount" />
    <main class="mt-5 container">
      <router-view @addToCart="addToCart" :props="{ products, cart }"></router-view>
    </main>
  </div>
</template>

<script>
import axios from "axios";

import Header from "@/components/Header";
import Form from "@/views/Form";

export default {
  name: "App",
  data() {
    return {
      products: [],
      cart: []
    };
  },
  computed: {
    cartItemCount: function() {
      return this.cart.length || 0;
    }
  },
  components: {
    Header
  },
  methods: {
    addToCart: function(id) {
      this.cart.push(id);
    }
  },
  created() {
    axios.get("/products.json").then(response => {
      this.products = response.data.products;
    });
  }
};
</script>
