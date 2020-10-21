<template>
  <div v-on="$listeners" class="az-hamburger-icon" :class="{ 'is-open': open }">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'az-hamburger-icon',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.az-hamburger-icon {
  display: inline-block;
  $bar-w: 3.4rem;
  $bar-h: 0.3rem;
  $bar-color: #444;
  position: relative;
  width: $bar-w;
  height: ($bar-w * 3) / 4;
  cursor: pointer;

  > div {
    position: absolute;
    left: 0;
    width: $bar-w;
    height: $bar-h;
    background-color: $bar-color;
    transition: all 0.3s;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 100%;
    }
  }

  &.is-open > div {
    &:nth-child(1) {
      top: 50%;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      top: 50%;
      transform: rotate(-45deg);
    }
  }
}
</style>