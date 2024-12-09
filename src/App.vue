<script setup>
import { ref } from "vue";

const name = ref("Hello Vue 3");
const status = ref(true);
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
</template>
