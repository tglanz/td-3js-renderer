module.exports = {
	entry: "./src/entry.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			loader: "babel",
			query: {
				presets: ['es2015']
			}
		}]
	}
}