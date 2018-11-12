<template>
    <el-container>
        <el-header>
            <div class='logo'></div>
            <div class="header-container">
                Header
            </div>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  margin-bottom: 40px;

  .el-header {
    opacity: 0.1;
    &:hover {
      opacity: 1;
    }
    position: fixed;
    top: 0;
    width: 99.2%;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    .logo {
        width: 100px;
        height: 100px;
      background: url(https://www.baidu.com/img/baidu_jgylogo3.gif) no-repeat scroll;
    }
    .container{
        display: inline-block;
    }
  }
   .el-main {
       margin-top: 60px;
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    height: 900px;
    line-height: 160px;
  }
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

 
}
</style>