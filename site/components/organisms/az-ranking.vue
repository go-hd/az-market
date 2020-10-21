<template>
  <az-section class="az-ranking" title="RANKING">
    <div class="az-ranking__inner">
      <az-image-list :items="items" :columns="items.length" link/>
    </div>
  </az-section>
</template>

<script>
import azImageList from '../morques/az-image-list.vue'
import azSection from '../morques/az-section.vue'

export default {
  name: 'az-ranking',

  components: {
    azSection,
    azImageList,
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
.az-ranking {
  &__inner {
    max-width: calc(100vw - 3rem);
    overflow-x: auto;
  }

  .az-image-list {
    width: 200vw;
  }
}
</style>