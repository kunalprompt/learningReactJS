const path = require('path')

const config = {
    name: 'section1-jsx',
    entry: './src/index.jsx',
    output: {
    	path: path.resolve(__dirname, "dest"),
		filename: '[name].js',
		publicPath: '/build/',
    },
	devServer: {
	   inline: true,
	   port: 8080
	},
    module: {
    	rules: [
    		{
    			include: [
    				path.resolve(__dirname, "src")
		        ],
    			test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /(node_modules|bower_components)/,
    			options: {
    				presets: ["env", "react"]
		        },
    		}
    	]
    }
}

module.exports = config;
