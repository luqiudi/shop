<template>
  <div class="container">
    <div class="ball">

    </div>
  </div>

</template>

<script>
  export default {
    name: "ball",
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    height: 100%;
    width: 100%;
    text-align: center;

    .ball {
      background-color: rgb(255, 0, 0);
      margin-left: auto;
      margin-right: auto;
      height: 100px;
      width: 100px;
      border-radius: 50px;
    }
  }
</style>