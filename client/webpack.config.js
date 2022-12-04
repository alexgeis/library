const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	mode: "development",
	// entry: {
	// 	index: "./src/index.js",
	// 	libraryIndex: "./src/js/library/index.js",
	// 	requestMethods: "./src/js/requestMethods.js",
	// 	login: "./src/js/login/login.js",
	// 	logout: "./src/js/library/logout.js",
	// 	signup: "./src/js/login/signup.js",
	// 	heroDisplay: "./src/js/library/heroDisplay.js",
	// 	hamburgerMenu: "./src/js/library/hamburgerMenu.js",
	// 	themeToggle: "./src/js/themeToggle.js",
	// 	userClass: "./src/js/library/userClass.js",
	// 	bookClass: "./src/js/library/bookClass.js",
	// 	addBookForm: "./src/js/library/addBookForm.js",
	// 	renderBooks: "./src/js/library/renderBooks.js",
	// 	editBookForm: "./src/js/library/editBookForm.js",
	// 	editUserForm: "./src/js/library/editUserForm.js",
	// 	fetchBookInfo: "./src/js/library/fetchBookInfo.js",
	// 	search: "./src/js/library/search.js",
	// },
	entry: {
		index: "./src/index.js",
		libraryIndex: "./src/js/library/index.js",
		signup: "./src/js/login/signup.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 8008,
		proxy: {
			// "/": {
			// 	target: "http://localhost:8008",
			// 	router: () => "http://localhost:3001",
			// 	logLevel: "debug" /*optional*/,
			// },
			// "/api": {
			// 	target: "http://localhost:8008/api",
			// 	router: () => "http://localhost:3001/api",
			// 	logLevel: "debug" /*optional*/,
			// },
			// "/": {
			// 	target: "http://localhost:3001",
			// 	pathRewrite: { "^/": "" },
			// 	secure: false,
			// 	changeOrigin: true,
			// 	logLevel: "debug" /*optional*/,
			// },
			// "/api": {
			// 	target: "http://localhost:3001",
			// 	pathRewrite: { "^/api": "" },
			// 	secure: false,
			// 	changeOrigin: true,
			// 	logLevel: "debug" /*optional*/,
			// },
			"**": "http://localhost:3001",
		},
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
			title: "Signup",
			// template: path.resolve(__dirname, "src", "library.html"),
			template: "./src/html/signup.html",
			inject: true,
			chunks: ["signup"],
			filename: "signup.html",
		}),
		new HtmlWebpackPlugin({
			title: "Library",
			// template: path.resolve(__dirname, "src", "library.html"),
			template: "./src/html/library.html",
			inject: true,
			chunks: ["libraryIndex"],
			filename: "library.html",
		}),
		new MiniCssExtractPlugin(),
		// access to environment variables
		new Dotenv({ systemvars: true, path: "../server/.env" }),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			// {
			// 	test: /\.css$/i,
			// 	use: ["style-loader", "css-loader"],
			// },
			// {
			// 	test: /\.(s(a|c)ss)$/i,
			// 	use: [
			// 		MiniCssExtractPlugin.loader,
			// 		"css-loader",
			// 		"sass-loader",
			// 	],
			// },
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
