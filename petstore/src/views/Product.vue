<template>
  <div>
    <h1>This is product page {{$route.params.id}}</h1>
    <div class="row">
      <div class="col-md-5">
        <figure>
          <img class="product" v-bind:src="product.image" alt />
        </figure>
      </div>
      <div class="col-md-6 offset-md-1 description">
        <h1 v-text="product.title">{{ product.title }}</h1>
        <p v-html="product.description"></p>
        <p class="price">{{ product.price | formatPrice }}</p>
        <button class="btn btn-secondary" @click="edit">Edit Product</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { formatPrice } from "@/filters";

export default {
  name: "Product",
  data() {
    return {
      product: ""
    };
  },
  created() {
    axios.get("/products.json").then(response => {
      this.product = response.data.products.filter(
        data => data.id == this.$route.params.id
      )[0];
      this.product.image = "/" + this.product.image;
    });
  },
  filters: { formatPrice },
  methods: {
    edit() {
      if (this.$route.name === "Edit") this.$router.go(-1);
      else this.$router.push({ name: "Edit" });
    }
  }
};
</script>