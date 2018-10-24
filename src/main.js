// import $ from 'jquery';
// console.log(13);
// $(function () {
//     $('li:odd').css('backgroundColor','yellow');
//     $('li:even').css('backgroundColor','orange');
// });
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './components/App.vue';
Vue.use(ElementUI);
Vue.component()
var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello!dizi'
    },
    components: {
        App
    },
    render: c => c(App)
});
console.log('vue:');
console.log(vm);
console.log(ElementUI);



