<template>
  <div class="d-flex align-items-center justify-content-between mb-3">
    <div class="d-inline-flex align-items-center gap-3">
      <img :src="cartItem.url" width="84" height="84" class="rounded-3" :alt="cartItem.name">
      <p class="my-0"> {{ cartItem.quantity }} X {{ cartItem.name }}</p>
    </div>
    <div class="d-inline-flex align-items-center gap-2">
      <p class="my-0">$ {{ cartItem.price }}</p>
      <button @click="removeItemFromCart" class="btn btn-sm">
        <IconX/>
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import {IconX} from "@tabler/icons-vue";
import {Cart} from "../types/cart.type.ts";
import {useStore} from "vuex";

const props = defineProps<{ cartItem: Cart }>()
const store = useStore()


const removeItemFromCart = () => {
  store.dispatch("removeItemsFromCart", props.cartItem.id)
}
</script>

<style scoped>

</style>