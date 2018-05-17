const path = require("path")
const webpack = require('webpack')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: isDev ? 'development' : 'production',
	entry: {
        'index': './src/index.js',
        'common': './src/resource/common/js/common.js'
    },
	output: {
		filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist/'
	},
    module: {
        rules: require("./config/webpack.rules.js")
    },
	resolve : {
        alias : {
            node_modules: __dirname + '/node_modules',
            container: __dirname + '/src/container',
            components: __dirname + '/src/components',
            util: __dirname + '/src/util',
            resource: __dirname + '/src/resource'
        },
        extensions: ['.js','.jsx','.styl']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'common',
                    priority: 10
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "React App",
            chunks: ['index','common'],
			minify: {
				collapseWhitespace: true
            }
			
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:8].css'
        }),
		new webpack.HotModuleReplacementPlugin()

    ],
    devServer: {
        hot:true,
        compress: true,
        port: 8080,
        historyApiFallback: {
            index: "/dist/index.html"
        },
        proxy: {
            '/api': {
                target: 'localhost:3000',
                changeOrigin: true
            }
        }
    }
}