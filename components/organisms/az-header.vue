<template>
  <header class="az-header">
    <az-container>
      <nuxt-link tag="a" to="/">
        <slot name="logo"/>
      </nuxt-link>
      <div class="az-header__left">
        <az-cart-button/>
        <az-hamburger>
          <ul class="az-header__hamburger">
            <li>
              <az-menu :items="menuItems"/>
            </li>
            <li>
              <az-search/>
            </li>
          </ul>
          <az-button-list
              class="az-header__categories hidden-pc"
              :items="categories"
          />
        </az-hamburger>
      </div>
    </az-container>
  </header>
</template>

<script>
import AzButtonList from '../morques/az-button-list.vue'
import AzCartButton from '../morques/az-cart-button.vue'
import AzContainer from '../atoms/az-container.vue'
import AzHamburger from '../morques/az-hamburger.vue'
import AzMenu from '../morques/az-menu.vue'
import AzSearch from '../morques/az-search.vue'

import { categories } from '@/data.js'

export default {
  name: 'az-header',

  components: {
    AzButtonList,
    AzCartButton,
    AzContainer,
    AzHamburger,
    AzMenu,
    AzSearch,
  },

  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    categories
  })
}
</script>

<style lang="scss" scoped>
.az-header {
  background: rgba(255, 255, 255, 0.78);
  position: sticky;
  top: 0;
  z-index: 100;

  &__left {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5rem;

    @media (min-width: 1200px) {
      flex-direction: row-reverse;
      justify-content: flex-start;
    }
  }

  &__hamburger {
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 200px;
      grid-gap: 4rem;
    }
  }

  &__categories {
    margin-top: 2rem;
  }

  > .az-container {
    height: 7rem;
    display: grid;
    grid-template-columns: 15rem 1fr;
    align-items: center;
  }
}
</style>