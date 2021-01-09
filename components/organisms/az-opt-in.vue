<template>
  <div class="az-opt-in">
    <a
        class="az-opt-in__link"
        href="https://www.rakuten.co.jp/import-garden/news.html"
    >
      <az-banner
          class="az-opt-in__banner"
          color="blue"
          icon="fa-envelope"
          title="MAIL MAGAZINE"
          description="AZ Marketからお得な情報をお届け"
      />
    </a>
    <a
        class="az-opt-in__link"
        href="https://my.bookmark.rakuten.co.jp/?func=reg&sname=AZ.MARKET+%A5%A8%A1%BC%A5%B8%A1%BC%A5%DE%A1%BC%A5%B1%A5%C3%A5%C8&surl=import-garden&shop_bid=286314&svid=201"
    >
      <az-banner
          class="az-opt-in__banner"
          color="red"
          icon="fa-star"
          title="お気に入り登録"
          description="クーポン＆値下げ情報をお知らせ通知でお届け"
      />
    </a>
  </div>
</template>

<script>
import azBanner from '@/components/morques/az-banner.vue'

export default {
  name: 'az-opt-in',

  components: {
    azBanner,
  },
}
</script>

<style lang="scss" scoped>
.az-opt-in {
  display: grid;
  grid-gap: 2rem;

  &__link {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
  }

  &__banner {
    height: 13rem;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 35rem);
    justify-content: center;
  }
}
</style>