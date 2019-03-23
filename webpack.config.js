const path = require('path'); //include built in node module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//entry point, output, plugins, loaders
    entry: './src/js/index.js', // ./ - means current folder
    output:  {
        path: path.resolve(__dirname, 'dist'), //absolute path
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }

};




// see json file: webpack-cli allows access to webpack through command line interface
// "start" script that keeps running in background and updates browser immediately IRT (in real time)
