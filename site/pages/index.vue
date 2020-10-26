<template>
  <div class="index">
    <az-brand-slide :items="slides"/>
    <az-topic-list :items="topics"/>
    <az-category-list :items="categories"/>
    <az-ranking :items="ranking"/>
    <az-brand-list :items="brands"/>
  </div>
</template>

<script>
import azBrandList from '../components/organisms/az-brand-list.vue'
import azBrandSlide from '../components/organisms/az-brand-slide.vue'
import azCategoryList from '../components/organisms/az-category-list.vue'
import azRanking from '../components/organisms/az-ranking.vue'
import azTopicList from '../components/organisms/az-topic-list.vue'

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'index',

  components: {
    azBrandList,
    azBrandSlide,
    azCategoryList,
    azRanking,
    azTopicList,
  },

  data: () => ({
    slides: [
      {
        id: 'mens-null',
        img: require('assets/img/slide-null.jpg'),
        description: 'MENS NULL',
      },
      {
        id: 'nalc',
        img: require('assets/img/slide-nalc.jpg'),
        description: 'NALC',
      },
      {
        id: 'fafra',
        img: require('assets/img/slide-fafra.jpg'),
        description: 'fafra',
      },
      {
        id: 'iina-style',
        img: require('assets/img/slide-iina-style.jpg'),
        description: 'iina-style',
      },
      {
        id: 'defend-future',
        img: require('assets/img/slide-defend-future.jpg'),
        description: 'Defend Future',
      },
      {
        id: 'fixit',
        img: require('assets/img/slide-fixit.jpg'),
        description: 'FIXIT',
      },
    ],
    topics: [
      {
        id: 'null-wax-renewal',
        to: 'null-wax-renewal',
        img: require('assets/img/topic-null-wax-renewal.jpg'),
        text: '人気脱毛ワックス『NULL ハニーシュガーワックス』がリニューアル!',
      },
      {
        id: 'nalc-wrinkle-release',
        to: 'nalc-wrinkle-release',
        img: require('assets/img/topic-nalc-wrinkle-release.jpg'),
        text: '《シワを改善する×美白*1》有効成分 ナイアシンアミド配合『薬用ホワイトリンクルクリーム』8月5日発売',
      },
      {
        id: 'fafra-botanical-disinfectant',
        to: 'fafra-botanical-disinfectant',
        img: require('assets/img/topic-fafra-botanical-disinfectant.jpg'),
        text: '『fafra ボタニカル除菌消臭ミスト』から待望の”詰め替え用”発売',
      },
      {
        id: 'fixit-make-balance-soy-release',
        to: 'fixit-make-balance-soy-release',
        img: require('assets/img/topic-fixit-make-balance-soy.jpg'),
        text: 'FIXITから待望のソイプロテイン『MAKE BALANCE』が発売',
      },
    ],
    categories: [
      {
        id: 'skin-care',
        to: 'skin-care',
        text: 'スキンケア',
      },
      {
        id: 'body-care',
        to: 'body-care',
        text: 'ボディ/ヘアケア',
      },
      {
        id: 'bath-care',
        to: 'bath-care',
        text: 'バスケア',
      },
      {
        id: 'make-up',
        to: 'make-up',
        text: 'メイクアップ',
      },
      {
        id: 'daily-miscellaneous-goods',
        to: 'daily-miscellaneous-goods',
        text: '日用雑貨',
      },
      {
        id: 'fitness',
        to: 'fitness',
        text: 'フィットネス',
      },
      {
        id: 'disaster-prevention',
        to: 'disaster-prevention',
        text: '防災用品',
      },
      {
        id: 'gadget',
        to: 'gadget',
        text: 'モバイルガジェット',
      },
    ],
    ranking: [
      {
        id: 1,
        rank: 1,
        to: 'https://item.rakuten.co.jp/import-garden/menswax/',
        img: require('assets/img/ranking-null-wax.jpg'),
        text: 'NULL ハニーシュガーワックス',
      },
      {
        id: 2,
        rank: 2,
        to: 'https://item.rakuten.co.jp/import-garden/menswax/',
        img: require('assets/img/ranking-null-wax.jpg'),
        text: 'NULL ハニーシュガーワックス',
      },
      {
        id: 3,
        rank: 3,
        to: 'https://item.rakuten.co.jp/import-garden/menswax/',
        img: require('assets/img/ranking-null-wax.jpg'),
        text: 'NULL ハニーシュガーワックス',
      },
      {
        id: 4,
        rank: 4,
        to: 'https://item.rakuten.co.jp/import-garden/menswax/',
        img: require('assets/img/ranking-null-wax.jpg'),
        text: 'NULL ハニーシュガーワックス',
      },
      {
        id: 5,
        rank: 5,
        to: 'https://item.rakuten.co.jp/import-garden/menswax/',
        img: require('assets/img/ranking-null-wax.jpg'),
        text: 'NULL ハニーシュガーワックス',
      },
      {
        id: 6,
        rank: 6,
        to: 'https://item.rakuten.co.jp/import-garden/menswax/',
        img: require('assets/img/ranking-null-wax.jpg'),
        text: 'NULL ハニーシュガーワックス',
      },
    ],
    brands: [
      {
        id: 'mens-null',
        img: require('assets/img/slide-null.jpg'),
      },
      {
        id: 'nalc',
        img: require('assets/img/slide-nalc.jpg'),
      },
      {
        id: 'fafra',
        img: require('assets/img/slide-fafra.jpg'),
      },
      {
        id: 'iina-style',
        img: require('assets/img/slide-iina-style.jpg'),
      },
      {
        id: 'defend-future',
        img: require('assets/img/slide-defend-future.jpg'),
      },
      {
        id: 'fixit',
        img: require('assets/img/slide-fixit.jpg'),
      },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.index {
  display: grid;
  grid-gap: 4rem 0;
}
</style>