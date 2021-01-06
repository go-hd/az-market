<template>
  <component
      class="az-heading"
      :class="[{ center, underline, small }]"
      :is="tag"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'az-heading',

  props: {
    level: {
      type: Number,
      default: 2,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false
    },

    center: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    tag () {
      return 'h' + this.level
    },
  },
}
</script>

<style lang="scss" scoped>
.az-heading {
  font-family: din-2014, sans-serif;
  font-weight: 200;
  font-style: normal;

  &.underline {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      border-bottom: 2px solid #333;
      width: 6rem;
    }
  }

  &.center {
    margin: auto;
  }
}

h2.az-heading {
  font-size: 3rem;

  &.small {
    font-size: 1.6rem;
  }
}
</style>