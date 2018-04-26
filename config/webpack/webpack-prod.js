const merge = require('./merge');
const baseConfig = require('./webpack-base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = [
	{
		mode: "production",
		target: 'node',
		output: {
			filename: '[name].node.min.js'
		},
		optimization: {
			minimizer: [
				new UglifyJSPlugin({
					sourceMap: true
				})
			]
		}
	},
	{
		mode: "production",
		target: 'web',
		output: {
			filename: '[name].web.min.js'
		},
		optimization: {
			minimizer: [
				new UglifyJSPlugin({
					sourceMap: true
				})
			]
		}
	}
];

//module.exports = prodConfig;
module.exports = merge(baseConfig, prodConfig);
