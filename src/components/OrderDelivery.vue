<template>
  <div class="d-flex align-items-center justify-content-between mb-3">
    <div class="d-inline-flex align-items-center gap-3">
      <img
          src="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          width="84" height="84" class="rounded-3" alt="">
      <p class="my-0"> Delivery Fee</p>
    </div>
    <div class="d-inline-flex align-items-center gap-2">
      <p class="my-0">$ {{ fee }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
defineProps<{ fee: number }>()
</script>

<style scoped>

</style>