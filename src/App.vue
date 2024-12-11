<script setup>
import { reactive } from "vue";
import products from "./datas.js";
import Homepage from "./pages/Homepage.vue";

//Redux = Reactive = VueX  = Pinia
const store = reactive({
  cart: [],
  products: products,
  selected: products[0],

  selectedProduct(id) {
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
    const cartItem = store.cart.find((item) => item.id === id);
    if (cartItem) {
      cartItem.detail.quantity++;
    } else {
      store.cart.push({
        id: product.id,
        detail: { ...product, quantity: 1 },
      });

      if (product) {
        product.isCart = true;
      }
    }
  },

  updateCart(id, quantity) {
    const cartItem = store.cart.find((item) => item.id === id);
    if (cartItem) {
      if (quantity > 0) {
        cartItem.detail.quantity = quantity;
      } else {
        this.removeProduct(id);
      }
    }
  },

  removeProduct(id) {
    store.cart = store.cart.filter((product) => product.id !== id);
    const product = store.products.find((product) => product.id === id);
    if (product) {
      product.isCart = false;
    }
    // this.updateCart(id, 0);
  },

  clearCart() {
    store.cart = [];
    store.products.map((product) => {
      product.isCart = false;
    });
  },

  totalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.detail.price * item.detail.quantity,
      0
    );
  },
});
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 p-6">
    <Homepage :store="store" />
  </div>
</template>
