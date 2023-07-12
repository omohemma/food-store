<template>
  <div>
    <BreadCrumb :title="'Categories'" class="p-3 breadcrumb-container sticky-top"/>
    <div class="page-content px-3">
      <Spinner v-if="loading"/>
      <CategoryList v-else :categories="categories" class="overflow-auto"/>
    </div>

    <MobileNavigation class="sticky-bottom"/>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "vuex";
import {useProduct} from "../composables/useProduct";

import CategoryList from "../components/CategoryList.vue"
import MobileNavigation from "../components/MobileNavigation.vue";
import Spinner from "../components/Spinner.vue";

import BreadCrumb from "../components/BreadCrumb.vue";

const store = useStore();
const { loading , getProducts } = useProduct(false);

getProducts();

const categories = computed(() => store.getters["categories"])

</script>

<style lang="scss" scoped>
</style>