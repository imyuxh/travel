<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width .4rem
  .item
    font-size 0.3rem
    line-height .28rem
    text-align center
    color $bgColor
</style>

<template>
  <ul class="list">
    <li @click="clickLetter(key)"
     @touchstart="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd"
     v-for="(item,key) of cities"
      :key="key"
      :ref="key"
       class="item">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touch: false,
      startY:0,
      timer:null
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs[this.letters[0]][0].offsetTop
  },
  methods: {
    clickLetter (letter) {
      this.$emit('change', letter)
    },
    handleTouchStart () {
      this.touch = true
    },
    handleTouchMove (e) {
      if (this.touch) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let startY = this.startY
          let touchY = e.touches[0].clientY
          let distance = touchY - startY - 79
          let i = Math.floor(distance / 14)
          this.$emit('change', this.letters[i])
        },16)
      }
    },
    handleTouchEnd () {
      this.touch = false
    }
  }
}
</script>