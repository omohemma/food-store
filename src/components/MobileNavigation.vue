<template>
  <div>
    <hr class="my-0">
    <div class="d-flex gap-4 align-items-center justify-content-center py-2 navigation">

      <router-link :to="{name: 'Home'}" tag="button" class="btn">
        <IconHome2 :size="32" class="icon"/>
      </router-link>

      <router-link :to="{name: 'Orders'}" tag="button" class="btn position-relative">
        <IconShoppingBag :size="32" class="icon"/>
        <span
            class="position-absolute top-100 start-100 translate-middle px-2 py-0 bg-dark text-white border border-light rounded-3">
                    <span>{{ cartItemsCount}}</span>
                </span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IconHome2} from "@tabler/icons-vue";
import {IconShoppingBag} from "@tabler/icons-vue";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()
const cartItemsCount = computed(() => store.getters["cartItemsCount"])

</script>

<style lang="scss" scoped>
.navigation {
  background: white;

  .icon {
    color: $darkGrey;

    &:hover {
      color: $orange
    }
  }
}


</style>