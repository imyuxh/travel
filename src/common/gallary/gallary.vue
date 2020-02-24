<style lang="stylus" scoped>
.container >>> .swiper-container
 overflow inherit
.container
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background #000000
  z-index 99
  display flex
  flex-direction column
  justify-content center 
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    img
      width 100%
    .swiper-pagination
      color #FFFFFF
      bottom -1rem
</style>

<template>
  <div class="container">
    <div @click="handleClose" class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img :src="item"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default: function () {
        return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
      }
    
    }
  },
  data () {
    return {
      swiperOption: {
        observer:true,
        observeParents:true,
        pagination:{
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>