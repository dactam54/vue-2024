<script setup>
import { ref } from "vue";
import CartProduct from "../components/CartProduct.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = ref(props.store);

const clearCart = () => {
  store.value.cart = [];
};

const removeProduct = (id) => {
  store.value.cart = store.value.cart.filter((product) => product.id !== id);
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800">
      {{ store?.cart?.length }} /
      {{ store?.products?.length }}
    </h2>

    <button @click="clearCart" class="text-blue-500 px-4 py-2">Reset</button>
  </div>

  <div v-if="store.cart?.length === 0" class="text-center text-gray-800">
    <p>Chưa có sản phẩm</p>
  </div>

  <div v-else>
    <div
      v-for="product in store.cart"
      :key="product.id"
      class="flex items-center justify-between border-b border-gray-200 py-4"
    >
      <CartProduct :product="product" :removeProduct="removeProduct" />
    </div>

    <div class="flex justify-between items-center mt-6">
      <p class="text-gray-800 font-bold">
        Total Price: {{ store.totalPrice().toFixed(2) }}
      </p>
    </div>
  </div>
</template>
