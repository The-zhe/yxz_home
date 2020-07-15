<template>
  <div class="about">
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
        <li ref="us">
          <div class="pad">关于我们</div>
          <div class="pad">About us</div>
          <span></span>
        </li>
        <li ref="business" @click="toBusiness()">
          <div class="pad">商务合作</div>
          <div class="pad">Business</div>
        </li>
      </ul>
    </header>
    <main>
      <div class="aboutUs">
        <div class="left">
          <div class="text">ABOUT</div>
          <div class="text" style="margin-bottom: .1rem;">CLOUDWALKER</div>
          <div class="img">
            <img src="../assets/u36.png" alt />
          </div>
          <div class="cn">关于云行者</div>
        </div>
        <div class="right">
          <div class="r_img">
            <img src="../assets/u308.png" alt />
          </div>
          <div class="r_text">{{this.rText}}</div>
        </div>
      </div>
      <div class="aboutTeam">
        <div class="left">
          <div class="text">ABOUT</div>
          <div class="text" style="margin-bottom: .1rem;">THE TEAM</div>
          <div class="img">
            <img src="../assets/u36.png" alt />
          </div>
          <div class="cn">关于团队</div>
        </div>
        <div class="right" style="margin-bottom: .1rem;margin-left:0.1rem">
          <div class="r_img">
            <img src="../assets/u322.png" alt />
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
export default {
  name: "about",
  components: { Footer },
  data() {
    return {
      route: "",
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
    toBusiness() {
      this.$router.push({ name: "business" });
    },
    getRoute() {
      this.route = this.$route.name;
      if (this.route == "about") this.$refs.us.style.color = "#0079fe";
    }
  },
  mounted() {
    this.getRoute();
  }
};
</script>
<style lang="less" scoped>
.about {
  width: 100%;
  background: url("../assets/u0_state0.jpg") no-repeat;
  background-size: 100% 100%;
  header {
    position: fixed;
    display: flex;
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
    padding-top: 0.2rem;
    width: 100%;
    .aboutUs {
      display: flex;
      flex-direction: row;
      width: 4.5rem;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      margin-top: 0.4rem;
      margin-bottom: 1rem;
      .left {
        display: flex;
        flex-direction: column;
        .text {
          font-size: 0.11rem;
          color: #ffffff;
          line-height: 0.15rem;
          text-align: left;
        }
        .img {
          width: 0.13rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cn {
          margin-top: 0.1rem;
          font-size: 0.11rem;
          color: #ffffff;
          line-height: 0.15rem;
          text-align: left;
        }
      }
      .right {
        position: relative;
        .r_img {
          width: 3rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .r_text {
          position: absolute;
          top: 0.25rem;
          left: 0.2rem;
          width: 1.4rem;
          font-size: 0.05rem;
          color: #ffffff;
          text-align: left;
          line-height: 0.075rem;
        }
      }
    }
    .aboutTeam {
      display: flex;
      flex-direction: row;
      width: 4.5rem;
      margin: 0 auto;
      justify-content: center;
      margin-top: 0.4rem;
      margin-bottom: 0.2rem;
      .left {
        display: flex;
        flex-direction: column;
        .text {
          font-size: 0.11rem;
          color: #ffffff;
          line-height: 0.15rem;
          text-align: left;
        }
        .img {
          width: 0.13rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cn {
          margin-top: 0.1rem;
          font-size: 0.11rem;
          color: #ffffff;
          line-height: 0.15rem;
          text-align: left;
        }
      }
      .right {
        position: relative;
        .r_img {
          width: 3.25rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .r_text {
          position: absolute;
          top: 0.25rem;
          left: 0.2rem;
          width: 1.4rem;
          font-size: 0.05rem;
          color: #ffffff;
          text-align: left;
          line-height: 0.075rem;
        }
      }
    }
  }
}
</style>