<template>
  <div class="item_container">
    <div class="header">
      <span class="fa fa-close close_btn"></span>
      <span class="fa fa-star collect_btn"></span>
    </div>
    <div class="content">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "item_container",
  data() {
    return {
      id: 1,
      title: "123"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/mixin";
div.item_container {
  display: inline-block;
  margin: 5px;
  margin-inline-start: 10px;
  margin-block-start: 10px;
  border-radius: 5px;
  @include setSquareWidthHeight(120px);
  // width: 90px;
  // height: 90px;
  background-color: rgb(112, 186, 255);
  box-shadow: 1px 1px 5px 1px rgb(176, 203, 221);
  div.header {
    display: block;
    height: 20%;
    span.close_btn {
      color: #fff;
      float: right;
      margin: 5px;
      text-shadow: 1px 1px 1px 5px #000;
      transition: color 0.2s;
      position: relative;
      transform: right, bottom 1s;
      @include animate_click;
      // &:hover {
      //   color: rgb(192, 192, 192);
      // }
    }
    span.collect_btn {
      float: left;
      margin: 5px;
      color: #fff;
      transition: color 0.2s;
      position: relative;
      &:active {
        color: rgba(255, 251, 0, 0.849);
        right: -0.5px;
        bottom: -0.5px;
      }
    }
  }
  div.content {
    display: block;
    height: 80%;
    width: 100%;
    // margin:0 5px;
    border-radius: 0px 0px 5px 5px;
    background-color: rgba(226, 251, 255, 0.623);
  }
}
</style>