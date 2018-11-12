<template>
    <el-container class="container">
      <el-header class="header">
        <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{path:'./index.html'}">活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
      </el-header>
      <el-main class="main">我是</el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.container {
  .header {
  }
  main {
    background-color: #fff;
  }
}
</style>