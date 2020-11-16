<template>
  <div>
    <ul class="list">
      <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      letterHeight: 0,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const lettersArr = []
      for (let key in this.cities) {
        lettersArr.push(key)
      }
      return lettersArr
    }
  },
  updated () {
    // 起始字母
    const startElement = this.$refs['A'][0]
    // 字母高度
    this.letterHeight = startElement.offsetHeight
    // 字母 A 距离视口顶部的距离
    this.startY = startElement.getBoundingClientRect().top
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerText
      // console.log('子组件Alphabet', letter)
      this.$emit('letterChange', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 手指滑动的距离
          const touchY = e.touches[0].clientY
          // 滑到第几个字母了
          const index = Math.floor((touchY - this.startY) / this.letterHeight)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letterChange', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      color $bgColor
</style>
