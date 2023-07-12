<template>
  <div>
    <div class="cart-counter">
      <button :disabled="cartItemQuantity === 0" @click="removeItemToCart()" class="btn" type="button">
        <IconMinus :size="18" class="icon"/>
      </button>
      <span class="label"> {{ cartItemQuantity }}</span>
      <button @click="addItemToCart()" class="btn" type="button">
        <IconPlus :size="18" class="icon"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useStore} from "vuex";

import {IconPlus} from "@tabler/icons-vue";
import {IconMinus} from "@tabler/icons-vue";

import {Cart} from "../types/cart.type.ts";
import {computed} from "vue";

const props = defineProps<{ cartItem: Cart }>()
const store = useStore()

const cartItemQuantity = computed(() => store.getters["cartItemQuantity"](props.cartItem.id))
const addItemToCart = () => {
  store.dispatch("addItemToCart", props.cartItem)
}
const removeItemToCart = () => {
  store.dispatch("decreaseProductQuantityInCart", props.cartItem)
}


</script>

<style lang="scss" scoped>
.cart-counter {
  display: flex;
  align-items: center;
  gap: 0.5rem !important;
  background: $grey;
  border-radius: 1rem;
  width: fit-content;

  .btn {
    &:active, &:focus, &:focus-visible, &:disabled {
      border-color: transparent !important;
    }
  }

  .icon, .label {
    font-weight: bold;
    color: $black;
  }
}
</style>