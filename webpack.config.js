const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //选择的模式告诉webpack使用其内置的优化
    // "production" | "development" | "none"
    mode: "development",

    //入口文件
    entry: "./src/app.js",

    //webpakc如何输出的目标路径
    output: {
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        path: path.resolve(__dirname, "dist"),
        //输出文件的名字
        filename: 'bundle.js',
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        //模块规则(配置 loader、解析器等选项)
        rules: [
            {
                //匹配规则
                test: /\.js$/,
                use: {
                    //需要的加载器
                    loader: "babel-loader"
                },
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ]
            }
        ]
    },

}