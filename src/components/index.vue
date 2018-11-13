<template>
  <div class="contianer">
      <my-header></my-header>
      <my-nav v-bind:parentMenuItmes="menuItems||''"></my-nav>
      <article>
        <v-nihao></v-nihao>
      </article>
      <!-- <footer> -->
        <my-footer></my-footer>
      <!-- </footer> -->
  </div>
</template>

<script>
import nihao from "./baseComponent/movieLabel.vue";
import myFooter from "./baseComponent/my-footer.vue";
import myNav from "./baseComponent/my-nav.vue";
import myHeader from "./baseComponent/my-header.vue";
export default {
  name: "contianer",
  components: {
    "v-nihao": nihao,
    "my-footer": myFooter,
    "my-nav": myNav,
    "my-header": myHeader
  },
  data() {
    return{
       menuItems: [
            {id:1,content:'电影列表'},
            {id:2,content:'分类查看'},
            {id:3,content:'最近观看'},
            {id:4,content:'系统管理'}
            ]
    }
  },
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

  article {
    width: $pageWidth;
    min-height: 768px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 1px 1px 2px 1px rgb(176, 203, 221);
    padding: 0 auto;
    margin: 0px 10px 10px 10px;
  }
}
</style>