<template>
  <div class="index">
    <az-brand-slide :items="brands"/>
    <az-topic-list :items="topics"/>
    <az-category-list :items="categories"/>
    <az-ranking :items="ranking"/>
    <az-brand-list :items="brands"/>
    <az-opt-in />
  </div>
</template>

<script>
import azBrandList from '@/components/organisms/az-brand-list.vue'
import azBrandSlide from '@/components/organisms/az-brand-slide.vue'
import azCategoryList from '@/components/organisms/az-category-list.vue'
import azOptIn from '@/components/organisms/az-opt-in.vue'
import azRanking from '@/components/organisms/az-ranking.vue'
import azTopicList from '@/components/organisms/az-topic-list.vue'

import { topics, categories, ranking, brands } from '@/data.js'

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'index',

  components: {
    azBrandList,
    azBrandSlide,
    azCategoryList,
    azOptIn,
    azRanking,
    azTopicList,
  },

  data: () => ({
    topics,
    categories,
    ranking,
    brands,
  }),
}
</script>

<style lang="scss" scoped>
.index {
  display: grid;
  grid-gap: 4rem 0;

  @media (min-width: 1200px) {
    grid-gap: 6rem;
  }
}
</style>