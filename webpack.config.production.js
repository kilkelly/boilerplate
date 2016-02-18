var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: {
		main: ["./src/client/renderApp"]
	},
	output: {
		path: path.join(__dirname, "dist"),
	    filename: '[name].min.js',
	    chunkFilename: '[id].min.js',	    
	    publicPath: '/dist/',
	    library: '[name]',
	    libraryTarget: 'umd'	    
	},
	resolve: {
		modulesDirectories: ["node_modules"],
		extensions: ["", ".js"]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel"]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style!css!sass"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),		
		new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin({
	      compressor: {
	        screw_ie8: true,
	        warnings: false
	      }
	    })				
	]
}