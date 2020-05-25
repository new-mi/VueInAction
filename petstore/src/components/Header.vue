<template>
  <header>
    <nav class="navbar">
      <h1>
        <router-link :to="{name: 'Main'}">{{sitename}}</router-link>
      </h1>
      <router-link
        class="btn btn-info ml-auto cart"
        active-class="active"
        tag="button"
        :to="computedLink"
      >
        {{cartItemCount}}
        <i class="fas fa-shopping-cart"></i> Checkout
      </router-link>
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
  computed: {
    computedLink() {
      if (this.$route.name === "Main") return { name: "Form" };
      else return { name: "Main" };
    }
  },
  props: ["cartItemCount"]
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
