module.exports = {

	entry: {
		popup: './src/index.js',
		background: './background/src/index.js'
	},
		 	
	
	output: {
		path: 'bundles',
		filename: "[name].js",
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