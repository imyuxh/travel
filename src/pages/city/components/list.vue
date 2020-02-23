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
    line-height .54rem
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
        width 31%
  .item-list
    .item
      line-heigt .76rem
      padding-left .2rem
    .border-bottom
      &:before
        border-color #cccccc
</style>

<template>
  <div class="list" ref='wrapper'>
    <div><!--使用better-scroll-->
      <div class='area'>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="wrapper">
            <div class="city">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="wrapper">
            <div @click="changeCity(item.name)" v-for="item of hotCities" :key="item.id" class="city border-bottom">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title">{{key}}</div>
          <div class="item-list">
            <div @click="changeCity(i.name)" v-for="i of item" :key="i.id" class="item border-bottom">{{i.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      // window.console.log(this.letter)
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    ...mapMutations({
      handleChangeCity:'changeCity'
      }),
    changeCity(city) {
      this.handleChangeCity(city)
      // this.$store.commit('changeCity',city)
      this.$router.replace('/')
    }
  }
}
</script>