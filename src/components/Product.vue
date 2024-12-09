<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const quantity = ref(1);
const isShow = ref(false);

const isDecrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }

  if (quantity.value === 1) {
    console.log("vao day");
    isShow.value = false;
  }
};

const isIncrease = () => {
  quantity.value++;
};

const showButton = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row justify-between"
  >
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-900">{{ product.name }}</h2>
      <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
      <p class="text-lg font-bold text-gray-900 mt-4">${{ product.price }}</p>

      <div class="mt-4 text-blue-500 rounded-full cursor-pointer w-fit">
        Show details
      </div>
    </div>

    <div>
      <img
        :src="product.image"
        alt="Product Image"
        class="w-32 h-32 object-cover"
      />

      <button
        v-if="!isShow"
        class="mt-4 p-2 text-green-500 cursor-pointer w-24 border-2 border-green-500 rounded-full shadow-lg hover:shadow-xl"
        @click="showButton"
      >
        Add
      </button>

      <div v-if="isShow" class="flex items-center p-4">
        <button
          @click="isDecrease"
          class="bg-gray-200 text-gray-600 p-2 rounded-l-md hover:bg-gray-300"
        >
          -
        </button>
        <input
          type="number"
          v-model="quantity"
          class="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
        />
        <button
          @click="isIncrease"
          class="bg-gray-200 text-gray-600 p-2 rounded-r-md hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
