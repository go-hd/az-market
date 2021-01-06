<template>
  <small class="az-copyright">
    &copy; {{ new Date().getFullYear() }} {{ shopName }}<br>
    <slot/>
  </small>
</template>

<script>
export default {
  name: 'az-copyright',

  props: {
    shopName: {
      type: String,
      default: process.env.shopName || 'AZ Market'
    }
  }
}
</script>

<style lang="scss" scoped>
.az-copyright {
  font-size: 1rem;
  transform: scale(0.8);
  line-height: 1.8;
  color: #a2a2a2;
  text-align: center;
}
</style>