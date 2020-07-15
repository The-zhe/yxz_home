<template>
  <div class="product">
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
        <li ref="product">
          <div class="pad">产品</div>
          <div class="pad">Product</div>
          <span></span>
        </li>
        <li ref="desk" @click="toService()">
          <div class="pad">服务平台</div>
          <div class="pad">Service platform</div>
        </li>
        <li ref="us" @click="toAbout()">
          <div class="pad">关于我们</div>
          <div class="pad">About us</div>
        </li>
        <li ref="business" @click="toBusiness()">
          <div class="pad">商务合作</div>
          <div class="pad">Business</div>
        </li>
      </ul>
    </header>
    <main>
      <div class="supply">
        <div class="img">
          <img :src="supplyImg" alt />
        </div>
        <div class="contain">
          <div class="title">供应链平台</div>
          <div class="eng">SUPPLY CHAIN PLATFORM</div>
          <div
            class="detail"
          >云行者平台与优质供应商建立长期稳定深入的合作关系，通过多渠道整合汽车零配件资源，实现线上和线下资源互补互通。在此基础上，打造疏通全国的物流配送体系，帮助零配件商及时获取市场需求，第一时间配送至各个营业门店。</div>
        </div>
      </div>
      <div class="store">
        <div class="img">
          <img :src="storeImg" alt />
        </div>
        <div class="contain">
          <div class="title">门店管理系统</div>
          <div class="eng">STORE MANAGEMENT SYSTEM</div>
          <div
            class="detail"
          >云行者为所有入驻平台的门店企业提供高效便捷的营销管理系统，门店负责人可以通过各端口及时获取信息并管理门店，通过高时效性的专业数据显示门店存货数量等；一键智能发布优惠活动，帮助企业实现线上推广营销。</div>
        </div>
      </div>
      <div class="plant">
        <div class="img">
          <img :src="plantImg" alt />
        </div>
        <div class="contain">
          <div class="title">企业进销存管理系统</div>
          <div class="eng">ENTERPRISE RESOURCE PLANNING</div>
          <div
            class="detail"
          >云行者平台严格管理所有平台零配件信息，规范综合企业操作流程，所有经综合厂销售、储存、回收的零配件附带唯一激光编码，防止以次充好，偷梁换柱的情况，真正做到汽车零配件“全周期溯源”。</div>
        </div>
      </div>
      <div class="business">
        <div class="img">
          <img :src="busiImg" alt />
        </div>
        <div class="contain">
          <div class="title">保险公司业务端</div>
          <div class="eng">BUSINESS END OF INSURANCE COMPANY</div>
          <div
            class="detail"
          >云行者与多家汽车保险机构合作，提供先进技术，大大减少车险查勘、复勘人员成本，提高定损业务工作效率；通过整合供应链，规范平台入驻门店大力推动保险公司“反欺诈”活动，有效降低保险公司综合赔付率。</div>
        </div>
      </div>
      <div class="bigdata">
        <div class="img">
          <img :src="dataImg" alt />
        </div>
        <div class="contain">
          <div class="title">大数据聚合平台</div>
          <div class="eng">BIG DATA AGGREGATION PLATFORM</div>
          <div
            class="detail"
          >云行者基于平台大数据分析，为相关政府部门提供实时准确的车辆信息和门店信息，帮助政府机构净化市场环境，规范行业行为；基于AI风控系统，为多家保险公司提供风险预警，有效遏制保险内部人员的道德风险。</div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
