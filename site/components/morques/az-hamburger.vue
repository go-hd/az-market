<template>
  <div class="az-hamburger" :class="{'is-show': show}">
    <az-hamburger-icon @click="show = !show" :open="show" />
    <az-container>
      <slot />
    </az-container>
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

  > .az-container {
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
  }

  &.is-show > .az-container {
    left: 0;
    opacity: 1;
  }
}
</style>