<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.search
  box-sizing border-box
  width 100%
  height .72rem
  padding 0 .5rem
  background $bgColor;
  .search-input
    box-sizing border-box;
    width 100%;
    padding 0 .2rem
    text-align center
    height .62rem
    line-height .62rem
    border-radius .06rem
    color #666
.search-content
  overflow hidden
  z-index 1
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>

<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div v-show="keyword" class="search-content" ref='search'>
      <ul>
        <li class="search-item border-bottom" v-for="item of result" :key="item.id">{{item.name}}</li>
      </ul>
      <ul>
        <li class="search-item border-bottom" v-show="noData">暂无匹配结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      result: [],
      timer: null
    }
  },
  computed: {
    noData () {
      return !this.result.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let array = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              array.push(value)
            }
          })
        }
        this.result = [].concat(array)
      },100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>