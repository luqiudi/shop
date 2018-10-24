var path = require('path');
//在内存中，根据指定模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
//如果要配置插件，需要在导出的对象中，挂载一个plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack');
console.log('123123'+__dirname);
module.exports = {
    //入口
    entry:
        path.join(__dirname,'./src/main.js'),
    //出口
    output: {
        path: path.join(__dirname,'./dist'),
        //指定输出文件名
        filename: 'bundle.js'
    },
    // 这是配置devServer的第二种方式
    devServer: {
        open:true,
        port:3000,
        contentBase:'src',
        //启用热更新方式2
        hot:true
    },
    plugins: [
        //启用热更新方式2
        new webpack.HotModuleReplacementPlugin(),
        //    所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()

    ],
    module: {
        //配置第三方loader
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']}
            ,{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
            ,{test:/\.less$/,use:['style-loader','css-loader','less-loader']}
            ,{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7632&name=[hash]-[name].[ext]'}
            ,{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}
            ,{test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'}
            ,{test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve: {
        alias:{
            "vue$": "vue/dist/vue.js"
        }
    }
}
