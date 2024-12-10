<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;
console.log("store123", store);

let quantity = ref(1);
const isShow = ref(false);

const addToCart = (id, quantity) => {
  isShow.value = !isShow.value;
  store.addToCart(id);
};

const updateCart = (id, quantity) => {
  console.log("updateCart", id, quantity);
};

const removeProduct = (id) => {
  store.removeProduct(id);
  isShow.value = false;
};

const isDecrease = (id) => {
  if (quantity.value > 1) {
    quantity.value--;
    updateCart(id, quantity.value);
  }

  if (quantity.value === 1) {
    isShow.value = false;
    removeProduct(id);
  }
};

const isIncrease = (id) => {
  quantity.value++;
  updateCart(id, quantity.value);
};

const selectedProduct = (id) => {
  console.log("selectedProductID", id);
  store.selectedProduct(id);
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

      <div
        class="mt-4 text-blue-500 rounded-full cursor-pointer w-fit"
        @click="selectedProduct(product.id)"
      >
        Show details
      </div>
    </div>

    <div>
      <img
        :src="product.image"
        alt="Product Image"
        class="w-32 h-32 object-cover"
      />

      <div>
        {{ store.cart.find((product) => product.id === product.id) }}
      </div>

      <button
        v-if="
          !isShow && !store.cart.find((product) => product.id === product.id)
        "
        class="mt-4 p-2 text-green-500 cursor-pointer w-24 border-2 border-green-500 rounded-full shadow-lg hover:shadow-xl"
        @click="addToCart(product.id)"
      >
        Add
      </button>

      <div v-if="isShow" class="flex items-center p-4">
        <button
          @click="isDecrease(product.id)"
          class="bg-gray-200 text-gray-600 p-2 rounded-l-md hover:bg-gray-300"
        >
          -
        </button>

        <input
          type="number"
          :value="quantity"
          min="0"
          class="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
        />

        <button
          @click="isIncrease(product.id)"
          class="bg-gray-200 text-gray-600 p-2 rounded-r-md hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
