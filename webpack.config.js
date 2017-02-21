var webpack = require('webpack');
module.exports = {
    entry: [
        "./angular-practice.js"
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [        
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.css$/, loader: "style!css" },
 
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};