const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output:{
   path:path.resolve(__dirname,"dist"),
  },
  mode: 'development',
  module: {
   rules:[
    {
     test: /\.(js|jsx|ts|tsx)$/,
     exclude: /node_modules/,
     use: {
      loader: "babel-loader",
      options:{
      	presets: ['@babel/preset-env', '@babel/preset-react'],
      },
     },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
       test: /\.(png|jp(e*)g|svg|gif)$/,
       use: ['file-loader'],
    },
    {
       test: /\.svg$/,
       use: ['@svgr/webpack'],
     },
   ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  plugins: [
   new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
   }),
  ],
}
