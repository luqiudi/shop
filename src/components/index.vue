<template>
  <div class="contianer">
      <my-header></my-header>
      <my-bgc></my-bgc>
      <my-nav v-bind:parentMenuItmes="menuItems||''"></my-nav>
      <router-view>
        
      </router-view>
      <article>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
        <my-movie-label></my-movie-label>
      </article>
        <my-footer></my-footer>
  </div>
</template>

<script>
import movieLabel from "./baseComponent/movieLabel.vue";
import myFooter from "./baseComponent/my-footer.vue";
import myNav from "./baseComponent/my-nav.vue";
import myHeader from "./baseComponent/my-header.vue";
import myBgc from "./baseComponent/my-bgc.vue";
export default {
  name: "contianer",
  components: {
    "my-movie-label": movieLabel,
    "my-footer": myFooter,
    "my-nav": myNav,
    "my-header": myHeader,
    "my-bgc": myBgc
  },
  data() {
    return {
      menuItems: [
        { id: 1, content: "电影列表", url: "/home" },
        { id: 2, content: "分类查看", url: "/bgc" },
        { id: 3, content: "最近观看", url: "/home" },
        { id: 4, content: "系统管理", url: "/home" }
      ],
      movieItems: [
        { id: 1, name: "mv1" },
        { id: 2, name: "mv2" },
        { id: 3, name: "mv3" },
        { id: 4, name: "mv4" },
        { id: 5, name: "mv5" }
      ]
    };
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
  myHeader {
    float: left;
  }
  my-nav {
    float: right;
  }
  article {
    $light_blue: rgba(142, 201, 241, 0.85);
    $dark_blue: rgba(84, 163, 216, 0.95);
    width: $pageWidth;
    min-height: 768px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 1px 1px 2px 1px rgb(176, 203, 221);
    padding: 0 auto;
    margin: 0px 10px 10px 10px;
    // background:#FFF;
    background: linear-gradient(
      45deg,
      $light_blue 25%,
      $dark_blue 0,
      $dark_blue 50%,
      $light_blue 0%,
      $light_blue 75%,
      $dark_blue 0%
    );
    /*#2980B9 0中0表示此之前最大数，即#2980B9 25%*/

    /*此处设置0，为了减少重复性，方便维护*/
    background-size: 120px 120px;
  }
}
</style>