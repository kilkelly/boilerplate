var path = require("path");
var webpack = require("webpack");
var pkg = require("./package.json")

module.exports = {
	entry: {
		app: ["./src/client/renderApp"],
		vendor: Object.keys(pkg.dependencies)
	},
	output: {
		path: path.join(__dirname, "dist"),
	    filename: "[name].min.js",
	    chunkFilename: "[id].min.js",	    
	    publicPath: "/dist/"
	    //,library: "[name]",
	    //libraryTarget: "umd"	    
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
		//  React relies on process.env.NODE_ENV based optimizations.
		// http://survivejs.com/webpack_react/building_kanban/#setting-process-env-node_env-		
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
	    }),
		// Extract vendor and manifest files
		// http://survivejs.com/webpack_react/building_kanban/#setting-up-commonschunkplugin-
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		})
	]
}