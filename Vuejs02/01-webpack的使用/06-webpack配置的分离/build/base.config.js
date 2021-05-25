// 动态获取path
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时是从右向左读的
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成Base64字符串的形式
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
                            limit: 26000,
                            name: './img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude：排除
                // include：包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    resolve: {
        // alias: 别名
        alias: {
            // 指定vue使用的版本
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.css', '.vue']
    },
    plugins: [
        // 版权
        new webpack.BannerPlugin('最终版权归aaa所有'),
        // 将html打包入dist包
        new HtmlWebpackPlugins({
            template: 'index.html'
        }),
        // 压缩js文件
        // new UglifyjsWebpackPlugin()
    ],
    /*devServer: {
        contentBase: './dist',
        inline: true
    }*/
}