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
          <h1 v-text="product.title">{{ product.title }}</h1>
          <p v-html="product.description"></p>
          <p class="price">{{ product.price | formatPrice }}</p>
          <button
            class="btn btn-primary"
            v-if="canAddToCart(product)"
            @click="addToCart(product)"
          >Add to cart</button>
          <button v-else class="btn btn-primary disabled">Add to cart</button>
          <span
            class="inventory-message"
            v-if="product.availableInventory - cartCount(product.id) === 0"
          >All Out!</span>
          <span
            class="inventory-message"
            v-else-if="product.availableInventory - cartCount(product.id) < 5"
          >
            Only {{product.availableInventory - cartCount(product.id)}}
            left!
          </span>
          <span class="inventory-message" v-else>Buy Now!</span>
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
    formatPrice: function(price) {
      if (!parseInt(price)) return "";
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
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
