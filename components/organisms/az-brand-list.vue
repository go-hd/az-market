<template>
  <az-section class="az-brand-list" title="BRAND">
    <az-image-list
        link
        :items="items"
        :columns="{ sp: 1, pc: 3 }"
        :image-height="{ sp: 220, pc: 250 }"
    >
      <template #list-item-description="{ item }">
        <div class="az-brand-list__detail">
          <az-logo class="az-brand-list__logo">{{ item.id }}</az-logo>
          <az-text
              class="az-brand-list__description"
              v-html="item.description.replaceAll('\n', '<br>')"
          >
          </az-text>
        </div>
      </template>
    </az-image-list>
  </az-section>
</template>

<script>
import azImageList from '../morques/az-image-list.vue'
import azLogo from '../atoms/az-logo.vue'
import azSection from '../morques/az-section.vue'
import azText from '../atoms/az-text.vue'

export default {
  name: 'az-brand-list',

  components: {
    azImageList,
    azLogo,
    azSection,
    azText,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.az-brand-list {
  &__detail {
    text-align: center;
    padding: 1rem 0;
  }

  &__logo {
    max-height: 3rem;
  }

  &__description {
    padding: 1rem 0;
  }
}
</style>