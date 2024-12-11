<script setup>
import { ref } from "vue";
import CartProduct from "../components/CartProduct.vue";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = ref(props.store);

const clearCart = () => {
  store.value.clearCart();
};

const removeProduct = (id) => {
  store.value.removeProduct(id);
};
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="text-center text-3xl font-bold text-gray-800 mb-2">
      Giỏ hàng
    </div>

    <div class="flex flex-row justify-between">
      <h2 class="text-2xl font-bold text-gray-800 w-fit h-fit">
        {{ store?.cart?.length }} /
        {{ store?.products?.length }}
      </h2>
      <button
        @click="clearCart"
        :class="store?.cart?.length === 0 ? 'text-red-500' : ' text-blue-500'"
        class="w-fit h-fit"
        :disabled="store?.cart?.length === 0"
      >
        Reset
      </button>
    </div>

    <div>
      <div v-if="store.cart?.length === 0" class="text-center text-gray-800">
        <p>Chưa có sản phẩm</p>
      </div>

      <div v-else>
        <div
          v-for="product in store.cart"
          :key="product.id"
          class="flex flex-row border-b border-gray-200 py-4"
        >
          <CartProduct :product="product" :removeProduct="removeProduct" />
        </div>

        <div class="flex justify-between items-center mt-6">
          <p class="text-gray-800 font-bold">
            Total Price: {{ store.totalPrice().toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
