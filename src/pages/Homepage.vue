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
  <CardSelected :store="store" />
  <div class="flex flex-row">
    <Products :store="store" class="w-1/2" />
    <Cart :store="store" class="w-1/2" />
  </div>
</template>
