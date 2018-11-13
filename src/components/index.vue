<template>
  <div class="contianer">
    <header>
      123
    </header>
      <nav>
        <ul>
          <!-- <li><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          <li><a>4</a></li>
          <li><a>5</a></li> -->
          <li>电影列表</li>
          <li>分类查看</li>
          <li>最近观看</li>
          <li>系统管理</li>
        </ul>
      </nav>
      <article>
        <nihao>123</nihao>
      </article>
      <footer>
        <div class="footer_container">
          <p>copyright@luqiudi</p>
          <p>电影文件管理系统</p>
        </div>
      </footer>
  </div>
</template>

<script>
import nihao from './components/movieLabel';
export default {
  name: "contianer",
  components: {
    'nihao':nihao
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$pageWidth: 99%;
div.contianer {
  * {
    padding: 0;
    margin: 0;
  }
  display: block;
  header {
    width: 90px;
    height: 90px;
    border: 1px solid #000;
    display: block;
  }
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
  article {
    width: $pageWidth;
    min-height: 768px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 1px 1px 2px 1px rgb(176, 203, 221);
    padding: 0 auto;
    margin: 0px 10px 10px 10px;
  }
  footer {
    width: $pageWidth;
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
}
</style>