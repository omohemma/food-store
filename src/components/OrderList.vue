<template>
  <div class="order-list">
    <div v-for="item in cartItems" :key="item.id">
      <OrderItem :cart-item="item"/>
      <hr>
      <OrderDelivery :fee="fee"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import OrderItem from "./OrderItem.vue";
import {Cart} from "../types/cart.type.ts";
import OrderDelivery from "./OrderDelivery.vue";

defineProps<{ cartItems: Cart[], fee: number }>()

</script>

<style lang="scss" scoped>
.order-list {
  border-bottom: 1px dashed $darkGrey;
}
</style>