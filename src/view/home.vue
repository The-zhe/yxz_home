<template>
  <div class="home">
    <header>
      <div class="img">
        <img src="../assets/u5.png" alt />
      </div>
      <div class="text">YUNXINGZHE</div>
      <ul>
        <li ref="home">
          <div class="pad">首页</div>
          <div class="pad">Home</div>
          <span></span>
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
        <li ref="business" @click="toBusiness()">
          <div class="pad">商务合作</div>
          <div class="pad">Business</div>
        </li>
      </ul>
    </header>
    <main>
      <img class="u29" src="../assets/u29.png" alt />
      <img class="u30" src="../assets/u30.png" alt />
      <div class="carImg">
        <img src="../assets/u2_state0.png" alt />
      </div>
      <div class="space"></div>
      <div class="philosophy">
        <div class="top">
          <div class="top_text">
            <div style="display:flex;margin-top:.41rem">ABOUT</div>
            <div>PHILOSOPHY</div>
          </div>
          <div class="professional">
            <div class="title">
              <img src="../assets/u47.png" alt />
              <div class="name">专业</div>
            </div>
            <div class="detail">{{this.proText}}</div>
          </div>
          <div class="innovation">
            <div class="title">
              <img src="../assets/u48.png" alt />
              <div class="name">创新</div>
            </div>
            <div class="detail">{{this.innText}}</div>
          </div>
        </div>
        <div class="line">
          <img class="u36" src="../assets/u36.png" alt />
          <img class="u45" src="../assets/u45.png" alt />
          <img class="u45_1" src="../assets/u45.png" alt />
        </div>
        <div class="top">
          <div class="end_text">
            <div style="display:flex">理念</div>
          </div>
          <div class="professional">
            <div class="title">
              <img src="../assets/u47.png" alt />
              <div class="name">服务</div>
            </div>
            <div class="detail">{{this.serText}}</div>
          </div>
          <div class="innovation">
            <div class="title">
              <img src="../assets/u48.png" alt />
              <div class="name">合作</div>
            </div>
            <div class="detail">{{this.cooText}}</div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  name: "home",
  components: { Header, Footer },
  data() {
    return {
      route: "",
      proText:
        "我们的团队是一支年轻、专业、富有理想的团队。团队成员主要来自互联网和保险科技行业的知名企业，拥有丰富的研发经验和扎实的业务能力。此外，公司还将依托宁波国家保险创新综合试验区丰富的产学研资源，与高校科研机构联合开展技术攻关和功能优化。",
      innText:
        "基于“智慧城市”理念，始终关注行业最新前沿技术，持续拓宽保险科技应用场景，未来将结合5G+AI实现智慧维修、智慧理赔、智慧养护等新模式。",
      serText:
        "以保障消费者利益为第一服务核心的平台，致力于让用户“配件全知道，养车不吃亏”。",
      cooText:
        "深入布局、放眼未来，不断加深与汽车相关产业的密切合作，共同参与平台建设，优化大数据和AI技术整合产品和服务的应用水平，提高平台在连接用户、客户过程中的效率，实现与汽车相关产业之间的深度融合与高效赋能，不断完善服务汽车全产业链的能力。"
    };
  },
  methods: {
    getRoute() {
      this.route = this.$route.name;
      console.log(this.route);
      if (this.route == "home") {
        this.$refs.home.style.color = "#0079fe";
      }
    },
    toProduct(){
      this.$router.push({name:'product'})
    },
    toService(){
      this.$router.push({name:'service'})
    },
    toAbout(){
      this.$router.push({name:'about'})
    },
    toBusiness(){
      this.$router.push({name:'business'})
    }
  },
  mounted() {
    this.getRoute();
  }
};
</script>
<style lang="less" scoped>
.home {
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
        font-size: 0.04rem;
        margin-left: 0.2rem;
        cursor: pointer;
        .pad{
          padding: 0rem 0.03rem;
        }
        span{
          width: 100%;
          height:0.005rem;
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
    align-items: center;
    margin-bottom: 0.2rem;
    padding-top: 0.02rem;
    .u29 {
      display: inline;
      width: 6rem;
      height: 0.86rem;
    }
    .u30 {
      display: inline;
      width: 3.5rem;
      height: 0.8rem;
    }
    .carImg {
      width: 3.84rem;
      height: 2.3rem;
      border-width: 0px;
      overflow: hidden;
      background-image: url(../assets/transparent.gif);
      position: absolute;
      top: 1.3rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .space {
      height: 2rem;
    }
    .philosophy {
      display: flex;
      flex-direction: column;
      color: white;
      font-size: 0.1rem;
      .top {
        display: flex;
        flex-direction: row;
        .top_text {
          display: flex;
          flex-direction: column;
          margin-right: 0.2rem;
        }
        .end_text {
          display: flex;
          flex-direction: column;
          margin-right: 0.65rem;
        }
        .professional {
          display: flex;
          flex-direction: column;
          .title {
            display: flex;
            flex-direction: row;
            img {
              width: 0.16rem;
              height: 0.15rem;
              margin-right: 0.1rem;
            }
            .name {
              font-size: 0.1rem;
            }
          }
          .detail {
            width: 1.5rem;
            font-size: 0.06rem;
            text-align: left;
            margin-top: 0.1rem;
          }
        }
        .innovation {
          display: flex;
          flex-direction: column;
          margin-left: 0.2rem;
          .title {
            display: flex;
            flex-direction: row;
            img {
              width: 0.12rem;
              height: 0.15rem;
              margin-right: 0.1rem;
            }
            .name {
              font-size: 0.1rem;
            }
          }
          .detail {
            width: 1.5rem;
            font-size: 0.06rem;
            text-align: left;
            margin-top: 0.1rem;
          }
        }
      }
      .line {
        display: flex;
        flex-direction: row;
        margin: 0.2rem 0rem;
        .u36 {
          width: 0.18rem;
          height: 0.02rem;
        }
        .u45 {
          width: 1rem;
          height: 0.01rem;
          margin-left: 0.67rem;
        }
        .u45_1 {
          width: 1rem;
          height: 0.01rem;
          margin-left: 0.69rem;
        }
      }
    }
  }
}
</style>