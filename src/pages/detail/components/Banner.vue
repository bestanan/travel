<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_600x330_29ac7bfd.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">世界之窗(AAAAA景区)</div>
      <div class="banner-num">
        <span class="iconfont banner-icon">&#xe63d;</span>
        <span>19</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    height 0
    padding-bottom 55%
    overflow hidden
    color #fff
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      height .6rem
      line-height .6rem
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-num
        height .32rem
        line-height .32rem
        margin .14rem .14rem 0 0
        padding 0 .24rem
        border-radius .2rem
        background rgba(0,0,0,.6)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
