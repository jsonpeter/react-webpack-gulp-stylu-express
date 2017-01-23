/**
 * Created by mac on 16/7/14.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    //ҳ������ļ�����
    entry: {
        index: './src/js/Routes.jsx'
    },
    //����ļ��������
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },
    module: {
        //����������
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
    //���������������
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //�����
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};