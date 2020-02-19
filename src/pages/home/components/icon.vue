<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl';
.icons-group
  width 100%
  display flex
  flex-wrap wrap
  .icons-item
    padding-top:.2rem
    width 25%
    img
      display block
      margin 0 auto .2rem auto
      height 1.5rem
    p
      padding 0 .2rem
      text-align center
      ellipsis()
</style>

<template>
  <div>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of pages" :key="index">
        <div class="icons-group">
          <div class="icons-item" v-for="icon of item" :key="icon.id">
            <img :src="icon.imgUrl">
            <p>{{icon.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HeaderIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {},
    }
  },
  computed:{
    pages () {
      let array = []
      let iconList = this.iconList
      for ( let i = 0; i < iconList.length;) {
        let tmp = []
        if (iconList.length - i > 8) {
          for (let j = 0; j < 8; j++) {
            tmp.push(iconList[i + j])
          }
          i =  i + 8
          array.push(tmp)
        } else {
          for (let j = i; j < iconList.length; j++) {
            tmp.push(iconList[j])
          }
          array.push(tmp)
          break
        }
        
      }
      return array
    }
  }
}
</script>