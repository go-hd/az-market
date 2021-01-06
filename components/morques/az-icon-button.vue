<template>
  <button
      v-bind="$props"
      v-on="$listeners"
      class="az-icon-button"
  >
    <az-icon style="height: 1em;width: auto;"><slot /></az-icon>
  </button>
</template>

<script>
import azIcon from '../atoms/az-icon.vue'

export default {
  name: 'az-icon-button',

  components: {
    azIcon
  },
}
</script>

<style lang="scss" scoped>
.az-icon-button {
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
}
</style>