<template>
  <ul class="az-slide">
    <li v-for="item in items" :key="item.id" :class="{active: isActive(item)}">
      <component
          class="az-slide__item-wrapper"
          :is="wrapper(item).tag"
          v-bind="wrapper(item).props"
      >
        <img
            class="az-slide__image"
            :src="item.img"
            :alt="item[descriptionKey]"
        >
        <div
            class="az-slide__content"
        >
          <slot name="content" :item="item"/>
        </div>
      </component>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'az-slide',

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    speed: {
      type: Number,
      default: 10000,
    },

    descriptionKey: {
      type: String,
      default: 'name',
    },
  },

  data: () => ({
    active: null,
    interval: null,
  }),

  mounted () {
    this.active = this.items[0]
    this.interval = setInterval(this.next, this.speed)
  },

  watch: {
    active: {
      immediate: true,
      handler (value) {
        this.$emit('transition', value)
      },
    },
  },

  methods: {
    isActive (item) {
      return item === this.active
    },

    goto (item) {
      this.active = item
      clearInterval(this.interval)
      this.interval = setInterval(this.next, this.speed)
    },

    next () {
      const current = this.items.indexOf(this.active)
      const next = current + 1 === this.items.length ? 0 : current + 1
      this.goto(this.items[next])
    },

    getActive () {
      return this.active
    },

    wrapper (item) {
      if (item.hasOwnProperty('to')) {
        return {
          tag: 'a',
          props: { href: item.to },
        }
      }
      else {
        return {
          tag: 'div',
          props: null
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.az-slide {
  --az-slide-height: 35rem;

  @media (min-width: 1200px) {
    --az-slide-height: calc(100vh - 15rem);
  }

  position: relative;
  height: var(--az-slide-height);

  > li {
    position: absolute;
    opacity: 0;
    transition: all 1s;
    visibility: hidden;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: var(--az-slide-height);
    object-fit: cover;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: initial;
    text-decoration: none;
  }
}
</style>