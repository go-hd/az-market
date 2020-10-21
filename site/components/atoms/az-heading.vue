<template>
  <component class="az-heading" :is="tag">
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'az-heading',

  props: {
    level: {
      type: Number,
      default: 2
    }
  },

  computed: {
    tag() {
      return 'h' + this.level
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3rem;
  position: relative;
  font-family: din-2014, sans-serif;
  font-weight: 200;
  font-style: normal;

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
</style>