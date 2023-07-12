<template>
  <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 gy-3 justify-content-center">
    <div v-for="(category, index) in categories" :key="index">
      <CategoryItem :category="category"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryItem from './CategoryItem.vue';
import {Category} from '../types/category.type.ts';

defineProps<{ categories: Category[] }>()
</script>

<style scoped></style>