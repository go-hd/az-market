<template>
  <nav class="az-menu">
    <ul>
      <template v-for="item in items">
        <nuxt-link
            v-if="!item.to.startsWith('https://')"
            tag="li"
            :key="item.id"
            :to="item.to"
        >
          {{ item.text }}
        </nuxt-link>
        <li
            v-else
            :key="item.id"
            @click="go(item.to)"
        >
          {{ item.text }}
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'az-menu',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    go(url) {
      location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.az-menu > ul {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  > li {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
}
</style>