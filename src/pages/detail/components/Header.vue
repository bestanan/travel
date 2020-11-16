<template>
  <div>
    <router-link tag="div" to="/" class="header-back" v-show="showBack">
      <div class="iconfont header-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showBack" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-icon">&#xe624;</div>
      </router-link>
      {{sightName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showBack: true,
      // 头部透明度渐变效果
      opacityStyle: {
        opacity: 0.8
      }
    }
  },
  methods: {
    handleScroll () {
      // 滚动距离
      let top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showBack = false
        return
      }
      this.showBack = true
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 对全局事件解绑（否则会影响其他组件）
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header-back
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .7rem)
    .header-back-icon
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-icon
      width .64rem
      text-align center
      font-size .4rem
      float left
      color #fff
</style>
