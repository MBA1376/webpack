const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const extractPlugin = new ExtractTextPlugin({
//     filename : 'app.css'
// });  


module.exports = {
    entry : {
        index : './src/js/app.js'  ,
        test : './src/js/test.js' ,
        admin : './src/js/admin.js'
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
        //    {
        //        test : /\.scss$/ ,
        //        use : extractPlugin.extract({
        //            use : ['css-loader' , 'sass-loader']
        //        }) 
        //    } 
        {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
            ],
        }
        ]
    } ,
    plugins : [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
    ]
};