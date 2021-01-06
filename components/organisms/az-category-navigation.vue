<template>
  <div class="az-category-navigation">
    <div class="az-category-navigation__image">
      <img :src="image" :alt="title">
    </div>
    <div class="az-category-navigation__detail">
      <div class="az-category-navigation__detail-inner">
        <h2 class="az-category-navigation__title">
          {{ title }}
        </h2>
        <ul class="az-category-navigation__list">
          <li class="az-category-navigation__list-item" v-for="item in items">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'az-category-navigation',

  props: {
    title: {
      type: String,
      required: true,
    },

    items: {
      type: Array,
      required: true,
      validator (value) {
        return value.every(item => typeof item === 'string')
      },
    },

    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.az-category-navigation {
  display: grid;
  margin: 0 -1.5rem;

  &__image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__detail {
    padding: 1rem;
    background-color: #f8f8f8;
  }

  &__title {
    font-size: 2.3rem;
    font-weight: normal;
    border-bottom: 1px solid #000000;
    padding: 0.8rem 0.4rem;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.6rem;
    padding: 2rem 0.8rem;
  }

  &__list-item {
    padding: 0.6rem 1rem;
    border: 1px solid #000000;
    text-align: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 500px 1fr;
    grid-template-rows: 350px;
    margin: 0;

    &__detail {
      position: relative;
    }

    &__detail-inner {
      position: absolute;
      width: calc(100% - 120px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>