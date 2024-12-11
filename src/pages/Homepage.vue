<script setup>
import { defineProps, ref } from "vue";
import Products from "../layout/Products.vue";
import Cart from "../layout/Cart.vue";
import CardSelected from "../components/CardSelected.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <CardSelected :store="store" />
    <div class="flex flex-row gap-20">
      <Products :store="store" class="w-2/3" />
      <Cart :store="store" class="w-1/3" />
    </div>
  </div>
</template>
