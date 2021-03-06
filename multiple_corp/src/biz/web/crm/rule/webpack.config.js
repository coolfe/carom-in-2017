const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../../../../../config');
const baseConfig = require('../../../../../webpack.base.config');

const { __DEV__, __PROD__, __TEST__ } = config.globals;
const APP_ENTRY = path.resolve(__dirname, './client/index.js');

baseConfig.entry.bizRule = __DEV__
    ? [`webpack-dev-server/client?http://${config.host}:${config.bizRule.port}/`, 'webpack/hot/only-dev-server', 'babel-polyfill', APP_ENTRY]
    : ['babel-polyfill', APP_ENTRY];


baseConfig.resolve.root = [
    // path.resolve(__dirname, '../comm/services'),
    path.resolve(__dirname, './client'),
];
// baseConfig.resolve.modulesDirectories.push('./src');

if(__PROD__) {
    baseConfig.output.publicPath = 'https://1.staticec.com/biz/web/crm/rule/';
    baseConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'index.prod.html'),
            hash: false,
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'include.html'),
            filename: "stage.html",
            title: 'ant-design-redux',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            title: 'ant-design-redux',
            inject: false,
            template: path.resolve(__dirname, 'client', 'include.html'),
            filename: "limit.html"
        }),
        new HtmlWebpackPlugin({
            title: 'ant-design-redux',
            inject: false,
            template: path.resolve(__dirname, 'client', 'include.html'),
            filename: "hit.html"
        }),
        new HtmlWebpackPlugin({
            title: 'ant-design-redux',
            inject: false,
            template: path.resolve(__dirname, 'client', 'include.html'),
            filename: "lose.html"
        }),
        new HtmlWebpackPlugin({
            title: 'ant-design-redux',
            inject: false,
            template: path.resolve(__dirname, 'client', 'include.html'),
            filename: "protect.html"
        })
    );
} else {
    baseConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'index.html'),
            hash: false,
            filename: 'index.html',
            inject: 'body',
        })
    );
    baseConfig.devtool = '#source-map';
}

if (!__TEST__) {
    baseConfig.output.path = path.join(__dirname, '..', '..', 'dist', 'admin', 'admin');
}

module.exports = baseConfig;
