<template>
  <button
      v-if="!to.length"
      v-on="$listeners"
      v-bind="$props"
      class="az-button"
      :class="[{ small }]"
  >
    <slot />
  </button>
  <nuxt-link
      tag="button"
      v-else
      v-on="$listeners"
      v-bind="$props"
      class="az-button"
      :class="[{ small }]"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "az-button",

  props: {
    to: {
      type: String,
      default: ''
    },

    small: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
.az-button {
  background-color: #ffffff;
  padding: 1em;
  border-radius: 0;
  border: 1px solid #707070;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #707070;
    color: #ffffff;
  }

  &.small {
    font-size: 1.1rem;
    padding: 1em 1em;
  }
}
</style>