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

<style lang="scss" scoped>
.az-container {
  padding: 0 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 1200px) {
    margin: auto;
  }
}
</style>