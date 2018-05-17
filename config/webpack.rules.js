const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
        }
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'resource/images/[name].[ext]',
                publicPath: '../'
              }
            }
        ]
    },
    {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'resource/fonts/[name].[ext]',
                publicPath: '../'
              }
            }
        ]
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader","postcss-loader"]

        })
    },
    {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader","stylus-loader","postcss-loader"]

        })
    }
]