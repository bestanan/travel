<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '01',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2010/ae/ae92c630b2178efba3.water.jpg_200x200_cd3d6eb2.jpg',
          title: '深圳欢乐谷',
          desc: '亚太十大主题公园”之一，综合海陆空三栖游乐项目，爱刺激的人的天堂，有胆你就来。 '
        },
        {
          id: '02',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2010/ae/ae92c630b2178efba3.water.jpg_200x200_cd3d6eb2.jpg',
          title: '深圳欢乐谷',
          desc: '亚太十大主题公园”之一，综合海陆空三栖游乐项目，爱刺激的人的天堂，有胆你就来。 '
        },
        {
          id: '03',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2010/ae/ae92c630b2178efba3.water.jpg_200x200_cd3d6eb2.jpg',
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
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 2.3rem
    .item-img
      width 1.9rem
      height 1.9rem
      padding .2rem
    .item-info
      flex 1
      min-width 0 // 使 ellipsis 生效
      padding .3rem .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-btn
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
