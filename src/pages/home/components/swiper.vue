<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background  #fff !important
.wrapper
  width:100%;
  height:31.25vw;
  background #eee
  .swiper-img
    width:100%
</style>
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data() {
    return {
      swiperOption: {
        loop:true,
        autoplay : { delay:2000},
        speed:300,
        pagination: {
          el:'.swiper-pagination'
        }
      },
      list:[
        {
          id:1,
          imgUrl:'//imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg'
        },
        {
          id:2,
          imgUrl:'//imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg'
        }
      ]
    }
  }
}
</script>