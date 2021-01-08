<template>
  <nav class="az-menu">
    <ul>
      <template v-for="item in items">
        <nuxt-link
            v-if="!item.to.startsWith('https://')"
            tag="li"
            :key="item.id"
            :to="item.to"
        >{{ item.text }}</nuxt-link>
        <li
            v-else
            :key="item.id"
        >
          <a :href="item.to">
            {{ item.text }}
          </a>
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
    go (url) {
      location.href = url
    },
  },
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

    > a {
      color: inherit;
      text-decoration: none;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > li {
      font-size: 1.2rem;
      margin: 0;
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #444444;
      }

      &:not(:last-child):after {
        content: '/';
        padding: 0 1em;
        font-weight: bold;
        cursor: default;
      }
    }
  }
}
</style>