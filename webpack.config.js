var path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	devtool: "inline-source-map",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [style-loader, css-loader],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|ept|ttf|otf)$/i,
				use: "asset/resource",
			},
		],
	},
}
