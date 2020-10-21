<template>
  <div class="az-container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'az-container',
}
</script>

<style scoped>
.az-container {
  padding: 0 1.5rem;
  width: 100%;
  max-width: 1200px;
}
</style>