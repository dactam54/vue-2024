<script setup>
import CartProduct from "../components/CartProduct.vue";
import { usePinia } from "@/store/usePinia.vue";

const { clearCart, removeProduct, totalPrice, state } = usePinia();

const clearCartFunc = () => {
  clearCart();
};

const removeProductFunc = (id) => {
  removeProduct(id);
};

const totalPriceFunc = () => {
  return totalPrice().toFixed(2);
};
</script>

<template>
  <div class="flex flex-col gap-5">
    <!-- <div class="text-center text-3xl font-bold text-gray-800 mb-2">
      Giỏ hàng
    </div> -->

    <div class="flex flex-row justify-between">
      <h2 class="text-xl text-gray-800 w-fit h-fit">
        {{ state?.cart?.length }} / {{ state?.products?.length }} Added
      </h2>
      <button
        @click="clearCartFunc"
        :class="state?.cart?.length === 0 ? 'text-red-500' : ' text-blue-500'"
        class="w-fit h-fit"
        :disabled="state?.cart?.length === 0"
      >
        Reset
      </button>
    </div>

    <div>
      <div v-if="state.cart?.length === 0" class="text-center text-gray-800">
        <p>Chưa có sản phẩm</p>
      </div>

      <div v-else class="flex flex-row flex-wrap justify-center">
        <div
          v-for="product in state.cart"
          :key="product.id"
          class="flex flex-row border-b border-gray-200 p-4"
        >
          <CartProduct :product="product" :removeProduct="removeProductFunc" />
        </div>
      </div>
    </div>

    <div
      v-if="state.cart?.length !== 0"
      class="flex justify-between items-center mt-6"
    >
      <p class="text-gray-800 font-bold">
        Total Price: {{ totalPriceFunc() }}$
      </p>
    </div>
  </div>
</template>
