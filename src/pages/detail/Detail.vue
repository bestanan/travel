<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      gallaryImgs: [],
      sightName: '',
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      const id = this.$route.params.id
      axios.get('/api/detail.json', {
        params: {
          id: id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
