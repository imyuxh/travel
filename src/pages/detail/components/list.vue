<style lang="stylus" scoped>
.item-title
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
.item-child
  margin-left .2rem
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
</style>

<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">{{item.title}}</div>
      <div class="item-child border-bottom" v-if="item.children">
          <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list:Array
  }
}
</script>