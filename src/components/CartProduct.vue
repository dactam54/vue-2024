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

console.log("product", props.product);
</script>

<template>
  <div>
    <div class="flex items-center">
      <img
        :src="product.image"
        alt="Product Image"
        class="w-16 h-16 object-cover"
      />

      <div class="ml-4">
        <p class="text-gray-800 font-bold">{{ product.name }}</p>
        <p class="text-gray-400">{{ product.price }}đ</p>
        <p class="text-gray-400">Quantity: {{ product.quantity }}</p>
      </div>
    </div>

    <button @click="removeProduct(product?.id)">X</button>
  </div>
</template>
