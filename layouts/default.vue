<template>
  <div>
    <az-header :menu-items="headerMenu">
      <template slot="logo">
        <az-logo>az-market</az-logo>
      </template>
    </az-header>
    <nuxt></nuxt>
    <az-scroll-to-top class="scroll-to-top"/>
    <az-footer :menu-items="footerMenu"/>
  </div>
</template>

<script>
import azFooter from '../components/organisms/az-footer.vue'
import azHeader from '../components/organisms/az-header.vue'
import azLogo from '../components/atoms/az-logo.vue'
import azScrollToTop from '../components/morques/az-scroll-to-top.vue'

export default {
  name: 'default',

  components: {
    azFooter,
    azHeader,
    azLogo,
    azScrollToTop,
  },

  data: () => ({
    headerMenu: [
      {
        id: 'info',
        to: 'https://www.rakuten.co.jp/import-garden/info.html',
        text: '会社情報',
      },
      {
        id: 'delivery',
        to: 'https://www.rakuten.ne.jp/gold/import-garden/shopparts/shopping-guide/info01n.html#delivery',
        text: '配送・決済',
      },
      {
        id: 'favorite',
        to: 'https://my.bookmark.rakuten.co.jp/?func=reg&sname=AZ.MARKET+%A5%A8%A1%BC%A5%B8%A1%BC%A5%DE%A1%BC%A5%B1%A5%C3%A5%C8&surl=import-garden&shop_bid=286314&svid=201',
        text: 'お気に入り',
      },
    ],
    footerMenu: [
      {
        id: 'about',
        to: 'https://www.rakuten.co.jp/import-garden/info.html',
        text: '会社概要',
      },
      {
        id: 'privacy',
        to: 'https://www.rakuten.co.jp/import-garden/info.html',
        text: '個人情報の取扱について',
      },
      {
        id: 'trade-law',
        to: 'https://www.rakuten.co.jp/import-garden/info.html',
        text: '特定商取引法に基づく記載',
      },
      {
        id: 'delivery',
        to: 'https://www.rakuten.ne.jp/gold/import-garden/shopparts/shopping-guide/info01n.html#delivery',
        text: 'お支払い・送料について',
      },
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
  font-family: sans-serif;

  font-size: calc(100vw * 10 / 375);

  @media (min-width: 1200px) {
    font-size: 10px;
  }
}

ul {
  padding: 0;
  list-style: none;
}

@media (max-width: 1199px) {
  .hidden-sp {
    display: none!important;
  }
}

@media (min-width: 1200px) {
  .hidden-pc {
    display: none!important;
  }
}
</style>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  @media (min-width: 1200px) {
    display: none;
  }
}
</style>