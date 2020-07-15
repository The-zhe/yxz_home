<template>
  <div class="footer">
    <div class="contain">
      <div class="top">
        <img src="../assets/u78.png" alt />
        <ul class="product">
          <li class="title">产品</li>
          <li>——</li>
          <li>供应链平台</li>
          <li>门店管理系统</li>
          <li>综合厂进销存管理系统</li>
          <li>大数据聚合平台</li>
          <li>保险公司业务端</li>
        </ul>
        <ul class="product">
          <li class="title">服务平台</li>
          <li>——</li>
          <li>供应链平台</li>
          <li>门店管理系统</li>
          <li>门店营销系统</li>
          <li>大数据聚合平台</li>
          <li>保险公司理赔管理端</li>
        </ul>
        <ul class="product">
          <li class="title">关于我们</li>
          <li>——</li>
          <li>关于云行者</li>
          <li>关于团队</li>
        </ul>
        <ul class="product" style="margin-right:.2rem">
          <li class="title" style="margin-left:0.08rem">商务合作</li>
          <li style="margin-left: 0.08rem;">——</li>
          <li class="address">
            <img src="../assets/u87.png" alt />
            <div class="area">浙江省宁波市鄞州区下应街道湖下路217号2501-2室</div>
          </li>
          <li>
            <img src="../assets/u99.png" alt />http://yxz2020.com
          </li>
          <li>
            <img src="../assets/u88.png" alt style="height:0.04rem" />zjyxzbxkj@163.com
          </li>
          <li>
            <img src="../assets/u89.png" alt />0574-81873609
          </li>
        </ul>
        <div class="qrCode">
          <div class="qrhome">
            <img src="../assets/u81.jpg" alt />
            <span>云行者之家</span>
          </div>
          <div class="qrer">
            <img src="../assets/u82.jpg" alt />
            <span>云行者</span>
          </div>
        </div>
      </div>
      <div class="num">浙ICP备20019351号</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 0.9rem;
  background-color: rgba(1, 23, 54, 1);
  .contain {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 4.5rem;
    margin: 0 auto;
    .top {
      display: flex;
      flex-direction: row;
      img {
        height: 0.48rem;
        margin-top: 0.1rem;
        margin-right: 0.2rem;
      }
      .product {
        width: 0.7rem;
        list-style: none;
        font-size: 0.02rem;
        color: white;
        margin: 0.1rem 0rem;
        .title {
          font-weight: bold;
        }
        li {
          padding: 0.01rem 0rem;
          text-align: left;
          img {
            display: inline;
            height: 0.06rem;
            margin-top: 0rem;
            margin-right: 0.02rem;
          }
        }
        .address {
          display: flex;
          flex-direction: row;
          img {
            display: inline;
            height: 0.06rem;
            margin-top: 0rem;
            margin-right: 0.02rem;
          }
        }
      }
      .qrCode {
        display: flex;
        flex-direction: row;
        margin-left: 0.1rem;
        .qrhome {
          display: flex;
          flex-direction: column;
          img {
            height: 0.4rem;
            margin-right: 0rem;
          }
          span {
            color: white;
            font-size: 0.07rem;
          }
        }
        .qrer {
          display: flex;
          flex-direction: column;
          margin-left: 0.2rem;
          img {
            height: 0.4rem;
            margin-right: 0rem;
          }
          span {
            color: white;
            font-size: 0.07rem;
          }
        }
      }
    }
    .num {
      margin-bottom: 0.03rem;
      font-size: 0.04rem;
      color: white;
    }
  }
}
</style>