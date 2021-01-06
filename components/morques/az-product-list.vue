<template>
  <ul class="az-product-list">
    <li v-for="item in items" :key="`az-product-list_` + item.id">
      <img
          class="az-product-list__image"
          :src="item.image"
          :alt="[item.brand, item.name].join(' ')"
      >
      <h3 class="az-product-list__brand">{{ item.brand }}</h3>
      <h4 class="az-product-list__name">{{ item.name }}</h4>
      <p class="az-product-list__price">{{ price(item.price) }}</p>
      <div class="az-product-list__cart">
        <az-icon class="az-product-list__favorite">fa-heart</az-icon>
        <az-button
            small
            dense
            reverse
            @click="addCart(item)"
        >カートに入れる
        </az-button>
        <form
            :ref="item.shopId + '_' + item.itemId"
            method="post"
            :data-timesale-id="item.itemId"
            action="https://basket.step.rakuten.co.jp/rms/mall/bs/cartadd/set"
        >
          <input value="1" type="hidden" size="4" name="units" id="units" class="rItemUnits">
          <input value="ES01_003_001" type="hidden" name="__event">
          <input :value="item.shopId" type="hidden" name="shop_bid">
          <input :value="item.itemId" type="hidden" name="item_id">
          <input value="1" type="hidden" name="inventory_flag">
        </form>
      </div>
    </li>
  </ul>
</template>

<script>
import { comma } from '@/helpers/string.js'

import azButton from '@/components/atoms/az-button.vue'
import azIcon from '@/components/atoms/az-icon.vue'

export default {
  name: 'az-product-list',

  components: {
    azButton,
    azIcon,
  },

  props: {
    items: {
      type: Array,
      required: true,
      validator (value) {
        const keys = [
          'id',
          'brand',
          'name',
          'to',
          'price',
          'image',
          'shopId',
          'itemId',
        ]
        return value.every(item => Object.keys(item).every(key => keys.includes(key)))
      },
    },
  },

  methods: {
    price (price) {
      return `\¥${comma(price)}（税込）`
    },

    addCart ({ shopId, itemId }) {
      this.$refs[`${shopId}_${itemId}`][0].submit()
    },
  },
}
</script>

<style lang="scss" scoped>
.az-product-list {
  display: grid;
  grid-gap: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);

  &__image {
    max-width: 100%;
  }

  &__brand {
    font-size: 1.2rem;
  }

  &__name {
    font-size: 1rem;
  }

  &__price {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }

  &__cart {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: 1.5rem;
    align-items: center;

    > form {
      display: none;
    }
  }

  &__favorite.az-icon {
    width: 2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8rem 4rem;
    padding: 2rem 6rem;

    &__brand {
      font-size: 1.3rem;
    }

    &__name {
      font-size: 1.1rem;
    }
  }
}
</style>