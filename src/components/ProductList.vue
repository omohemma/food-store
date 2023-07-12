<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      <ProductItem :product="product"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Product} from "../types/product.type";
import ProductItem from "./ProductItem.vue";

defineProps<{ products: Product[] }>()
</script>