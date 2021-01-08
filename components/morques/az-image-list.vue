<template>
  <ul class="az-image-list" :style="[listStyle]">
    <template v-for="item in _items">
      <slot name="list-item" :item="item">
        <li
            v-if="!link"
            :key="item.id"
            class="az-image-list__item"
        >
          <img :src="item.img" :style="{ height: _imageHeight }" :alt="item.text">
          <slot name="list-item-description" :item="item">
            <az-text v-if="item.hasOwnProperty('text')">
              {{ format(item.text) }}
            </az-text>
          </slot>
        </li>
        <li
            v-else
            :key="item.id"
            class="az-image-list__item"
        >
          <a
              v-if="item.to.match(/^https?:/)"
              class="az-image-list__link"
              :href="item.to"
          >
            <img :src="item.img" :style="{ height: _imageHeight }" :alt="item.text">
            <slot name="list-item-description" :item="item">
              <az-text v-if="item.hasOwnProperty('text')">
                {{ format(item.text) }}
              </az-text>
            </slot>
          </a>
          <nuxt-link
              v-else
              tag="a"
              :to="item.to"
              class="az-image-list__link"
          >
            <img :src="item.img" :style="{ height: _imageHeight }" :alt="item.text">
            <slot name="list-item-description" :item="item">
              <az-text v-if="item.hasOwnProperty('text')">
                {{ format(item.text) }}
              </az-text>
            </slot>
          </nuxt-link>
        </li>
      </slot>
    </template>
  </ul>
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

    textLength: {
      type: Number,
      default: 40,
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
      if (!this.textLength) return text
      return text.length > this.textLength ? text.slice(0, this.textLength) + '...' : text
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

  &__item {
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &__link {
    display: block;
    width: 100%;
    color: black;
    text-decoration: none;
  }

  @media (min-width: 1200px) {
    grid-gap: 3rem;
  }
}
</style>