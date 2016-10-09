

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var buildPath = path.resolve(__dirname, 'public');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.js',
	],
	devTool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './src',
		historyApiFallback: true,
		colors: true,
		hot: true
	},
	output: {
		path: buildPath,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.css'],
		moduleDirectories: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin(),
		
	],
	module: {
		loaders: [

			{
				test: /\.(js|jsx)?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loaders: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		],
		
	}
}




