<template>
  <form
      class="az-form"
      v-bind="$props"
      v-on="$listeners"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'az-form',
}
</script>

<style lang="scss" scoped>
</style>