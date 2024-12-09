<script setup>
import Product from "../components/Product.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
