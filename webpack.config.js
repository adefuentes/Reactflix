const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: {
		app: path.join(__dirname, 'src', 'index.tsx')
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(html)$/,
				exclude: /node_modules/,
				use: {
					loader: 'html-loader',
					options: {minimize: true}
				}
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.scss$/,
				loader: [
					MiniCSSExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: './index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new MiniCSSExtractPlugin({
			filename: "./styles.css",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from:'public/assets/images',to:'assets/images'}
			]
		})
	]
}
