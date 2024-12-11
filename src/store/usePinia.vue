<script>
import { defineStore } from "pinia";
import { ref } from "vue";
import products from "../datas.js";

export const usePinia = defineStore("useStore", () => {
  const state = ref({
    cart: [],
    products: products,
    selected: products[0],
  });

  const selectedProduct = (id) => {
    state.value.selected = state.value.products.find(
      (product) => product.id === id
    );
  };

  const addToCart = (id) => {
    const product = state.value.products.find((product) => product.id === id);
    const cartItem = state.value.cart.find((item) => item.id === id);
    if (cartItem) {
      cartItem.detail.quantity++;
    } else {
      state.value.cart.push({
        id: product.id,
        detail: { ...product, quantity: 1 },
      });
      if (product) {
        product.isCart = true;
      }
    }
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
    const product = state.value.products.find((product) => product.id === id);
    if (product) {
      product.isCart = false;
    }
  };

  const updateCart = (id, quantity) => {
    const cartItem = state.value.cart.find((item) => item.id === id);
    if (cartItem) {
      if (quantity > 0) {
        cartItem.detail.quantity = quantity;
      } else {
        removeProduct(id);
      }
    }
  };

  const clearCart = () => {
    state.value.cart = [];
    state.value.products.map((product) => {
      product.isCart = false;
    });
  };

  return {
    state,
    selectedProduct,
    addToCart,
    totalPrice,
    removeProduct,
    updateCart,
    clearCart,
  };
});
</script>
