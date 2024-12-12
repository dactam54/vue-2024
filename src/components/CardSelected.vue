<script setup>
import { usePinia } from "@/store/usePinia";
import { ref } from "vue";
const { state } = usePinia();
const isReadMore = ref("line-clamp-1");

const changeReadMore = () => {
  isReadMore.value = isReadMore.value === "line-clamp-1" ? "" : "line-clamp-1";
};
</script>

<template>
  <!-- <div class="w-fit h-fit text-center text-3xl font-bold text-gray-800 mb-6">
    Sản phẩm được chọn
  </div> -->

  <div class="flex flex-row gap-10 w-full">
    <div class="w-1/2 justify-items-center">
      <img
        :src="state.selected.image"
        alt="store.selected Image"
        class="w-64 h-64 object-cover"
      />
    </div>

    <div class="w-1/2">
      <h2 class="text-xl font-semibold text-gray-900">
        {{ state.selected.name }}
      </h2>

      <p class="text-lg font-bold text-gray-900 mt-4">
        Price :${{ state.selected.price }}
      </p>
      <p
        class="text-gray-600 text-sm mt-2 overflow-hidden text-ellipsis"
        :class="isReadMore"
      >
        {{ state.selected.description }}
      </p>

      <div
        class="mt-4 text-blue-500 rounded-full cursor-pointer w-fit"
        @click="changeReadMore"
      >
        Read more
      </div>
    </div>
  </div>
</template>
