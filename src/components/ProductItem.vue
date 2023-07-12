<template>
  <div class="card d-flex flex-row align-items-center justify-content-between mb-2 p-3">
    <div>
      <h5>{{ product.name }}</h5>
      <div class="d-flex gap-2 mb-2">
        <div class="text-center">
          <p class="my-0">Protein</p>
          <small>{{ product.protein }} gr</small>
        </div>
        <div class="text-center">
          <p class="my-0">Carbohydrate</p>
          <small>{{ product.carbs }} gr</small>
        </div>
        <div class="text-center">
          <p class="my-0">Fibre</p>
          <small>{{ product.fat }} gr</small>
        </div>
      </div>
      <div class="d-flex align-items-center gap-3">
        <CartCounter :cartItem="cartItem"/>
        <span>${{ product.price }}</span>
      </div>

    </div>
    <img :src="product.url" class="rounded-3" width="96" height="96" :alt="product.name">
  </div>
</template>
<script setup lang="ts">
import {Product} from "../types/product.type";
import CartCounter from "./CartCounter.vue";
import {computed} from "vue";

const props = defineProps<{ product: Product }>()

const cartItem = computed(() => {
  return {
    'id': props.product.id,
    'name': props.product.name,
    'price': props.product.price,
    'url': props.product.url
  }
})
</script>