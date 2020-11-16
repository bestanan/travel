<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :currentCity="currentCity"
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter"
    ></city-list>
    <city-alphabet :cities="cities" @letterChange="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      currentCity: '',
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.currentCity = data.city
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
      console.log(res)
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log('父组件city', letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
