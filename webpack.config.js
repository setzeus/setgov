var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var buildPath = path.resolve(__dirname, 'src');
var buildPath = path.resolve(__dirname, 'public');


module.exports = {

	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js',
	],

	output: {
		path: buildPath,
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		hot: true,
		pathinfo: true
	},
	resolve: {
		extensions: ['', '.js', '.less'],
		moduleDirectories: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
				template: 'src/index.html',
				inject: 'body'
			}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style.loader!css-loader'
			}
		]
	}

};