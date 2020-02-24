<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  text-align center
  background rgba(0, 0, 0, .8)
  .header-abs-back
    color #fff
    font-size .4rem
    line-height .8rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  display: flex;
  background: $bgColor;
  color:#FFF;
  height:.86rem;
  align-items:center;
  .left
    width:.64rem;
    text-align: center;
    .left-icon
      font-size:.4rem;
  .center
    position absolute
    left 50%
    transform translateX(-50%)

</style>

<template>
  <div>
    <router-link tag="div" to='/' class="header-abs" v-show='absShow'>
      <span class="iconfont header-abs-back">&#xe7eb;</span>
    </router-link>
    <div class='header-fixed' :style="opacityStyles" v-show='!absShow'>
      <router-link tag="div" to='/' class='left'>
        <span class="iconfont left-icon">&#xe7eb;</span>
      </router-link>
      <div class='center'>景点详情
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBHeader',
  data () {
    return {
      absShow: true,
      opacityStyles: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1? 1 : opacity
        this.opacityStyles.opacity = opacity
        this.absShow = false
      } else {
        this.absShow = true
      }
    }
  },
  activated () {
    window.console.log('activated')
    window.addEventListener('scroll', this.handleScroll)
  },
  created () {
    window.console.log('created')
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>