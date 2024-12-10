<script setup>
import { reactive } from "vue";
import products from "./datas.js";

import Products from "./layout/Products.vue";
import Homepage from "./pages/Homepage.vue";

//Redux = Reactive = VueX  = Pinia
const store = reactive({
  cart: [],
  products: products,
  selected: products[0],

  selectedProduct(id) {
    console.log("AppVue", id);
    store.selected = store.products.find((product) => product.id === id);
  },

  totalPrice() {
    return store.cart.reduce(
      (total, product) =>
        total + product.detail.price * product.detail.quantity,
      0
    );
  },

  addToCart(id) {
    const product = store.products.find((product) => product.id === id);
    console.log("product", id, product);
    store.cart.push({
      id: product.id,
      detail: { ...product, quantity: 1 },
    });
    // totalPrice();
  },

  updateCart(id, quantity) {
    const iProduct = store.cart.find((product) => product.id === id);
    if (iProduct) {
      store.cart.map((product) => {
        if (product.id === id) {
          return {
            id: product.id,
            detail: { ...product.detail, quantity: quantity },
          };
        }
        return product;
      });
    }
    totalPrice();
  },

  removeProduct(id) {
    store.cart = store.cart.filter((product) => product.id !== id);
    // totalPrice();
  },

  clearCart() {
    store.cart = [];
    // totalPrice();
  },
});

</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 p-6">
    <Homepage :store="store" />
  </div>
</template>
