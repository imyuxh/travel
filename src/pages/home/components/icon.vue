<style lang="stylus" scoped>
@import '~@/assets/styles/ellipsis.styl';
.icons-group
  width 100%
  display flex
  flex-wrap wrap
  .icons-item
    padding-top:.2rem
    width 25%
    img
      display block
      margin 0 auto .2rem auto
      height 1.5rem
    p
      padding 0 .2rem
      text-align center
      ellipsis()
</style>

<template>
  <div>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of pages" :key="index">
        <div class="icons-group">
          <div class="icons-item" v-for="icon of item" :key="icon.id">
            <img :src="icon.imgUrl">
            <p>{{icon.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HeaderIcons',
  data () {
    return {
      swiperOption: {},
      iconList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        "desc": "泡温泉"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      }, {
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        "desc": "一日游"
      }]
    }
  },
  computed:{
    pages () {
      let array = []
      let iconList = this.iconList
      for ( let i = 0; i < iconList.length;) {
        let tmp = []
        if (iconList.length - i > 8) {
          for (let j = 0; j < 8; j++) {
            tmp.push(iconList[i + j])
          }
          i =  i + 8
          array.push(tmp)
        } else {
          for (let j = i; j < iconList.length; j++) {
            tmp.push(iconList[j])
          }
          array.push(tmp)
          break
        }
        
      }
      return array
    }
  }
}
</script>