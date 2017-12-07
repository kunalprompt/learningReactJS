const path = require('path')

const config = {
    name: 'reactjs-app',
    entry: './source/index.jsx',
    output: {
    	path: path.resolve(__dirname, "dest"),
		filename: '[name].js',
		publicPath: '/build/',
    },
	devServer: {
	   inline: true,
	   port: 8000
	},
    module: {
    	rules: [
    		{
    			include: [
    				path.resolve(__dirname, "source")
		        ],
    			test: /\.jsx$/,
    			loader: "babel-loader",
    			options: {
    				presets: ["env"]
		        },
    		}
    	]
    }
}

module.exports = config;
