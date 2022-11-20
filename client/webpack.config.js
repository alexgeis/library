const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		requestMethods: "./src/js/requestMethods.js",
		login: "./src/js/login/login.js",
		logout: "./src/js/library/logout.js",
		heroDisplay: "./src/js/library/heroDisplay.js",
		hamburgerMenu: "./src/js/library/hamburgerMenu.js",
		themeToggle: "./src/js/themeToggle.js",
		userClass: "./src/js/library/userClass.js",
		bookClass: "./src/js/library/bookClass.js",
		addBookForm: "./src/js/library/addBookForm.js",
		renderBooks: "./src/js/library/renderBooks.js",
		editBookForm: "./src/js/library/editBookForm.js",
		editUserForm: "./src/js/library/editUserForm.js",
		fetchBookInfo: "./src/js/library/fetchBookInfo.js",
		search: "./src/js/library/search.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Login Page",
			// template: path.resolve(__dirname, "src", "index.html"),
			template: "./src/index.html",
			inject: true,
			chunks: ["index", "requestMethods", "login"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			title: "Library",
			// template: path.resolve(__dirname, "src", "index.html"),
			template: "./src/html/library.html",
			inject: true,
			excludeChunks: ["index", "requestMethods", "login"],
			filename: "library.html",
		}),
		new MiniCssExtractPlugin(),
		// access to environment variables
		new Dotenv({ systemvars: true }),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
						cacheDirectory: true,
					},
				},
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
		fallback: {
			fs: false,
			child_process: false,
		},
	},
	optimization: {
		runtimeChunk: "single",
	},
};
