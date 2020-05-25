<template>
  <header>
    <nav class="navbar">
      <h1>
        <router-link :to="{name: 'Main'}">{{sitename}}</router-link>
      </h1>
      <button class="btn btn-info ml-auto cart" @click="showCheckout">
        {{cartItemCount}}
        <i class="fas fa-shopping-cart"></i> Checkout
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      sitename: "VueJS Pet Depot"
    };
  },
  props: ["cartItemCount"],
  methods: {
    showCheckout() {
      this.$router.push({ name: "Form" });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
