<template>
  <div class="index">
    <az-brand-slide :items="slides"/>
    <az-topic-list :items="topics"/>
    <az-category-list :items="categories"/>
    <az-ranking :items="ranking"/>
    <az-brand-list :items="brands"/>
  </div>
</template>

<script>
import azBrandList from '../components/organisms/az-brand-list.vue'
import azBrandSlide from '../components/organisms/az-brand-slide.vue'
import azCategoryList from '../components/organisms/az-category-list.vue'
import azRanking from '../components/organisms/az-ranking.vue'
import azTopicList from '../components/organisms/az-topic-list.vue'

import { slides, topics, categories, ranking, brands } from '../data.js'

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'index',

  components: {
    azBrandList,
    azBrandSlide,
    azCategoryList,
    azRanking,
    azTopicList,
  },

  data: () => ({
    slides,
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
    grid-gap: 8rem;
  }
}
</style>