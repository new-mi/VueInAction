<template>
  <div class="main">
    <div v-for="product in sortedProducts">
      <div class="row">
        <div class="col-md-5">
          <figure>
            <img class="product" v-bind:src="product.image" alt />
          </figure>
        </div>
        <div class="col-md-6 offset-md-1 description">
          <router-link
            style="cursor:pointer"
            tag="h1"
            :to="{name: 'Id', params:{id:product.id}}"
          >{{ product.title }}</router-link>
          <p v-html="product.description"></p>
          <p class="price">{{ product.price | formatPrice }}</p>
          <button
            class="btn btn-primary"
            v-if="canAddToCart(product)"
            @click="addToCart(product)"
          >Add to cart</button>
          <button v-else class="btn btn-primary disabled">Add to cart</button>
          <transition name="bounce" mode="out-in">
            <span
              key="0"
              class="inventory-message"
              v-if="product.availableInventory - cartCount(product.id) === 0"
            >All Out!</span>
            <span
              key
              class="inventory-message"
              v-else-if="product.availableInventory - cartCount(product.id) < 5"
            >
              Only {{product.availableInventory - cartCount(product.id)}}
              left!
            </span>
            <span key class="inventory-message" v-else>Buy Now!</span>
          </transition>
          <div class="rating">
            <span v-for="n in 5" :class="{'rating-active': checkRating(n, product)}">&#9734;</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { formatPrice } from "@/filters";

export default {
  name: "Main",
  props: ["props"],
  data() {
    return {};
  },
  computed: {
    sortedProducts() {
      if (!this.props.products.length) return;
      let productsArray = this.props.products.slice(0);
      function compare(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      }
      return productsArray.sort(compare);
    }
  },
  filters: {
    formatPrice
  },
  methods: {
    addToCart: function(myProduct) {
      // this.cart.push(myProduct.id);
      this.$emit("addToCart", myProduct.id);
    },
    showCheckout: function() {
      this.showProduct = !this.showProduct;
    },
    submitForm() {
      alert("submitted!");
    },
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    canAddToCart: function(myProduct) {
      return myProduct.availableInventory > this.cartCount(myProduct.id);
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.props.cart.length; i++) {
        if (this.props.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  }
};
</script>

<style scoped>
.bounce-enter-active {
  display: inline-block;
  animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {
  10%,
  90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    color: red;
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
