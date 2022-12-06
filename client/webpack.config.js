const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const devMode = process.env.NODE_ENV !== "production";
const test = path.resolve(__dirname, "src", "library.html");
console.log(test)

module.exports = {
	mode: "development",
	entry: {
		login: "./src/index.js",
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
		devMiddleware: {
			index: false, // specify to enable root proxying
		  },
		proxy: {
			context: () => true,
			target: "http://localhost:3001/",
			secure: false, // to accept backend server running on HTTPS w/ invalid cert
			changeOrigin: true
		},
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Login Page",
			template: path.resolve(__dirname, "src", "index.html"),
			inject: true,
			chunks: ["login"],
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			title: "Signup",
			template: path.resolve(__dirname, "src", "html", "signup.html"),
			inject: true,
			chunks: ["signup"],
			filename: "signup.html",
		}),
		new HtmlWebpackPlugin({
			title: "Library",
			template: path.resolve(__dirname, "src", "html", "library.html"),
			inject: true,
			chunks: ["libraryIndex"],
			filename: "library.html",
		}),
		// new MiniCssExtractPlugin(),
		// access to environment variables
		new Dotenv({ systemvars: true, path: "../server/.env" }),
	],
	module: {
		rules: [
			// {
			// 	test: /\.html$/i,
			// 	loader: "html-loader",
			// },
			{
				test: /\.css$/i,
				use: [
					// devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"style-loader",
					"css-loader"
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
				test: /\.(png|svg|jpg|jpeg|ico|gif)$/i,
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
