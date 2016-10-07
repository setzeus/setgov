var path = require('path');
//var buildPath = path.resolve(__dirname, 'src');

module.exports = {

	entry: './src/index.js',

	output: {
		path: 'src',
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: "./src",
		hot: true,
		inline: true
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
				loader: 'style.loader!css-loader'
			}
		]
	}

};