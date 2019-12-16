/*
 * @Author: 夏民喜
 * @Date: 2019-11-13 20:38:41
 * @LastEditors: 夏民喜
 * @LastEditTime: 2019-12-03 12:01:44
 * @Description: 请输入文件说明
 */
const path = require("path")
// 指定模板 生成index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除上一次打包的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    // 打包入口
    entry: {
        app: "./src/index.js"
    },
    // 打包输出
    output: {
        filename: "js/[name].[chunkhash:5].js",
        path: path.resolve(__dirname, "./dist")
    },
    // 开发服务
    devServer: {
        // host: "http://localhost:8010",
        // 端口号
        port: 8010,
        // 是否显示进度条
        progress: true,
        // 监听的目录
        contentBase: path.resolve(__dirname, 'dist'),
        // 是否自动打开浏览器
        open: true,
        // 是否启用服务器压缩
        compress: true,
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin({  cleanOnceBeforeBuildPatterns: ['**/*', '!color.less*'],}),
        // 创建模板
        new HtmlWebpackPlugin({
            // template: "./src/index.html",
            template: path.resolve(__dirname, 'src', 'index.html'),//模板
            filename: "index.html",
            // inject: true, //允许插件修改哪些内容，包括head与body
            minify: {
                // 是否删除双引号
                removeAttributeQuotes: true,
                // 是否折叠空行 --让代码成为一行
                collapseWhitespace: false
            },
            // 是否添加哈希值
            hash: true,
            chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none'
        }),
       
    ],
    // 模块----loader
    module: {
        rules: [
            {
                test: /\.css|.less|.sass|.scss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            // // antd 主题修改
                            // modifyVars: {
                            //     'primary-color': '#f5222d',
                            //     'link-color': '#1DA57A',
                            //     'border-radius-base': '2px',
                            // },
                        }
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // es6、7语法支持
                        presets: ["env", "es2015", "react", "stage-0", "stage-3"],
                        // import 语法支持、antd按需加载
                        plugins: [
                            [
                                "import",
                                {

                                    libraryName: "antd",
                                    libraryDirectory: "es",
                                    // `style: true` 会加载 less 文件
                                    style: true
                                }
                            ],
                            // 支持装饰器语法
                            [
                                require.resolve('babel-plugin-transform-decorators-legacy'),
                                {
                                    legacy: true,
                                }
                            ]
                        ]
                    }
                },
            },
        ]
    }
}