<template>
  <div class="my-footer">
      <div class="footer_container">
          <p>copyright@luqiudi</p>
          <p>电影文件管理系统</p>
        </div>
  </div>
</template>

<script>
export default {
  name: "my-footer",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.my-footer {
//   width: $pageWidth;
  padding: 0 auto;
  margin: 0px 10px 10px 10px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 1px 1px 2px 1px rgb(176, 203, 221);
  height: 90px;
  background-color: rgb(104, 212, 255);
  .footer_container {
    display: block;
    font: 1em sans-serif;
    color: white;
    padding: 20px;
    text-align: center;
    line-height: 1.5em;
  }
}
</style>