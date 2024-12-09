<script setup>
import products from "./datas.js";
import Products from "./Pages/Products.vue";
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-center text-3xl font-bold text-gray-800 mb-6">
      Danh Sách Sản Phẩm
    </h1>

    <Products :products="products" />
  </div>
</template>
