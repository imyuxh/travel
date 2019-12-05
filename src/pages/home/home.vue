<style scoped>
</style>

<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icon'
import HomeRecommend from './components/recommend'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
};
</script>
