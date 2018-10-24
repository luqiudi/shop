<template>
    <div>
        <h1 @click="show">这是h1组件</h1>
    </div>
</template>
<script>
    export default{
        data(){
            return {};
        },
        methods:{
            show(){
                console.log("调用了show方法！");
            }
        }
    }
</script>
<style lang="scss" scoped>
    div{
        h1{
            background-color: #222;
        }
    }
</style>
