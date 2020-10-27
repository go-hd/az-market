<template>
  <ul class="az-image-list" :style="[listStyle]">
    <template v-for="item in items">
      <slot name="list-item" :item="item">
        <li
            v-if="!link"
            :key="item.id"
        >
          <img :src="item.img" :alt="item.text">
          <az-text v-if="item.hasOwnProperty('text')">
            {{ item.text }}
          </az-text>
        </li>
        <nuxt-link
            v-else
            tag="li"
            :to="item.to"
            :key="item.id"
        >
          <img :src="item.img" :alt="item.text">
          <az-text v-if="item.hasOwnProperty('text')">
            {{ format(item.text) }}
          </az-text>
        </nuxt-link>
      </slot>
    </template>
  </ul>
</template>

<script>
import azText from '../atoms/az-text.vue'

export default {
  name: 'az-image-list',

  components: {
    azText,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    link: {
      type: Boolean,
      default: false,
    },

    columns: {
      type: Number,
      default: 2
    }
  },

  computed: {
    listStyle() {
      return {
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`
      }
    }
  },

  methods: {
    format(text) {
      return text.length > 40 ? text.slice(0, 40) + '...' : text
    }
  }
}
</script>

<style lang="scss" scoped>
.az-image-list {
  display: grid;
  grid-gap: 1rem;

  > li > img {
    width: 100%;
    height: 11rem;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    grid-gap: 3rem;
    > li > img {
      height: 20rem;
    }
  }
}
</style>