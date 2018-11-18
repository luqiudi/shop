<template>
  <div class="myHeader">
    <span class="fa fa-play-circle fa-5x site_logo"></span>
  </div>
</template>

<script>
// import 'font-awesome/css/font-awesome.css'
export default {
  name: "myHeader",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
div.myHeader {
  display: inline-block;
  // background-color: rgb(104, 255, 235);
  background: linear-gradient(
    180deg,
    rgb(0, 140, 255) 25%,
    rgba(49, 49, 255, 0.527) 0%,
    rgb(255, 255, 137) 50%,
    rgb(174, 255, 120) 0%,
    rgb(29, 255, 198) 0%,
    rgb(255, 173, 22) 20%,
    rgba(255, 43, 43, 0.884) 100%
    );
  background-size:90px 90px;
  margin: 10px 10px 10px 10px;
  border-radius: 5px;
  position: relative;
  span.site_logo {
    color: #fff;
    &::before{
      display: block;
      padding:0 10%;
    }
  }
  
}
</style>