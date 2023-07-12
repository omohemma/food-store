<template>
  <div @click="$router.push({name:'ViewProduct', params:{category: category.category}})" class="card category-item">
    <div class="card-body">
      <img :src="category.url" width="120" height="120" class="card-img-top" :alt="category.category">
      <p class="card-title text-center mt-2">{{ category.category }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Category} from '../types/category.type.ts'

defineProps<{ category: Category }>()

</script>

<style lang="scss" scoped>
.category-item {
  border-color: $grey;
  cursor: pointer;

  &:hover {
    border-color: $green;
  }
}
</style>