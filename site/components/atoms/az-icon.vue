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
import faSearchSolid from './icons/fa-search-solid.vue'

const components = {
  'fa-search-solid': faSearchSolid,
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