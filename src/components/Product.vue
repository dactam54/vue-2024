<script setup>
import { usePinia } from "@/store/usePinia";
import { ref, watch } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { addToCart, removeProduct, updateCart, selectedProduct, state } =
  usePinia();

let quantity = ref(1);

const addToCartFunc = (id) => {
  addToCart(id);
};

const updateCartFunc = (id, quantity) => {
  updateCart(id, quantity);
};

const removeProductFunc = (id) => {
  removeProduct(id);
};

const isDecrease = (id) => {
  if (quantity.value > 1) {
    quantity.value--;
    updateCartFunc(id, quantity.value);
  }
  if (quantity.value === 1) {
    removeProductFunc(id);
  }
};

const isIncrease = (id) => {
  quantity.value++;
  updateCart(id, quantity.value);
};

const selectedProductFunc = (id) => {
  selectedProduct(id);
};

watch(
  () => {
    const cartItem = state.cart.find((item) => item.id === props.product.id);
    if (cartItem) {
      quantity.value = cartItem.detail.quantity;
    } else {
      quantity.value = 1;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="border-t-2 border-solid border-grey-500 overflow-hidden flex flex-row justify-between pl-6 pr-6 pt-6 pb-2"
  >
    <div>
      <h2 class="text-xl font-semibold text-gray-900">{{ product.name }}</h2>
      <p class="text-gray-600 text-sm mt-2">
        {{ product.description }}
      </p>
      <p class="text-lg text-gray-900 mt-4">${{ product.price }}</p>

      <div
        class="mt-4 text-blue-500 rounded-full cursor-pointer w-fit"
        @click="selectedProductFunc(product.id)"
      >
        Show details
      </div>
    </div>

    <div>
      <img
        :src="product.image"
        alt="Product Image"
        class="w-32 h-32 object-cover"
        @click="selectedProductFunc(product.id)"
      />

      <button
        v-if="!product.isCart"
        class="mt-4 p-2 font-bold text-green-500 cursor-pointer w-24 shadow-md shadow-grey-400 hover:shadow-xl rounded"
        @click="addToCartFunc(product.id)"
      >
        ADD
      </button>

      <div v-if="product.isCart" class="flex items-center mt-4 w-[96px] gap-2">
        <button
          @click="isDecrease(product.id)"
          class="bg-gray-100 text-gray-600 p-2 hover:bg-gray-300 shadow-md shadow-grey-400"
        >
          -
        </button>

        <input
          v-model="quantity"
          type="number"
          min="0"
          class="w-10 text-center border border-gray-300 focus:outline-none bg-inherit shadow-lg h-[40px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          @input="updateCartFunc(product.id, quantity)"
        />

        <button
          @click="isIncrease(product.id)"
          class="bg-gray-100 text-gray-600 p-2 hover:bg-gray-300 shadow-md shadow-grey-400"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
