<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.header
  display: flex;
  width:100%;
  background: $bgColor;
  color:#FFF;
  height:.86rem;
  align-items:center;
  .left
    width:.64rem;
    text-align: center;
    .left-icon
      font-size:.4rem;
  .center
    background: #FFF;
    color:#ccc;
    flex:1;
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    margin:0.12rem 0rem 0.12rem .2rem;
    padding-left:.2rem;
    border-radius: .1rem;
  .city
    width:1.24rem;
    text-align: center;
    color: #ffffff;
    .arrow
      font-size:.2rem;
</style>

<template>
    <div class='header'>
      <div class='left'>
        <span class="iconfont left-icon">&#xe7eb;</span>
      </div>
      <div class='center'>
        <span class="iconfont">&#xe632;</span>
        请输入城市/景点/游玩主题
      </div>
      <router-link to='/city'>
        <div class='city'>{{this.$store.state.city}}
          <span class="iconfont arrow">&#xe600;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
};
</script>
