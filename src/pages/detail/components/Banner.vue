<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe63d;</span>
          <span>{{bannerImgs.length}}</span>
        </div>
      </div>
    </div>
    <common-gallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryclose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  props: {
    bannerImg: String,
    bannerImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1904/c2/c26e1e4ffe899843a3.water.jpg_r_800x800_67a1106e.jpg', 'http://img1.qunarzz.com/sight/p0/1505/55/55978d709ae63850.water.jpg_r_800x800_8cf3f903.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryclose () {
      this.showGallery = false
    }
  }
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
