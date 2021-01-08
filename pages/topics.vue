<template>
  <az-section
      class="topics"
      title="TOPICS"
  >
    <az-image-list
        link
        :items="topics"
        :columns="{sp: 1, pc: 3}"
        :image-height="{sp: 220, pc: 300}"
        :text-length="null"
    />
  </az-section>
</template>

<script>
import azImageList from '@/components/morques/az-image-list.vue'
import azSection from '@/components/morques/az-section.vue'

import { topics } from '@/data.js'

export default {
  name: 'topics',

  components: {
    azSection,
    azImageList,
  },

  data: () => ({
    topics,
  }),
}
</script>

<style lang="scss" scoped>
.topics {
  padding-top: 3rem;
}
</style>