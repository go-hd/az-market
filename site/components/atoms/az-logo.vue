<template>
  <component
      class="az-logo"
      :class="[logoName]"
      v-bind="$props"
      v-on="$listeners"
      :is="logo"
  />
</template>

<script>
import azMarket from './logos/az-market.vue'
import defendFuture from './logos/defend-future.vue'
import fafra from './logos/fafra.vue'
import fixit from './logos/fixit.vue'
import iinaStyle from './logos/iina-style.vue'
import nalc from './logos/nalc.vue'
import mensNull from './logos/mens-null.vue'

const components = {
  'az-market': azMarket,
  'defend-future': defendFuture,
  'fafra': fafra,
  'fixit': fixit,
  'iina-style': iinaStyle,
  'nalc': nalc,
  'mens-null': mensNull,
}

export default {
  name: 'az-logo',

  components,

  computed: {
    logoName() {
      return this.$slots.default[0].text
    },

    logo() {
      return Object.keys(components).includes(this.logoName) ? this.logoName : 'svg'
    }
  }
}
</script>
