<template>
  <az-section class="az-brand-list" title="BRAND">
    <az-image-list :items="items"/>
  </az-section>
</template>

<script>
import azImageList from '../morques/az-image-list.vue'
import azSection from '../morques/az-section.vue'

export default {
  name: 'az-brand-list',

  components: {
    azImageList,
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
.az-brand-list {
}
</style>