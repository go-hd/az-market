<template>
  <az-section class="az-topic-list" title="TOPICS">
    <az-image-list
        class="az-topic-list__image-list az-topic-list__image-list"
        link
        :items="filteredItems"
        :columns="columns"
    />
    <az-button to="topics">SEE MORE</az-button>
  </az-section>
</template>

<script>
import debounce from 'lodash.debounce'

import azButton from '../atoms/az-button.vue'
import azSection from '../morques/az-section.vue'
import azImageList from '../morques/az-image-list.vue'

export default {
  name: 'az-topics-list',

  components: {
    azButton,
    azSection,
    azImageList,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    width: window.innerWidth
  }),

  computed: {
    filteredItems() {
      if (this.width < 1200) {
        return this.items.slice(0, 4)
      }
      return this.items.slice(0, 8)
    },

    columns() {
      return this.width < 1200 ? 2 : 4
    }
  },

  mounted() {
    window.addEventListener('resize', debounce(this.handleResize))
  },

  methods: {
    handleResize() {
      this.width = window.innerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.az-topic-list {
  .az-button {
    padding: 1em 3em;
    display: block;
    margin: 3rem auto;
  }
}
</style>