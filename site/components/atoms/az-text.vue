<template>
  <p class="az-text">
    <slot />
  </p>
</template>

<script>
export default {
  name: "az-text"
}
</script>

<style lang="scss" scoped>
.az-text {
  font-size: 1rem;

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
}
</style>