export default {
  name: "product",
  components: { Footer },
  data() {
    return {
      route: "",
      supplyImg: require("../assets/u103.png"),
      storeImg: require("../assets/u107.png"),
      plantImg: require("../assets/u104.png"),
      busiImg: require("../assets/u105.png"),
      dataImg: require("../assets/u106.png")
    };
  },
  methods: {
    getRoute() {
      this.route = this.$route.name;
      console.log(this.route);
      if (this.route == "product") {
        this.$refs.product.style.color = "#0079fe";
      }
    },
    toHome() {
      this.$router.push({ name: "home" });
    },
    toService() {
      this.$router.push({ name: "service" });
    },
    toAbout() {
      this.$router.push({ name: "about" });
    },
    toBusiness() {
      this.$router.push({ name: "business" });
    }
  },
  mounted() {
    this.getRoute();
  }
};
</script>
<style lang="less" scoped>
.product {
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
    display: flex;
    flex-direction: column;
    padding-top: 0.3rem;
    .supply {
      position: relative;
      display: flex;
      justify-content: center;
      .img {
        width: 4rem;
        img {
          display: inline;
          width: 4rem;
          // height: 100%;
        }
      }
      .contain {
        display: flex;
        flex-direction: column;
        width: 1.3rem;
        height: 1rem;
        position: absolute;
        top: 0.29rem;
        left: 47%;
        // background-color: yellowgreen;
        .title {
          text-align: left;
        }
        .eng {
          margin-top: 0.03rem;
          text-align: left;
          font-size: 0.06rem;
        }
        .detail {
          margin-top: 0.5rem;
          align-items: flex-end;
          text-align: left;
          font-size: 0.04rem;
          font-size: 0.046rem;
        }
      }
    }
    .store {
      position: relative;
      display: flex;
      justify-content: center;
      .img {
        width: 4rem;
        img {
          display: inline;
          width: 3.85rem;
          // height: 100%;
        }
      }
      .contain {
        display: flex;
        flex-direction: column;
        width: 1.3rem;
        height: 1rem;
        position: absolute;
        top: 0.5rem;
        left: 35.5%;
        color: white;
        // background-color: yellowgreen;
        .title {
          text-align: left;
        }
        .eng {
          margin-top: 0.03rem;
          text-align: left;
          font-size: 0.06rem;
        }
        .detail {
          margin-top: 0.5rem;
          align-items: flex-end;
          text-align: left;
          font-size: 0.04rem;
          font-size: 0.046rem;
        }
      }
    }
    .plant {
      position: relative;
      display: flex;
      justify-content: center;
      .img {
        width: 4rem;
        img {
          display: inline;
          width: 3.85rem;
          // height: 100%;
        }
      }
      .contain {
        display: flex;
        flex-direction: column;
        width: 1.3rem;
        height: 1rem;
        position: absolute;
        top: 0.45rem;
        left: 47%;
        // background-color: yellowgreen;
        .title {
          text-align: left;
        }
        .eng {
          margin-top: 0.03rem;
          text-align: left;
          font-size: 0.06rem;
        }
        .detail {
          margin-top: 0.5rem;
          align-items: flex-end;
          text-align: left;
          font-size: 0.04rem;
          font-size: 0.046rem;
        }
      }
    }
    .business {
      position: relative;
      display: flex;
      justify-content: center;
      margin-left: 0.1rem;
      .img {
        width: 4rem;
        img {
          display: inline;
          width: 3.85rem;
          // height: 100%;
        }
      }
      .contain {
        display: flex;
        flex-direction: column;
        width: 1.3rem;
        height: 1rem;
        position: absolute;
        top: 0.5rem;
        left: 34.5%;
        color: white;
        // background-color: yellowgreen;
        .title {
          text-align: left;
        }
        .eng {
          margin-top: 0.03rem;
          text-align: left;
          font-size: 0.06rem;
        }
        .detail {
          margin-top: 0.5rem;
          align-items: flex-end;
          text-align: left;
          font-size: 0.04rem;
          font-size: 0.046rem;
        }
      }
    }
    .bigdata {
      position: relative;
      display: flex;
      justify-content: center;
      .img {
        width: 4rem;
        img {
          display: inline;
          width: 3.85rem;
          // height: 100%;
        }
      }
      .contain {
        display: flex;
        flex-direction: column;
        width: 1.3rem;
        height: 1rem;
        position: absolute;
        top: 0.5rem;
        left: 46.5%;
        // background-color: yellowgreen;
        .title {
          text-align: left;
        }
        .eng {
          margin-top: 0.03rem;
          text-align: left;
          font-size: 0.06rem;
        }
        .detail {
          margin-top: 0.5rem;
          align-items: flex-end;
          text-align: left;
          font-size: 0.04rem;
          font-size: 0.046rem;
        }
      }
    }
  }
}
</style>