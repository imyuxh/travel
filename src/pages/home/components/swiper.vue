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
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  props: {
    swiperList: Array
  },
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
    }
  }
}
</script>