/**
 * Created by mac on 16/7/14.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/js/Routes.jsx'
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};