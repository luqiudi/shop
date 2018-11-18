<template>
  <div class="my-gridient">

  </div>
</template>

<script>
export default {
  name: "my-gridient",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.my-gridient {
  width: 300px;
  height: 300px;
  background: linear-gradient(
    45deg,
    // 阴影部分
    rgba(74, 123, 255, 1) 23%,
    // 深色线条
    rgba(74, 123, 255, 0.75) 25%,
    // 浅色线条
    rgba(82, 243, 255, 1) 0%,

    rgba(82, 243, 255, 1) 47%,
    rgba(74, 123, 255, 0.75) 50%,
    rgba(74, 123, 255, 1) 0%,

    rgba(74, 123, 255, 1) 73%,
    rgba(74, 123, 255, 0.75) 75%,
    rgba(82, 243, 255, 1) 0%,

    rgba(82, 243, 255, 1) 97%,
    rgba(74, 123, 255, 0.75) 100%
  );
  background-size: 90px 90px;
}
</style>