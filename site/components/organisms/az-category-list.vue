<template>
  <az-section class="az-category-list" title="CATEGORIES">
    <ul>
      <li v-for="item in items" :key="item.id">
        <az-button :to="item.to" small>{{ item.text }}</az-button>
      </li>
    </ul>
  </az-section>
</template>

<script>
import azButton from '../atoms/az-button.vue'
import azSection from '../morques/az-section.vue'

export default {
  name: 'az-category-list',

  components: {
    azButton,
    azSection,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.az-category-list {
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;

    > li > .az-button {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>