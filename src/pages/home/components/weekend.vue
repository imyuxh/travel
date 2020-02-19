<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl';
.title
  margin-top .2rem
  background #eeeeee
  line-height .8rem
  text-indent .2rem
.weekends-group
  .weekend-item
    .weekend-img
      width 100vw
      img
        width 100%
    .text
      padding .1rem
      .weekend-title
        line-height .54rem
        font-size .32rem
        color #4a4a4a
        ellipsis()
      .desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>

<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul class="weekends-group">
      <li v-for="item of weekendList" :key="item.id" class="weekend-item border-bottom">
        <div class="weekend-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class='text'>
          <p class="weekend-title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
    }
  }
}
</script>