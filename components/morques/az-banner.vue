<template>
  <div
      class="az-banner"
      :class="[color]"
  >
    <div class="az-banner__title">
      <az-icon
          v-if="icon"
          class="az-banner__icon"
      >{{ icon }}</az-icon>
      <az-heading>{{ title }}</az-heading>
    </div>
    <slot>
      <az-text v-if="description">
        {{ description }}
      </az-text>
    </slot>
  </div>
</template>

<script>
import azHeading from '@/components/atoms/az-heading.vue'
import azIcon from '@/components/atoms/az-icon.vue'
import azText from '@/components/atoms/az-text.vue'

export default {
  name: 'az-banner',

  props: {
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },

  components: {
    azHeading,
    azIcon,
    azText,
  }
}
</script>

<style lang="scss" scoped>
.az-banner {
  user-select: none;
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #f7f7f7, #e0e0e0);

  display: grid;
  gap: 0.5rem;

  &.blue {
    background: linear-gradient(135deg, #dcf7f2, #d7e7fd);
  }

  &.red {
    background: linear-gradient(135deg, #fbdde5, #fef1e0);
  }


  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  &__icon {
    height: 3rem;
  }
}
</style>