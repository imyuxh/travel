<style lang="stylus" scoped>
.content
  height 50rem
</style>

<template>
  <div>  
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children:[
          {
            title:'成人三馆联票'
          }
        ]
      },
      {
        title: '学生票'
      },
      {
        title: '儿童票'
      }]
    }
  }
}
</script>