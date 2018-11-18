import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import 'font-awesome/css/font-awesome.css';
// 页面组件部分
import App from './components/index.vue';
import Bgc from './components/baseComponent/my-bgc.vue';
// 加载路由
Vue.use(VueRouter);
// 加载前端ui
Vue.use(ElementUI);
var routes = [
    {path:'/home',component:App},
    {path:'/bgc',component:Bgc},
];
var router = new VueRouter({
    routes
})
var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello!dizi',
    },
    components: {
        App,
        Bgc
    },
    router:router,
    render: c => c(App)
});



