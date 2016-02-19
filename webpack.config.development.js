var path = require("path");
var webpack = require("webpack");
var pkg = require("./package.json")

module.exports = {
	entry: {
		app: [
			"./src/client/renderApp",
			"webpack-hot-middleware/client"		
		],
		vendor: Object.keys(pkg.dependencies)
	},
	output: {
		path: path.join(__dirname, "dist"),
	    filename: "[name].js",
	    chunkFilename: "[id].js",	    
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
				loader: "babel",
		        query: {
		          presets: ['react-hmre']
		        }				
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style!css!sass"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		// Extract vendor and manifest files
		// http://survivejs.com/webpack_react/building_kanban/#setting-up-commonschunkplugin-
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		})								
	],
	devtool: 'cheap-module-eval-source-map',
}