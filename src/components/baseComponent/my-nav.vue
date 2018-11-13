<template>
  <div class="my-nav">
      <nav>
        <ul>
          <!-- <li><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          <li><a>4</a></li>
          <li><a>5</a></li> -->
          <!-- <li>电影列表</li>
          <li>分类查看</li>
          <li>最近观看</li>
          <li>系统管理</li> -->
          <li v-for="menuItem in parentMenuItmes" :key="menuItem.id">
              {{ menuItem.content }}
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'my-nav',
  props:['parentMenuItmes'],
  data() { 
    return {

    }
  }
 }
</script>

<style lang="scss" scoped>
  .my-nav{
       nav {
    // border: 1px solid rgb(189, 184, 184);
    border-radius: 3px 3px 3px 3px;
    box-shadow: 1px 1px 2px 1px rgb(176, 203, 221);
    padding: 0px 0px 0px 0%;
    width: 75%;
    margin: 10px 10px 10px 10px;
    ul {
      display: flex;
      list-style: none;
      height: 45px;
      padding: 0% 0%;
      // margin-left: 20px;
      li {
        margin: 0 10px 0 10px;
        flex: 1;
        height: 100%;
        border-radius: 3px 3px 3px 3px;
        background-color: rgb(101, 193, 255);
        color: white;
        display: block;
        text-align: center;
        line-height: 2.5em;
        transition: background-color 0.6s;
        &:hover {
          background-color: rgb(173, 163, 255);
        }
        &:active {
          position: relative;
          right: 1px;
          bottom: 1px;
        }
      }
    }
  }
  }
</style>