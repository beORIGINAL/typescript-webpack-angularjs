const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            app: path.resolve(__dirname, 'src')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: 'style-loader!sass-loader'
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                    use: 'url-loader?limit=100000'
                },
                {
                    test: /\.js$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/,
                    enforce: 'pre'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                },
                {
                    test: /\.tsx?$/,
                    loaders: ['babel-loader', 'awesome-typescript-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.json', '.ts', '.tsx']
        },
        plugins: [
            new ExtractTextWebpackPlugin('[name].css'),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.jquery': 'jquery'
            }),
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname),
                verbose: true
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                hash: true,
                chunks: ['app']
            }),
            new CopyWebpackPlugin([
                {from: 'assets/img', to: 'assets/img'},
                {from: 'assets/fonts', to: 'assets/fonts'}
            ]),
            new FaviconsWebpackPlugin({
                logo: path.resolve(__dirname, 'assets', 'img', 'navigation', 'ts.svg'),
                emitStats: false,
                persistentCache: true,
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }),
        ],
        devServer: {
            contentBase: path.resolve(__dirname),
            inline: true,
            port: 3000
        },
        devtool: "source-map"
    };
};

// Todo: add minification for js output file
// Todo: add minification for css output file
// Todo: add minification for html output file
// Todo: add hashing and cashing of chunks
// Todo: modularize webpack config file