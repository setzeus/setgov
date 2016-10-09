var path = require('path');
var buildPath = path.resolve(__dirname, 'bundles');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');



module.exports = {

	entry: './src/index.js',
	
	output: {
		path: buildPath,
		filename: 'app_bundle.js',
		publicPath: '/bundles'
	},

	watch:true,

	devServer: {
		contentBase: 'src'
	},

	module: {
		loaders: [

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		],	
	}
};