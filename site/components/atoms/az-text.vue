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
}
</style>