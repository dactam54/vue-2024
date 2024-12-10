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
  <div>
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

    <button @click="removeProduct(product?.id)">X</button>
  </div>
</template>
