	const path = require('path');
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	const { CleanWebpackPlugin } = require('clean-webpack-plugin');

	module.exports = {
		mode: 'development',
		entry: {
			header: './modules/header/header.js',
			body: './modules/body/body.js',
			footer: './modules/footer/footer.js',
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'public')
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
							{
				test: /\.(png|jpe?g|gif)$/i,
				type: 'javascript/auto',
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							disable: false
						},
					},
				],
			},
			]
		},
		devtool: 'inline-source-map',
		devServer: {
			static: path.join(__dirname, './public'),
			compress: true,
			port: 8564
		},
		plugins: [
			new CleanWebpackPlugin(), // clean the public folder before building
			new HtmlWebpackPlugin() // Generates default index.html
		],
		optimization: {
			splitChunks: {
				chunks: 'all' // split all chunks
			}
		}

	};