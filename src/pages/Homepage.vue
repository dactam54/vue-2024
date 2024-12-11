<script setup>
import Products from "../layout/Products.vue";
import Cart from "../layout/Cart.vue";
import CardSelected from "../components/CardSelected.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <CardSelected />
    <div class="flex flex-row gap-20">
      <Products class="w-3/5" />
      <Cart class="w-2/5" />
    </div>
  </div>
</template>
