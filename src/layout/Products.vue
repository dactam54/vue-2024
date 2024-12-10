<script setup>
import { toRefs } from "vue";
import Product from "../components/Product.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;
const { products } = toRefs(store);
</script>

<template>
  <div>
    <h1 class="text-center text-3xl font-bold text-gray-800 mb-6">
      Danh Sách Sản Phẩm
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Product
        v-for="product in store.products"
        :key="product.id"
        :product="product"
        :store="store"
      />
    </div>
  </div>
</template>
