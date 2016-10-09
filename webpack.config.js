module.exports = {

	entry: './src/index.js',
	
	output: {
		path: 'bundles',
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