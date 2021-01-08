<template>
  <ul class="az-button-list">
    <li v-for="item in items" :key="item.id">
      <az-button :to="item.to" small>{{ item.text }}</az-button>
    </li>
  </ul>
</template>

<script>
import azButton from '../atoms/az-button.vue'

export default {
  name: 'az-button-list',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  components: {
    azButton,
  },
}
</script>

<style lang="scss" scoped>
.az-button-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  > li > .az-button {
    width: 100%;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>