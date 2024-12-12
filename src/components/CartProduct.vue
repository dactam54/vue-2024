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
  <div class="flex flex-row gap-5 items-center w-full justify-between">
    <div
      class="flex items-center relative border-dashed border-2 border-grey-500 p-2"
    >
      <img
        :src="product?.detail?.image"
        alt="Image"
        class="w-32 h-32 object-contain"
      />

      <button
        @click="removeProduct(product.id)"
        class="bg-black text-white w-8 h-8 absolute right-0 top-0"
      >
        X
      </button>
      <!-- <div class="ml-4">
        <p class="text-gray-800 font-bold">{{ product?.detail?.name }}</p>
        <p class="text-gray-400">Price: {{ product?.detail?.price }}</p>
        <p class="text-gray-400">Quantity: {{ product?.detail?.quantity }}</p>
      </div> -->
    </div>
  </div>
</template>
