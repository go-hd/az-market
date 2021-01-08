<template>
  <a
      class="az-cart-button"
      href="https://basket.step.rakuten.co.jp/rms/mall/bs/cart/"
  >
    <az-icon class="az-cart-button__icon">az-cart</az-icon>
  </a>
</template>

<script>
import azIcon from '../atoms/az-icon.vue'

export default {
  name: 'az-cart-button',

  components: {
    azIcon,
  }
}
</script>

<style lang="scss" scoped>
.az-cart-button {
  color: #444444;
  &__icon {
    height: 2.6rem;
  }
}
</style>