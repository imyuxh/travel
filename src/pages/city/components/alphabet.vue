<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.list
  display flex
  flex-direction column
  position absolute
  right 0
  top 50%
  transform translateY(-50%)
  width .4rem
  .item
    font-size 0.3rem
    line-height .28rem
    text-align center
    color $bgColor
</style>

<template>
  <ul class="list">
    <li v-for="(item,key) of cities" :key="key" class="item">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  }
}
</script>