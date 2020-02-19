<style lang="stylus" scoped>

</style>

<template>
  <div>  
    <city-header></city-header>
    <Search></Search>
  </div>
</template>

<script>
import CityHeader from "./components/header"
import Search from "./components/search"
export default {
  name: 'City',
    components:{
      CityHeader,
      Search
    }
}
</script>