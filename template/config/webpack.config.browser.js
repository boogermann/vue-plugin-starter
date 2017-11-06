var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var path = require('path');
var outputFile = '{{ name }}';
var globalName = '{{ global }}';
module.exports = merge(base, {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: outputFile + '.browser.js',
		library: globalName,
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: false
		})
	]
});