<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height .44rem
    background #eeeeee
    padding-left .2rem
    color #666
    font-size .26rem
  .button-list
    padding .1rem .5rem .1rem .1rem
    .wrapper
      display flex
      flex-wrap wrap
      .city
        box-sizing border-box
        margin .1rem .1rem .1rem 0
        padding .1rem 0
        text-align center
        border .02rem solid #cccccc
        border-radius .06rem
        width 32%
  .item-list
    .item
      line-heigt .76rem
      padding-left .2rem
    .border-bottom
      &:before
        border-color #cccccc
</style>

<template>
  <div class="list">
    <div class='area'>
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="wrapper">
          <div class="city">上海</div>
        </div>
      </div>
    </div>
    <div class='area'>
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="wrapper">
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
          <div class="city border-bottom">上海</div>
        </div>
      </div>
    </div>
    <div class='area'>
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
      <div class="title">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>