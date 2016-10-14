module.exports = {

	entry: {
		popup: './popup/index.js',
		background: './background/index.js',
		content: './content/index.js'
	},
	devtool: 'source-map', 	
	output: {
		path: 'assets',
		filename: "[name].js",
		publicPath: '/assets'
	},
	resolve: {
		extensions : ['','.jsx','.es6','.js','.less'],
		moduleDirectories: ['node_modules']
	},
	devServer: {
		contentBase: ['./popup', './background', './content']	
	},
	watch:true,

	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		],	
	}
};