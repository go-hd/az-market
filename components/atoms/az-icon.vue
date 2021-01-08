<template>
  <component
      class="az-icon"
      :class="[iconName]"
      v-bind="$props"
      v-on="$listeners"
      :is="icon"
  />
</template>

<script>
import azCart from './icons/az-cart.vue'
import faEnvelope from './icons/fa-envelope.vue'
import faSearchSolid from './icons/fa-search-solid.vue'
import faStar from './icons/fa-star.vue'
import faHeart from './icons/fa-heart.vue'

const components = {
  'az-cart': azCart,
  'fa-envelope': faEnvelope,
  'fa-search-solid': faSearchSolid,
  'fa-star': faStar,
  'fa-heart': faHeart,
}

export default {
  name: 'az-icon',

  components,

  computed: {
    iconName() {
      return this.$slots.default[0].text
    },

    icon() {
      return Object.keys(components).includes(this.iconName) ? this.iconName : 'svg'
    },
  }
}
</script>

<style lang="scss" scoped>
.az-icon > * {
  width: 1em;
}
</style>