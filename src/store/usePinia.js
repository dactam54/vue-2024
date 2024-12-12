

import { defineStore } from "pinia";
import { ref } from "vue";
import products from "../datas.js";

export const usePinia = defineStore("useStore", () => {

  const state = ref({
    cart: [],
    products: products,
    selected: products[0],
  });

  const localCart = localStorage.getItem("cart");
  if (localCart) {
    state.value.cart = JSON.parse(localCart);
  }

  const isCartBool = (product, val = true) => {
    if (product) {
      product.isCart = val;
    }
  }

  const loopFunc = (arr, id) => {
    if (!Array.isArray(arr) || !id) {
      return
    }
    return arr.find((item) => item.id === id)
  }

  const updateLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(state.value.cart));
  }

  const updateProducts = () => {
    state.value.cart = JSON.parse(localStorage.getItem("cart"));
    if (!state.value.cart) {
      state.value.cart = [];
    }
    state.value.products.map((product) => {
      const cartItem = loopFunc(state.value.cart, product.id)
      cartItem && isCartBool(product);
    });
  }
  updateProducts();

  const selectedProduct = (id) => {
    state.value.selected = loopFunc(state.value.products, id)
  };

  const addToCart = (id) => {
    const product = loopFunc(state.value.products, id)
    const cartItem = loopFunc(state.value.cart, id)

    if (cartItem) {
      cartItem.detail.quantity++;
    } else {
      state.value.cart.push({
        id: product.id,
        detail: { ...product, quantity: 1 },
      });
      product && isCartBool(product);
    }
    updateLocalStorage();
  };

  const totalPrice = () => {
    return state.value.cart.reduce(
      (total, product) =>
        total + product.detail.price * product.detail.quantity,
      0
    );
  };

  const removeProduct = (id) => {
    state.value.cart = state.value.cart.filter((product) => product.id !== id);
    const product = loopFunc(state.value.products, id)
    product && isCartBool(product, false);
    updateLocalStorage();
  };

  const updateCart = (id, quantity) => {
    const cartItem = loopFunc(state.value.cart, id)
    if (cartItem) {
      if (quantity > 0) {
        cartItem.detail.quantity = quantity;
      } else {
        removeProduct(id);
      }
    }
    updateLocalStorage();
  };

  const clearCart = () => {
    state.value.cart = [];
    state.value.products.map((product) => {
      isCartBool(product, false);
    });
    updateLocalStorage();
  };

  return {
    state,
    loopFunc,
    isCartBool,
    selectedProduct,
    addToCart,
    totalPrice,
    removeProduct,
    updateCart,
    clearCart,
  };
});

