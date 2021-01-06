<template>
  <section class="az-section">
    <az-heading v-if="title.length" underline center>{{ title }}</az-heading>
    <az-container>
      <slot />
    </az-container>
  </section>
</template>

<script>
import azContainer from '../atoms/az-container.vue'
import azHeading from '../atoms/az-heading.vue'

export default {
  name: "az-section",

  components: {
    azContainer,
    azHeading,
  },

  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.az-section {
  display: grid;
  grid-gap: 3rem;
}
</style>