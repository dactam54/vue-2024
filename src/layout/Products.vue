<script setup>
import { ref } from "vue";
import Product from "../components/Product.vue";
import { usePinia } from "@/store/usePinia";

const { state } = usePinia();
</script>

<template>
  <div class="h-[60vh] overflow-auto">
    <!-- <h1 class="text-center text-3xl font-bold text-gray-800 mb-6">
      Danh Sách Sản Phẩm
    </h1> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Product
        v-for="product in state.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
