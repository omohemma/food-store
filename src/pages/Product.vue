<template>
  <div>
    <div class="card rounded-0 border border-0 mb-3">
      <img :src="category.banner" class="card-img" width="300" height="300" :alt="category.name">
      <div class="card-img-overlay py-5">
        <BreadCrumb class="text-white"/>
        <h1 class="card-title text-white">{{$route.params.category}}</h1>
      </div>
    </div>
    <div class="page-content px-3">
      <Spinner v-if="loading"/>
      <ProductList :products="products"/>
    </div>
    <MobileNavigation class="sticky-bottom"/>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {useProduct} from "../composables/useProduct";

import ProductList from "../components/ProductList.vue";
import Spinner from "../components/Spinner.vue";
import BreadCrumb from "../components/BreadCrumb.vue";
import MobileNavigation from "../components/MobileNavigation.vue";


const store = useStore()
const route = useRoute()
const {loading, getProducts} = useProduct(false);

getProducts();

const products = computed(() => store.getters["productsByCategory"](route.params.category))
const category = computed(() => store.getters["getCategoryBySlug"](route.params.category))

</script>

<style lang="scss" scoped>

</style>