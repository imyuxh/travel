<style lang="stylus" scoped>
.banner
  position relative
  height 0
  overflow hidden
  padding-bottom: 55%
  img
    width 100%
  .banner-info
    position absolute
    bottom 0
    left 0
    right 0
    display flex
    justify-content space-between
    line-height .6rem
    color #fff
    background-image linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8))
    .banner-title
      font-size .32rem
      padding 0 .2rem
    .banner-number
      padding 0 .4rem
      height .32rem
      margin-top .14rem
      line-height .32rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
        margin-right .1rem
</style>

<template>
  <div>
    <div class="banner">  
      <img @click="handleClickGallaryShow" class="banner-img" 
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"/>
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAAA）景区</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe71c;</span>39</div>
      </div>
    </div>
    <gallary @close="handleClickGallaryClose" v-show="gallaryShow"></gallary>
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    gallary
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  methods: {
    handleClickGallaryShow () {
      this.gallaryShow = true
    },
    handleClickGallaryClose () {
      this.gallaryShow = false
    }
  }
}
</script>