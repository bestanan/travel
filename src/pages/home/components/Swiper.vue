<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1606/20/20df9061bb68256c90.water.jpg_375x170_081f8da9.jpg'
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1606/20/20df9061bb68256c90.water.jpg_375x170_081f8da9.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 45.33%
    background #eee
    .swiper-img
      width 100%
</style>
