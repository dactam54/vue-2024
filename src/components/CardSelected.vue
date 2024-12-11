<script setup>
import { usePinia } from "@/store/usePinia.vue";
const { state } = usePinia();
</script>

<template>
  <div class="w-fit h-fit text-center text-3xl font-bold text-gray-800 mb-6">
    Sản phẩm được chọn
  </div>
  <div class="flex flex-row gap-10">
    <img
      :src="state.selected.image"
      alt="store.selected Image"
      class="w-48 h-48 object-cover"
    />

    <div>
      <h2 class="text-xl font-semibold text-gray-900">
        {{ state.selected.name }}
      </h2>

      <p class="text-lg font-bold text-gray-900 mt-4">
        Price :${{ state.selected.price }}
      </p>
      <p class="text-gray-600 text-sm mt-2">
        {{ state.selected.description }}
      </p>

      <div class="mt-4 text-blue-500 rounded-full cursor-pointer w-fit">
        Show more
      </div>
    </div>
  </div>
</template>
