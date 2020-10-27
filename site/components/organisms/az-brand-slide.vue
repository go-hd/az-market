<template>
  <div class="az-brand-slide">
    <az-slide ref="slide" :items="items" @transition="active = $event"/>
    <az-container>
      <ul class="az-brand-slide__control">
        <li
            v-for="item in items"
            :key="item.id"
            :class="{ active: isActive(item) }"
            @click="$refs.slide.goto(item)"
        >
          <az-logo>{{ item.id }}</az-logo>
        </li>
      </ul>
    </az-container>
  </div>
</template>

<script>
import azContainer from '../atoms/az-container.vue'
import azLogo from '../atoms/az-logo.vue'
import azSlide from '../morques/az-slide.vue'

export default {
  name: "az-brand-slide",

  components: {
    azContainer,
    azLogo,
    azSlide
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    active: ''
  }),

  mounted() {
    this.active = this.$refs.slide.getActive()
  },

  methods: {
    isActive(item) {
      return item === this.active
    }
  }
}
</script>

<style lang="scss" scoped>
.az-brand-slide {
  &__control {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 6rem);
    grid-gap: 0.3rem 1rem;
    align-items: center;

    @media (min-width: 1200px) {
      display: flex;
      justify-content: space-around;
      padding: 2rem 0;

      > li {
        flex-basis: 100%;
      }
    }

    > li {
      text-align: center;
      padding-bottom: 0.7rem;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.6s ease-in-out;

      &.active {
        border-bottom: 2px solid #333;
      }

      .az-logo {
        cursor: pointer;
        max-height: 2.8rem;
        width: auto;
        max-width: 25vw;
        margin: auto;
      }
    }
  }
}
</style>