<style lang="stylus" scoped>

</style>

<template>
  <div>  
    <city-header></city-header>
    <Search></Search>
    <list :cities='cities' :hotCities='hotCities'></list>
    <alphabet :cities='cities'></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "./components/header"
import Search from "./components/search"
import list from "./components/list"
import alphabet from "./components/alphabet"
export default {
  name: 'City',
  components:{
    CityHeader,
    Search,
    list,
    alphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCities () {
      axios.get('/api/city.json').then(this.getCitiesSucc)
    },
    getCitiesSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCities()
  }
}
</script>