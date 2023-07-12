<template>
  <div class="d-inline-flex align-items-center justify-content-between py-4">
    <h3>Total</h3>
    <h1>${{ total }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ total: number }>()
</script>

<style scoped>

</style>