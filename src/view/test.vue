<template>
  <div class="app">
    <div class="test">
      <div class="main"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.app{
    height: 100%;
}
.test {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
    background-color: aquamarine;
  }
  .footer {
    height: 0.9rem;
    background-color: chocolate;
  }
}
</style>