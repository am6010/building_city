const path = require('path');

module.exports = {
	entry: ['babel-polyfill','./src/index.jsx'],
  	output: {
    	filename: 'main.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/'
  	},
  	 devServer: {
    	contentBase: path.join(__dirname, 'dist'),
    	compress: true,
			port: 9000,
			historyApiFallback: true,
  	},
  	mode: 'development',
    target: 'webworker',
  	module: {
  		rules: [
  		{
  			test: /\.jsx?$/,
      		exclude: /(node_modules|bower_components)/,
      		use: { loader: 'babel-loader' }
			},
			{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
		]
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', 'css'],
		}
};