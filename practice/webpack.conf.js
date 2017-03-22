var path = require("path");
var webpack = require("webpack");

module.exports = {
	devtool:"#source-map",
	entry:{
		example01: path.resolve(__dirname, "example01.js")
	},
	output:{
		path:__dirname +　"/public",
		filename:"js/[name].js"
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query:{
					presets:['es2015','stage-0']
				}
			}
		]
	}
}

//#source-map 因为webpack编译完后非常不可读 所以引入它使报错指向源代码位置