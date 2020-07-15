<template>
  <div class="header">
    <div class="img">
      <img src="../assets/u5.png" alt />
    </div>
    <div class="text">YUNXINGZHE</div>
    <ul>
      <li ref="home">
        <div>首页</div>
        <div>Home</div>
      </li>
      <li ref="product">
        <div>产品</div>
        <div>Product</div>
      </li>
      <li ref="desk">
        <div>服务平台</div>
        <div>Service desk</div>
      </li>
      <li ref="us">
        <div>关于我们</div>
        <div>About us</div>
      </li>
      <li ref="business">
        <div>商务合作</div>
        <div>Business</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
  props: ['route'],
  data() {
    return {};
  },
  methods:{
      judgeRoute(){
          if(this.route == 'home'){
              this.$refs.name.style.color = '#0079fe'
          }
      }
  },
  mounted(){
      console.log('name',this.route)
      this.judgeRoute()
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 0.3rem;
  // background-color: aquamarine;
  padding: 0rem 0.2rem;
  padding-top: 0.05rem;
  .img {
    width: 0.33rem;
    height: 0.22rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    margin-left: 0.1rem;
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
    font-weight: 700;
    font-style: normal;
    font-size: 0.1rem;
    color: #ffffff;
    text-rendering: optimizeLegibility;
  }
  ul {
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      float: left;
      height: 100%;
      color: #ffffff;
      text-align: left;
      font-size: 0.07rem;
      margin-left: 0.2rem;
    }
    li:hover {
      color: #0079fe;
    }
  }
}
</style>