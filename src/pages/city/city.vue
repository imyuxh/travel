<style lang="stylus" scoped>

</style>

<template>
  <div>  
    <city-header></city-header>
    <Search></Search>
    <list></list>
  </div>
</template>

<script>
import CityHeader from "./components/header"
import Search from "./components/search"
import list from "./components/list"
export default {
  name: 'City',
    components:{
      CityHeader,
      Search,
      list
    }
}
</script>