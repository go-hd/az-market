<template>
  <!--suppress HtmlFormInputWithoutLabel -->
  <input
      v-bind="propsWithoutValue"
      v-on="listenersWithoutInput"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="az-input"
      type="text"
  >
</template>

<script>
export default {
  name: 'az-input',

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  computed: {
    propsWithoutValue() {
      const {value, ...props} = this.$props
      return props
    },

    listenersWithoutInput() {
      const {input, ...listeners} = this.$listeners
      return listeners
    }
  }
}
</script>

<style lang="scss" scoped>
.az-input {
  border: none;

  &:focus {
    outline: none;
  }
}
</style>