<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom nodata" v-show="noData">
          未找到数据奥~
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  },
  updated () {
    this.scroll.refresh()
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      let result = []
      for (let key in this.cities) {
        this.cities[key].forEach(element => {
          if (element.name.indexOf(this.keyword) > -1 || element.spell.indexOf(this.keyword) > -1) {
            result.push(element)
          }
        })
      }
      this.list = result
    }
  },
  methods: {
    handleCityClick (name) {
      // this.$store.commit('cityChange', name)
      this.cityChange(name)
      this.$router.push('/')
    },
    ...mapMutations(['cityChange'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 1
    overflow hidden
    .search-item
      height .62rem
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
    .nodata
      text-align center
</style>
