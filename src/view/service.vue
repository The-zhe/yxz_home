<template>
  <div class="service">
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
        <li ref="desk">
          <div class="pad">服务平台</div>
          <div class="pad">Service platform</div>
          <span></span>
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
      <div class="contain">
        <div class="supply">
          <div class="img">
            <img src="../assets/u259.png" alt />
            <div class="title">
              <div class="icon"></div>
              <div class="name">供应链平台</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="list">
            <div class="kind">
              <div class="end">工厂端</div>
              <div class="endImg">[[]]</div>
            </div>
            <div class="kind">
              <div class="end">经销商端</div>
              <div class="endImg">[[]]</div>
            </div>
            <div class="kind">
              <div class="end">仓库端</div>
              <div class="endImg">[[]]</div>
            </div>
          </div>
        </div>
        <div class="store">
          <div class="img">
            <img src="../assets/u259.png" alt />
            <div class="title">
              <div class="icon"></div>
              <div class="name">门店管理系统</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="list">
            <div class="kind">
              <div class="end">营销平台</div>
              <div class="endImg">[[]]</div>
            </div>
            <div class="kind">
              <div class="end">门店管理平台</div>
              <div class="endImg">[[]]</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contain">
        <div class="inventory">
          <div class="img">
            <img src="../assets/u259.png" alt />
            <div class="title">
              <div class="icon"></div>
              <div class="name">企业进销存管理系统</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="list">
            <div class="kind">
              <div class="end">平台管理</div>
              <div class="endImg">[[]]</div>
            </div>
            <div class="kind">
              <div class="end">企业管理端</div>
              <div class="endImg">[[]]</div>
            </div>
          </div>
        </div>
        <div class="business">
          <div class="img">
            <img src="../assets/u259.png" alt />
            <div class="title">
              <div class="icon"></div>
              <div class="name">保险公司业务端</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="list">
            <div class="kind">
              <div class="end">理赔业务端</div>
              <div class="endImg">[[]]</div>
            </div>
            <div class="kind">
              <div class="end">营销管理端</div>
              <div class="endImg">[[]]</div>
            </div>
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
  name: "service",
  components: { Footer },
  data() {
    return {
      route: ""
    };
  },
  methods: {
    getRoute() {
      this.route = this.$route.name;
      if (this.route == "service") this.$refs.desk.style.color = "#0079fe";
    },
    toHome() {
      this.$router.push({ name: "home" });
    },
    toProduct() {
      this.$router.push({ name: "product" });
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
.service {
  display: flex;
  flex-direction: column;
  height: 100%;
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
    flex: 1;
    padding-top: 0.2rem;
    width: 100%;
    .contain {
      display: flex;
      width: 4.5rem;
      // height: 2.5rem;
      margin: 0.2rem auto;
      .supply {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.2rem;
        width: 2.8rem;
        height: 0.8rem;
        background: inherit;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        border-radius: 10px;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
        margin: 0rem 0.1rem;
        .img {
          display: flex;
          flex-direction: column;
          img {
            width: 0.5rem;
          }
          .title {
            display: flex;
            flex-direction: row;
            margin-top: 0.05rem;
            .icon {
              width: 0.03rem;
              height: 0.1rem;
              background: white;
              margin-right: 0.05rem;
            }
            .name {
              font-size: 0.08rem;
              color: white;
            }
          }
        }
        .line {
          width: 0.01rem;
          height: 0.8rem;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          border: none;
          border-radius: 2px;
        }
        .list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .kind {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .end {
              font-size: 0.07rem;
              font-weight: bold;
              color: white;
              text-align: center;
              line-height: 0.11rem;
            }
            .endImg {
              background: white;
              border-radius: 2px;
              margin-left: 0.1rem;
            }
          }
        }
      }
      .store {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.2rem;
        width: 2.8rem;
        height: 0.8rem;
        background: inherit;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        border-radius: 10px;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
        margin: 0rem 0.1rem;
        .img {
          display: flex;
          flex-direction: column;
          img {
            width: 0.5rem;
          }
          .title {
            display: flex;
            flex-direction: row;
            margin-top: 0.05rem;
            .icon {
              width: 0.03rem;
              height: 0.1rem;
              background: white;
              margin-right: 0.05rem;
            }
            .name {
              font-size: 0.08rem;
              color: white;
            }
          }
        }
        .line {
          width: 0.01rem;
          height: 0.8rem;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          border: none;
          border-radius: 2px;
        }
        .list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .kind {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .end {
              font-size: 0.07rem;
              font-weight: bold;
              color: white;
              text-align: center;
              line-height: 0.11rem;
            }
            .endImg {
              background: white;
              border-radius: 2px;
              margin-left: 0.1rem;
            }
          }
        }
      }
      .inventory {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.2rem;
        width: 2.8rem;
        height: 0.8rem;
        background: inherit;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        border-radius: 10px;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
        margin: 0rem 0.1rem;
        .img {
          display: flex;
          flex-direction: column;
          img {
            width: 0.5rem;
          }
          .title {
            display: flex;
            flex-direction: row;
            margin-top: 0.05rem;
            .icon {
              width: 0.03rem;
              height: 0.1rem;
              background: white;
              margin-right: 0.05rem;
            }
            .name {
              font-size: 0.08rem;
              color: white;
            }
          }
        }
        .line {
          width: 0.01rem;
          height: 0.8rem;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          border: none;
          border-radius: 2px;
        }
        .list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .kind {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .end {
              font-size: 0.07rem;
              font-weight: bold;
              color: white;
              text-align: center;
              line-height: 0.11rem;
            }
            .endImg {
              background: white;
              border-radius: 2px;
              margin-left: 0.1rem;
            }
          }
        }
      }
      .business {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.2rem;
        width: 2.8rem;
        height: 0.8rem;
        background: inherit;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        border-radius: 10px;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
        margin: 0rem 0.1rem;
        .img {
          display: flex;
          flex-direction: column;
          img {
            width: 0.5rem;
          }
          .title {
            display: flex;
            flex-direction: row;
            margin-top: 0.05rem;
            .icon {
              width: 0.03rem;
              height: 0.1rem;
              background: white;
              margin-right: 0.05rem;
            }
            .name {
              font-size: 0.08rem;
              color: white;
            }
          }
        }
        .line {
          width: 0.01rem;
          height: 0.8rem;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          border: none;
          border-radius: 2px;
        }
        .list {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .kind {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            .end {
              font-size: 0.07rem;
              font-weight: bold;
              color: white;
              text-align: center;
              line-height: 0.11rem;
            }
            .endImg {
              background: white;
              border-radius: 2px;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
  }
}
</style>