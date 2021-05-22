const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  devtool: 'eval-cheap-source-map',
  output: {
    path: path.join(__dirname, 'build'), 
    filename: 'index.bundle.js'
  },
  resolve: { 
    modules: [path.resolve(__dirname, 'src'), 
    'node_modules'] 
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        chunks: ['main'],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
        { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            use: ['babel-loader'] 
        },
        {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader'],
        },
        { 
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ['file-loader'] 
        },
    ],
},
};
