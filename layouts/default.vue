<template>
  <div>
    <az-header :menu-items="headerMenu">
      <template slot="logo">
        <az-logo>az-market</az-logo>
      </template>
    </az-header>
    <nuxt></nuxt>
    <az-footer :menu-items="footerMenu"/>
  </div>
</template>

<script>
import azFooter from '../components/organisms/az-footer.vue'
import azHeader from '../components/organisms/az-header.vue'
import azLogo from '../components/atoms/az-logo.vue'

export default {
  name: 'default',

  components: {
    azFooter,
    azHeader,
    azLogo,
  },

  data: () => ({
    headerMenu: [
      {
        id: 'info',
        to: 'info',
        text: '会社情報',
      },
      {
        id: 'delivery',
        to: 'delivery',
        text: '配送・決済',
      },
      {
        id: 'favorite',
        to: 'https://my.bookmark.rakuten.co.jp/?func=reg&sname=AZ.MARKET+%A5%A8%A1%BC%A5%B8%A1%BC%A5%DE%A1%BC%A5%B1%A5%C3%A5%C8&surl=import-garden&shop_bid=286314&svid=201',
        text: 'お気に入り',
      },
      {
        id: 'cart',
        to: 'https://basket.step.rakuten.co.jp/rms/mall/bs/cart/',
        text: '買い物かご',
      },
    ],
    footerMenu: [
      {
        id: 'delivery',
        to: '',
        text: '送料・配送について',
      },
      {
        id: 'privacy',
        to: '',
        text: '個人情報について',
      },
      {
        id: 'payment',
        to: '',
        text: 'お支払いについて',
      },
      {
        id: 'cancel',
        to: '',
        text: '返品・交換・キャンセルについて',
      },
      {
        id: 'mail-error',
        to: '',
        text: 'メールが届かない場合',
      },
      {
        id: 'contact',
        to: '',
        text: 'お問い合わせ',
      }
    ],
  }),
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: calc(100vw * 10 / 375);

  @media (min-width: 1200px) {
    font-size: 10px;
  }
}

ul {
  padding: 0;
  list-style: none;
}
</style>