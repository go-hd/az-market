<template>
  <az-section class="az-category-list" title="CATEGORIES">
    <az-button-list :items="items"/>
  </az-section>
</template>

<script>
import azButtonList from '../morques/az-button-list.vue'
import azSection from '../morques/az-section.vue'

export default {
  name: 'az-category-list',

  components: {
    azButtonList,
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
}
</style>