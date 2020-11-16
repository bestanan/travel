<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true // 解决真机不能点击的问题
    })
  },
  updated () {
    // 当数据变化之后，需要更新swiper
    this.scroll.refresh()
  },
  methods: {
    handleCityClick (name) {
      // this.$store.commit('cityChange', name)
      this.cityChange(name)
      this.$router.push('/')
    },
    ...mapMutations(['cityChange'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // 利用 better-scroll 滚动到对应位置
        this.scroll.scrollToElement(element)
      }
      // console.log('子组件list', this.letter)
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    left 0
    top 1.58rem
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .btn-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden // 创建一个 BFC
      .btn-wrapper
        width 33.33%
        float left
        .btn
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      padding-left .2rem
      .item
        height .76rem
        line-height .76rem
</style>
