<style scoped>
</style>

<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper
  }
};
</script>
