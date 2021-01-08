<template>
  <button
      v-if="!to.length"
      v-on="$listeners"
      v-bind="$props"
      class="az-button"
      :class="[{ small, dense, reverse }]"
  >
    <slot/>
  </button>
  <a
      v-else-if="to.match(/^https?:\/\//)"
      :href="to"
      v-on="$listeners"
      v-bind="$props"
      class="az-button"
      :class="[{ small, dense, reverse }]"
  >
    <slot/>
  </a>
  <nuxt-link
      tag="a"
      v-else
      v-on="$listeners"
      v-bind="$props"
      class="az-button"
      :class="[{ small, dense, reverse }]"
  >
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  name: 'az-button',

  props: {
    to: {
      type: String,
      default: '',
    },

    dense: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },

    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.az-button {
  text-align: center;
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

  &.dense {
    padding-top: 0.3em;
    padding-bottom: 0.3em;
  }

  &.reverse {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }
}

a.az-button {
  display: block;
  text-decoration: none;
  color: #000000;
}
</style>