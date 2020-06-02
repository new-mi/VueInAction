<template>
  <div id="app">
    <Header :cartItemCount="cartItemCount" />
    <main class="mt-5 container">
      <transition name="fade" mode="out-in">
        <router-view @addToCart="addToCart" :props="{ products, cart }"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Form from "@/views/Form";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      cart: []
    };
  },
  computed: {
    ...mapGetters(["products"]),
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
    this.$store.dispatch("initStore");
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
