<template>
  <no-ssr>
    <ul class="az-image-list" :style="[listStyle]">
      <template v-for="item in _items">
        <slot name="list-item" :item="item">
          <li
              v-if="!link"
              :key="item.id"
              class="az-image-list__item"
          >
            <img :src="item.img" :style="{ height: _imageHeight }" :alt="item.text">
            <az-text v-if="item.hasOwnProperty('text')">
              {{ item.text }}
            </az-text>
          </li>
          <nuxt-link
              v-else
              tag="li"
              :to="item.to"
              :key="item.id"
              class="az-image-list__item az-image-list__item--link"
          >
            <img :src="item.img" :alt="item.text">
            <az-text v-if="item.hasOwnProperty('text')">
              {{ format(item.text) }}
            </az-text>
          </nuxt-link>
        </slot>
      </template>
    </ul>
  </no-ssr>
</template>

<script>
import azText from '../atoms/az-text.vue'
import debounce from 'lodash.debounce'

const responsiveValidator = function (value, nullable = false) {
  const isInt = Number.isInteger(value)
  const isNull = nullable && value === null
  const hasSP = value && value.hasOwnProperty('sp') && Number.isInteger(value.sp)
  const hasPC = value && value.hasOwnProperty('pc') && Number.isInteger(value.pc)

  return isNull || isInt || (hasSP && hasPC)
}

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
      default: 2,
      validator: (value) => responsiveValidator(value),
    },

    count: {
      default: null,
      validator: (value) => responsiveValidator(value, true),
    },

    imageHeight: {
      default: 110,
      validator: (value) => responsiveValidator(value),
    },

    breakpoint: {
      type: Number,
      default: 1200,
    },
  },

  data: () => ({
    width: 0,
  }),

  computed: {
    listStyle () {
      return {
        gridTemplateColumns: `repeat(${this._columns}, 1fr)`,
      }
    },

    device () {
      return this.width >= this.breakpoint ? 'pc' : 'sp'
    },

    _columns () {
      if (Number.isInteger(this.columns)) {
        return this.columns
      }
      return this.columns[this.device]
    },

    _count () {
      if (this.count === null) {
        return this.items.length
      }
      if (Number.isInteger(this.columns)) {
        return this.count
      }
      return this.count[this.device]
    },

    _imageHeight () {
      if (Number.isInteger(this.imageHeight)) {
        return this.imageHeight / 10 + 'rem'
      }
      return this.imageHeight[this.device] / 10 + 'rem'
    },

    _items () {
      return this.items.slice(0, this._count)
    },
  },

  mounted () {
    this.width = window.innerWidth
    window.addEventListener('resize', debounce(this.handleResize))
  },

  methods: {
    format (text) {
      return text.length > 40 ? text.slice(0, 40) + '...' : text
    },

    handleResize () {
      this.width = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.az-image-list {
  display: grid;
  grid-gap: 1rem;

  &__item > img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    grid-gap: 3rem;
    &__item--link {
      cursor: pointer;
    }
  }
}
</style>