<template>
  <header class="az-header">
    <az-container>
      <nuxt-link tag="div" to="/">
        <slot name="logo"/>
      </nuxt-link>
      <az-hamburger>
        <az-menu :items="menuItems"/>
        <az-search/>
      </az-hamburger>
    </az-container>
  </header>
</template>

<script>
import AzContainer from '../atoms/az-container.vue'
import AzHamburger from '../morques/az-hamburger.vue'
import AzMenu from '../morques/az-menu.vue'
import AzSearch from '../morques/az-search.vue'

export default {
  name: 'az-header',

  components: {
    AzContainer,
    AzHamburger,
    AzMenu,
    AzSearch
  },

  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
.az-header {
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;

  > .az-container {
    height: 7rem;
    display: grid;
    grid-template-columns: 15rem 1fr;
    align-items: center;
  }
}
</style>