<template>
  <az-section class="az-topic-list" title="TOPICS">
    <az-image-list
        class="az-topic-list__image-list az-topic-list__image-list"
        link
        :items="items"
        :columns="{ sp: 2, pc: 4 }"
        :count="{ sp: 4, pc: 8 }"
        :image-height="{ sp: 110, pc: 200 }"
    />
    <az-button
        class="az-topic-list__see-more-button"
        to="topics"
    >
      SEE MORE
    </az-button>
  </az-section>
</template>

<script>
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

}
</script>

<style lang="scss" scoped>
.az-topic-list {
  &__see-more-button {
    padding: 1em 3em;
    display: block;
    margin: 3rem auto;

    @media (min-width: 1200px) {
      width: 25rem;
    }
  }
}
</style>