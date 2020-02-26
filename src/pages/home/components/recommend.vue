<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl';
.title
  margin-top .2rem
  background #eeeeee
  line-height .8rem
  text-indent .2rem
.recommends-group
  .recommend-item
    display flex
    .recommend-img
      padding .1rem
      img
        width 1.7rem
    .text
      flex 1
      padding .1rem
      min-width 0
      .recommend-title
        line-height .54rem
        font-size .32rem
        color #4a4a4a
        ellipsis()
      .desc
        line-height .4rem
        color #ccc
        ellipsis()
      .button
        background-color #ff9300
        padding 0 0.2rem
        line-height .44rem
        border-radius 0.06rem
        margin-top .16rem
        color #fff
</style>

<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="recommends-group">
      <router-link tag="li" :to="'/detail/' + item.id"
       v-for="item of recommendList" :key="item.id" class="recommend-item border-bottom">
        <div class="recommend-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class='text'>
          <p class="recommend-title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <button class="button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>