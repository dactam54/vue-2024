<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;

console.log("store", store);
</script>

<template>
  <div>Sản phẩm được chọn</div>
  <div class="flex flex-row">
    <img
      :src="store.selected.image"
      alt="store.selected Image"
      class="w-32 h-32 object-cover"
    />

    <div>
      <h2 class="text-xl font-semibold text-gray-900">
        {{ store.selected.name }}
      </h2>

      <p class="text-lg font-bold text-gray-900 mt-4">
        Price :${{ store.selected.price }}
      </p>
      <p class="text-gray-600 text-sm mt-2">
        {{ store.selected.description }}
      </p>

      <div class="mt-4 text-blue-500 rounded-full cursor-pointer w-fit">
        Show more
      </div>
    </div>
  </div>
</template>
