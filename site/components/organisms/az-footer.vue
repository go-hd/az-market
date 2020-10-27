<template>
  <footer class="az-footer">
    <az-heading small center>SHOP INFORMATION</az-heading>
    <az-container>
      <nav class="az-footer__nav">
        <ul>
          <nuxt-link
              tag="li"
              :to="item.to"
              v-for="item in menuItems"
              :key="item.id"
          >
            {{ item.text }}
          </nuxt-link>
        </ul>
      </nav>
    </az-container>
    <az-copyright>
      掲載の記事・写真・イラスト等のすべてのコンテンツの無断複写・転載を禁じます
    </az-copyright>
  </footer>
</template>

<script>
import azContainer from '../atoms/az-container.vue'
import azCopyright from '../morques/az-copyright.vue'
import azHeading from '../atoms/az-heading.vue'

export default {
  name: 'az-footer',

  components: {
    azContainer,
    azCopyright,
    azHeading,
  },

  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.az-footer {
  display: grid;
  grid-gap: 1.8rem;

  margin-top: 5rem;
  padding: 2rem 0;
  background-color: #f8f8f8;

  &__nav > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.8rem;
  }
  
  @media (min-width: 1200px) {
    padding: 4rem 0;

    &__nav > ul {
      display: flex;
      grid-gap: 4em;
      justify-content: center;
      font-weight: bold;

      > li {
        cursor: pointer;
      }
    }
  }
}
</style>