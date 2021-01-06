<template>
  <az-form @submit.prevent="search" class="az-search">
    <az-input v-model="keyword" :placeholder="placeholder" />
    <az-icon-button>fa-search-solid</az-icon-button>
  </az-form>
</template>

<script>
import azForm from '../atoms/az-form.vue'
import azIconButton from '../morques/az-icon-button.vue'
import azInput from '../atoms/az-input.vue'

export default {
  name: 'az-search',

  components: {
    azForm,
    azIconButton,
    azInput
  },

  props: {
    placeholder: {
      type: String,
      default: 'Search'
    }
  },

  data: () => ({
    keyword: ''
  }),

  methods: {
    search() {
      location.href = `https://search.rakuten.co.jp/search/mall/${this.keyword}/?sid=286314`
    }
  }
}
</script>

<style lang="scss" scoped>
.az-search {
  $icon-size: 2.8rem;
  display: grid;
  grid-template-columns: 1fr $icon-size;
  grid-gap: 1rem;

  padding: 0.8rem 0.5rem;
  border-bottom: 2px solid #333;

  .az-input {
    font-size: 1.6rem;
  }

  .az-icon {
    width: $icon-size;
    cursor: pointer;
  }
}
</style>