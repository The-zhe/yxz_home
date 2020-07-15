<template>
  <div class="business">
    <header>
      <div class="img">
        <img src="../assets/u5.png" alt />
      </div>
      <div class="text">YUNXINGZHE</div>
      <ul>
        <li ref="home" @click="toHome()">
          <div class="pad">首页</div>
          <div class="pad">Home</div>
        </li>
        <li ref="product" @click="toProduct()">
          <div class="pad">产品</div>
          <div class="pad">Product</div>
        </li>
        <li ref="desk" @click="toService()">
          <div class="pad">服务平台</div>
          <div class="pad">Service platform</div>
        </li>
        <li ref="us" @click="toAbout()">
          <div class="pad">关于我们</div>
          <div class="pad">About us</div>
        </li>
        <li ref="business">
          <div class="pad">商务合作</div>
          <div class="pad">Business</div>
          <span></span>
        </li>
      </ul>
    </header>
    <main>
      <div class="content">
        <div class="text">BUSINESS</div>
        <div class="text">COOPERATION</div>
        <img src="../assets/u36.png" alt style="margin:0.08rem 0rem" />
        <div class="text">商务合作</div>
        <ul class="list">
          <li>
            <div class="icon">
              <img src="../assets/u382.png" alt />
            </div>
            <div class="text">地址</div>
            <div class="eng">adderss</div>
            <div class="detail">浙江省宁波市鄞州区下应街道湖下路217号2501-2室</div>
          </li>
          <li>
            <div class="icon">
              <img src="../assets/u383.png" alt />
            </div>
            <div class="text">邮箱</div>
            <div class="eng">Mailbox</div>
            <div class="detail space">zjyxzbxkj@163.com</div>
          </li>
          <li>
            <div class="icon">
              <img src="../assets/u384.png" alt />
            </div>
            <div class="text">联系方式</div>
            <div class="eng">Contact information</div>
            <div class="detail space">0574-81873609</div>
          </li>
          <li>
            <div class="icon">
              <img src="../assets/u385.png" alt />
            </div>
            <div class="text">网址</div>
            <div class="eng">Website</div>
            <div class="detail space">http://yxz2020.com</div>
          </li>
        </ul>
        <baidu-map
          id="allmap"
          :center="center"
          :zoom="zoom"
          @ready="handler"
          style="width:4rem;height:1.2rem"
          @click="getClickInfo"
          :scroll-wheel-zoom="true"
        ></baidu-map>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
// import BMap from 'BMap';
export default {
  name: "business",
  components: { Footer },
  data() {
    return {
      route: "",
      position: "",
      rText:
        "浙江云行者保险科技有限公司现已入驻宁波保险科技产业园，致力于为中国汽车用户提供专业透明、体验优良的互联网服务和事故处理服务，为保险公司和汽车修理厂提供卓有成效的互联网营销解决方案、事故理赔解决方案等增值服务，是全国首家聚焦“汽车后市场”领域的保险科技公司。公司秉持“科技引领、服务为本、开放共享”的发展理念，坚持产学研用协同创新发展模式，推进大数据、云计算、物联网、区块链、人工智能等保险科技集成创新，以搭建集事故理赔、故障维修、保险服务、配件溯源等功能于一体的综合服务平台为核心，通过打通汽车维修全产业链上下游企业、保险公司与汽车用户之间的信息交互渠道，构建融合“汽车维修+车辆保险+科技服务”的商业生态闭环，为消费者和修理厂创造“干净、舒适”的消费环境和服务环境，助推行业发展规范化、信息管理透明化、费用支付便捷化、用户服务专业化。"
    };
  },
  methods: {
    toHome() {
      this.$router.push({ name: "home" });
    },
    toProduct() {
      this.$router.push({ name: "product" });
    },
    toService() {
      this.$router.push({ name: "service" });
    },
    toAbout() {
      this.$router.push({ name: "about" });
    },
    getRoute() {
      this.route = this.$route.name;
      if (this.route == "business") this.$refs.business.style.color = "#0079fe";
    },
    BaiduMap() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(121.590485, 29.819284);
      map.centerAndZoom(point, 12);
      map.setCurrentCity("宁波");
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      map.enableScrollWheelZoom(true);
    }
  },
  mounted() {
    this.getRoute();
    var _that = this;
    setTimeout(() => {
      _that.BaiduMap();
    }, 1000);
  }
};
</script>
<style lang="less" scoped>
.business {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  background: url("../assets/u0_state0.jpg") no-repeat;
  background-size: 100% 100%;
  header {
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    height: 0.25rem;
    // background-color: aquamarine;
    padding: 0rem 0.2rem;
    padding-top: 0.05rem;
    z-index: 100;
    .img {
      width: 0.29rem;
        height: 0.15rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      margin-left: 0.05rem;
      font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
      font-weight: 700;
      font-style: normal;
      font-size: 0.06rem;
      color: #ffffff;
      text-rendering: optimizeLegibility;
    }
    ul {
      li {
        display: flex;
        flex-direction: column;
        // align-items: center;
        float: left;
        height: 100%;
        color: #ffffff;
        text-align: left;
        // padding:0rem 0.005rem 0.002rem 0.005rem;
        font-size: 0.04rem;
        margin-left: 0.2rem;
        cursor: pointer;
        .pad {
          padding: 0rem 0.03rem;
        }
        span {
          width: 100%;
          height: 0.005rem;
          background-color: #0079fe;
          margin: 0.01rem;
        }
      }
      li:hover {
        color: #0079fe;
      }
    }
  }
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    // margin-bottom: 0.2rem;
    padding-top: 0.304rem;
    position: relative;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // margin-top: 0.2rem;
      .text {
        font-size: 0.11rem;
        color: #ffffff;
        line-height: 0.15rem;
        text-align: left;
      }
      .list {
        li {
          display: flex;
          flex-direction: column;
          width: 0.7rem;
          justify-content: center;
          align-items: center;
          float: left;
          margin: 0.15rem 0.15rem;
          .icon {
            // width: 0.11rem;
            height: 0.125rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            font-size: 0.045rem;
            line-height: 0.1rem;
          }
          .eng {
            color: #cccccc;
            font-size: 0.04rem;
            line-height: 0.07rem;
          }
          .detail {
            color: #cccccc;
            font-size: 0.045rem;
          }
          .space {
            margin-top: 0.06rem;
          }
        }
      }
      #allmap {
        position: absolute;
        bottom: 0rem;
      }
    }
  }
}
</style>