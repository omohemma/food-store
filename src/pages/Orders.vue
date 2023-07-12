<template>
  <div>
    <div class="p-3">
      <BreadCrumb :title="'Orders'" class="breadcrumb-container sticky-top"/>
      <div class="page-content">

        <div class="d-flex flex-column" v-if="cartItems.length > 0">
          <OrderList :cart-items="cartItems" :fee="fee"/>

          <CartTotal :total="total"/>

          <button class="btn btn-lg checkout">
            <div class="d-flex justify-content-between">
              <span>Checkout</span>
              <span>${{ total }}</span>
            </div>
          </button>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "vuex";

import BreadCrumb from "../components/BreadCrumb.vue";
import OrderList from "../components/OrderList.vue";
import CartTotal from "../components/CartTotal.vue";


const store = useStore()

const cartItems = computed(() => store.getters["cartItems"])
const cartItemsTotal = computed(() => store.getters["cartItemsTotal"])
const deliveryFee = computed(() => store.getters["deliveryFee"])
const fee = computed(() => Number(deliveryFee.value).toFixed(2))
const total = computed(() => Number((cartItemsTotal.value + deliveryFee.value).toFixed(2)))

</script>

<style lang="scss" scoped>
.checkout {
  background: $orange;
  text-transform: uppercase;
  font-size: 1rem;
  height: 3.5rem;
  border-radius: 1rem;
  font-weight: bold;

  &:hover {
    background: $orange;
    opacity: 0.8;
  }
}
</style>