<script setup>
import Products from "../layout/Products.vue";
import Cart from "../layout/Cart.vue";
import CardSelected from "../components/CardSelected.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <CardSelected />
    <div class="flex flex-row gap-10">
      <Products class="w-2/3" />
      <Cart class="w-1/3" />
    </div>
  </div>
</template>
