<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="btn-list">
        <div class="btn-wrapper">
          <div class="btn">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="btn-list">
        <div class="btn-wrapper">
          <div class="btn">北京</div>
        </div>
        <div class="btn-wrapper">
          <div class="btn">北京</div>
        </div>
        <div class="btn-wrapper">
          <div class="btn">北京</div>
        </div>
        <div class="btn-wrapper">
          <div class="btn">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <ul class="item-list">
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
      </ul>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <ul class="item-list">
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
      </ul>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <ul class="item-list">
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
      </ul>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <ul class="item-list">
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
        <li class="item border-bottom">阿坝藏族羌族自治州</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
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
