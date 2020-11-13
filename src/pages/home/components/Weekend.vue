<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
          title: '深圳欢乐谷',
          desc: '亚太十大主题公园”之一，综合海陆空三栖游乐项目，爱刺激的人的天堂，有胆你就来。 '
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
          title: '深圳欢乐谷',
          desc: '亚太十大主题公园”之一，综合海陆空三栖游乐项目，爱刺激的人的天堂，有胆你就来。 '
        },
        {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
          title: '深圳欢乐谷',
          desc: '亚太十大主题公园”之一，综合海陆空三栖游乐项目，爱刺激的人的天堂，有胆你就来。 '
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 33.4%
      .item-img
        width 100%
    .item-info
      padding .1rem .24rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>
