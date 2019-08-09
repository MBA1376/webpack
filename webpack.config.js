const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename : 'app.css'
});  


module.exports = {
    entry : {
        index : './src/js/app.js'  ,
        test : './src/js/test.js'
    },
    output : {
        path : path.join(__dirname , 'dist') ,
        filename : '[name].js' ,
        publicPath : '/dist'
    } ,
    module : {
        rules : [
           {
               test : /\.js$/ ,
               use : [{
                   loader : 'babel-loader' ,
                   options : {
                       presets : ['es2015']
                   }
               }]
           } ,
           {
               test : /\.scss$/ ,
               use : extractPlugin.extract({
                   use : ['css-loader' , 'sass-loader']
               })
           }
        ]
    } ,
    plugins : [
        extractPlugin
    ]
};