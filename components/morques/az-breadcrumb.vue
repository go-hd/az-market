<template>
  <ul class="az-breadcrumb">
    <li v-for="{ id, text, to } in items" :key="id">
      <nuxt-link
          v-if="!isActive(to)"
          tag="a"
          class="az-breadcrumb__link"
          :to="to"
      >
        {{ text }}
      </nuxt-link>
      <span class="az-breadcrumb__active" v-else>
        {{ text }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'az-breadcrumb',

  props: {
    items: {
      type: Array,
      required: true,
      validator (value) {
        const keys = ['id', 'text', 'to']
        return value.every(item => keys.every(key => Object.keys(item).includes(key)))
      },
    },
  },

  methods: {
    isActive (to) {
      return this.$route.path === to
    },
  },
}
</script>

<style lang="scss" scoped>
.az-breadcrumb {
  display: flex;
  padding: 1.5em 0;

  > li {
    font-size: 14px;

    &:not(:last-child):after {
      content: '>';
      padding: 0.5em;
    }
  }

  &__link {
    text-decoration: none;
    color: black;
    transition: background-color 0.3s ease-in-out;
    padding: 0.5em;
    border-radius: 0.5rem;

    &:hover {
      background-color: #f6f6f6;
    }
  }

  &__active {
    padding: 0.5em;
    color: #666666;
    cursor: default;
  }
}
</style>