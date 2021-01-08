<template>
  <div class="az-scroll-to-top">
    <transition name="fade">
      <button
          class="az-scroll-to-top__button"
          v-if="isShown"
          @click="handleClick"
      >▲</button>
    </transition>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'az-scroll-to-top',

  props: {
    startPosition: {
      type: Number,
      default: 300,
    },
  },

  data: () => ({
    isShown: false,
  }),

  mounted () {
    window.addEventListener('scroll', debounce(this.handleScroll))
  },

  methods: {
    handleScroll () {
      this.isShown = window.scrollY >= this.startPosition
    },

    handleClick () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.az-scroll-to-top {
  z-index: 99999;
  &__button {
    border: none;
    background-color: white;
    border-radius: 3px;
    color: #666666;
    box-shadow: 0 1rem 2.5rem 0 rgba(0, 0, 0, .5);
    text-align: center;
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
    outline: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>