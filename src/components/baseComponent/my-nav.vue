<template>
  <div class="my-nav">
      <nav>
        <ul>
          <router-link tag="li" v-for="menuItem in parentMenuItmes" :key="menuItem.id" 
          :to="menuItem.url"  >
            {{menuItem.content}}
          </router-link>
          <!-- <li v-for="menuItem in parentMenuItmes" :key="menuItem.id">
              {{ menuItem.content }}
          </li> -->
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: "my-nav",
  props: ["parentMenuItmes"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.my-nav {
  width: 80%;
  display: inline-block;
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