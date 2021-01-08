<template>
  <az-section class="az-ranking" title="RANKING">
    <div class="az-ranking__inner">
      <az-image-list :items="items" :columns="items.length" link>
        <template #list-item="{ item }" >
          <li class="az-ranking__list-item" :key="item.id">
            <a :href="item.to">
              <div class="az-ranking__rank-badge" :class="[rankClass(item.rank)]">{{ item.rank }}</div>
              <img :src="item.img" :alt="item.text">
              <az-text>{{ item.text }}</az-text>
            </a>
          </li>
        </template>
      </az-image-list>
    </div>
  </az-section>
</template>

<script>
import azImageList from '../morques/az-image-list.vue'
import azSection from '../morques/az-section.vue'
import azText from '../atoms/az-text.vue'

export default {
  name: 'az-ranking',

  components: {
    azImageList,
    azSection,
    azText,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    rankClass (rank) {
      return {
        'az-ranking__rank-badge--first': rank === 1,
        'az-ranking__rank-badge--second': rank === 2,
        'az-ranking__rank-badge--third': rank === 3,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.az-ranking {
  &__inner {
    max-width: calc(100vw - 3rem);
    overflow-x: auto;
  }

  .az-image-list {
    width: 200vw;
  }

  &__list-item {
    padding: 0.5rem 0 0 0.5rem;
    position: relative;

    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    a {
      color: black;
      text-decoration: none;
    }

    img {
      width: 11rem;
      height: 11rem;
      object-fit: cover;
    }
  }

  &__rank-badge {
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 0;
    left: 0;

    background-color: #333333;
    color: #ffffff;
    text-align: center;
    line-height: 2rem;
    font-weight: bold;
    font-size: 1.2rem;

    &--first {
      background: #aeae54;
    }

    &--second {
      background: #7F7F78;
    }

    &--third {
      background: #660B28;
    }
  }

  @media (min-width: 1200px) {
    .az-image-list {
      width: 100%;
    }

    &__list-item {
      padding: 1rem 0 0 1rem;
      cursor: pointer;

      img {
        width: 15rem;
        height: 15rem;
      }
    }

    &__rank-badge {
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      font-size: 2rem;
    }
  }
}
</style>