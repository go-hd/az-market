<template>
  <div class="az-hamburger" :class="[{show}]">
    <az-hamburger-icon
        class="az-hamburger__icon"
        @click="show = !show"
        :open="show"
    />
    <az-container class="az-hamburger__container az-hamburger__container--sp">
      <slot />
    </az-container>
    <div class="az-hamburger__container az-hamburger__container--pc">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import azContainer from '../atoms/az-container.vue'
import azHamburgerIcon from '../atoms/az-hamburger-icon.vue'

export default {
  name: 'az-hamburger',

  data: () => ({
    show: false
  }),

  components: {
    azContainer,
    azHamburgerIcon
  }
}
</script>

<style lang="scss" scoped>
.az-hamburger {
  text-align: right;

  &__icon {
    @media (min-width: 1200px) {
      display: none;
    }
  }

  &__container {
    &--sp {
      opacity: 0;
      text-align: left;
      transition: all 0.5s ease-in-out;
      position: fixed;
      background: white;
      top: 7rem;
      left: 100%;
      right: 0;
      bottom: 0;
      padding: 1rem 1.5rem;

      @media (min-width: 1200px) {
        display: none;
      }
    }

    &--pc {
      display: none;

      @media (min-width: 1200px) {
        display: block;
      }
    }
  }

  &.show > .az-hamburger__container--sp {
    left: 0;
    opacity: 1;
  }
}
</style>