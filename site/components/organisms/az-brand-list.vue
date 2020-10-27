<template>
  <az-section class="az-brand-list" title="BRAND">
    <az-image-list
        :items="items"
        :columns="{ sp: 2, pc: 3 }"
        :image-height="{ sp: 110, pc: 250 }"
    />
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