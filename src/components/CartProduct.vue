<script setup>
import { defineProps } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  removeProduct: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row gap-5 items-center">
    <div class="flex items-center">
      <img
        :src="product?.detail?.image"
        alt="Image"
        class="w-32 h-32 object-contain"
      />

      <div class="ml-4">
        <p class="text-gray-800 font-bold">{{ product?.detail?.name }}</p>
        <p class="text-gray-400">{{ product?.detail?.price }}</p>
        <p class="text-gray-400">Quantity: {{ product?.detail?.quantity }}</p>
      </div>
    </div>

    <button
      @click="removeProduct(product.id)"
      class="p-1 bg-blue-500 text-white w-8 h-8"
    >
      X
    </button>
  </div>
</template>
