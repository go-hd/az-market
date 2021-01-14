<template>
  <div class="az-brand-slide">
    <az-container>
      <az-slide
          class="az-brand-slide__slide"
          ref="slide"
          :items="items"
          @transition="active = $event"
      >
        <template #content="{ item }">
          <div class="az-brand-slide__content">
            <az-container>
              <az-heading class="az-brand-slide__brand-name hidden-sp">
                {{ item.name }}
              </az-heading>
              <az-text
                  class="az-brand-slide__concept"
                  v-html="item.description.replaceAll('\n', '<br>')"
              />
              <az-text class="az-brand-slide__view-more hidden-sp">
                VIEW MORE
              </az-text>
            </az-container>
          </div>
        </template>
      </az-slide>
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
import azHeading from '../atoms/az-heading.vue'
import azLogo from '../atoms/az-logo.vue'
import azSlide from '../morques/az-slide.vue'
import azText from '../atoms/az-text.vue'

export default {
  name: 'az-brand-slide',

  components: {
    azContainer,
    azHeading,
    azLogo,
    azSlide,
    azText,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    active: '',
  }),

  mounted () {
    this.active = this.$refs.slide.getActive()
  },

  methods: {
    isActive (item) {
      return item === this.active
    },
  },
}
</script>

<style lang="scss" scoped>
.az-brand-slide {
  &__slide {
    margin: 0 -1.5rem;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    padding: 1.5rem 0;
    background: linear-gradient(rgba(50, 50, 50, 1), rgba(50, 50, 50, 0.5) 40%, rgba(50, 50, 50, 0) 70%);

    @media (min-width: 1200px) {
      background: rgba(0, 0, 0, 0.6);
      padding: 25rem 0;
      text-align: center;
      transition: opacity 0.5s ease-in-out;

      &:not(:hover) {
        opacity: 0;
      }
    }
  }

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
        flex-basis: 50%;
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

  &__concept {
    line-height: 2;
    letter-spacing: 0.2rem;
  }

  @media (min-width: 1200px) {
    &__brand-name {
      margin-bottom: 2rem;
    }

    &__concept {
      font-size: 1.8rem;
    }

    &__view-more {
      margin: 3rem auto;
      padding: 2rem 0;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      width: 20%;
    }
  }
}
</style>