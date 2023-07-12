<template>
  <div class="d-flex py-2 align-items-center mb-2">
    <IconChevronLeft @click="$router.go(-1)" :size="32"/>
    <h2 class="my-0 flex-grow-1 text-center">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import {IconChevronLeft} from "@tabler/icons-vue";

defineProps<{ title?: string }>()
</script>

<style lang="scss" scoped>
</style>