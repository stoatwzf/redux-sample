const { resolve } = require('path');
const HtmlWbepackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: [
							'transform-class-properties',
							'transform-decorators-legacy',
							'transform-object-rest-spread'
						]
					}
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWbepackPlugin({ template: resolve(__dirname, 'public/index.html')}),
		new CleanWebpackPlugin()
	],
	devServer: {
		contentBase: './dist',
		port: 8383
	}
};

module.exports = config;