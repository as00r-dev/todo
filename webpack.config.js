var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/App.js",
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Todo App",
		}),
		new FaviconsWebpackPlugin("./src/assets/images/favicon.ico"),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|ept|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
