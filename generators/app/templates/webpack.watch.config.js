/**
 * Copyright (c) 2014 Umeng+ gongzhen, All rights reserved.
 * http://www.umeng.com/
 * @author gongzhen
 * @date  16/5/23
 * @description
 *
 */

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const AppPaths = {
  src: path.join(__dirname, 'src'),
  dst: path.join(__dirname, 'dst')
};

var AppPages = [
  { title: '<%= projectName %>', entry: ['main'], template: path.resolve(AppPaths.src, 'index.html') , fileName: 'index.html' }
];

// var node_modules_dir = path.join(__dirname, 'node_modules');
//
// var depsPath = {
//     react: 'react/dist/react.min.javascripts'
// };

var config = {
  entry: {
    main: path.resolve(AppPaths.src, 'javascripts/main.js')
  },

  output: {
    path: AppPaths.dst,
    filename: 'javascripts/[name].min.js',
    // publicPath: '/' //默认为'/'
  },

  module: {
    // noParse: [path.resolve(node_modules_dir, depsPath.react)],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl/,
        loader: 'style!css!stylus'
      },
      //配置name参数，值为img output的位置(img后由hash值，避免cache导致的更新不及时)
      //name属性的值为基于output.path属性的相对路径 limit:8192 1200000
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        query: {
          limit: 1200000,
          name: path.normalize('./images/[name].[ext]?[hash]')
        }
      },
      {
        test: /\.woff(#\w*)*$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.normalize('./fonts/[name].[ext]'),
          minetype: 'application/font-woff'
        }
      },
      {
        test: /\.woff2(#\w*)*$/,
        loader: 'url',
        query: {
          limit: 10,
          name: path.normalize('./fonts/[name].[ext]'),
          minetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(#\w*)*$/,
        loader: 'url',
        query: {
          limit: 10,
          name: path.normalize('./fonts/[name].[ext]'),
          minetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(#\w*)*$/,
        loader: 'file',
        query: {
          name: path.normalize('./fonts/[name].[ext]'),
        }
      },
      {
        test: /\.svg(#\w*)*$/,
        loader: 'url',
        query: {
          limit: 10,
          name: path.normalize('./fonts/[name].[ext]'),
          minetype: 'image/svg+xml'
        }
      }
    ]
  },
  plugins: [
    //此输出路径基于output.path: path.normalize("../../build/css/[name].css")
    //而且此路径只能使用基于output.path的相对路径，不能使用绝对路径
    // new ExtractTextPlugin( path.normalize("../css/[name].min.css") ),

    //提取公共模块
    // new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.javascripts', chunks: ['main.jsx']}),

    //设置此处，则在JS中不用类似require('vue')引入基础模块， 只要直接使用Vue变量即可
    //此处通常可用做对常用组件，库的提前设置
    // new webpack.ProvidePlugin({
    //   'React': 'react'
    // }),

    // new HtmlWebpackPlugin({
    //     title: 'U-Time全国巡回',
    //     filename: 'index.html',
    //     chunks: ['main'],
    //     // favicon: path.resolve(__dirname, 'src/images/favicon.ico'),
    //     template: path.resolve(AppPaths.src, 'index.html'),
    //     inject: 'body'
    // })

    //热替换插件和防止报错插件
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ].concat(HtmlWebpackPluginPages(AppPages)),

  resolve: {
    extensions: ['', '.js', 'jsx'],
    alias: {
      // 'react': path.resolve(node_modules_dir, depsPath.react)
    }
  }
};

// for(var property in depsPath) {
//   var dep = depsPath[property];
//   var depPath = path.resolve(node_modules_dir, dep);
//   config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//   config.module.noParse.push(depPath);
// }

// 生成 HtmlWebpackPlguin 页面
function HtmlWebpackPluginPages(pages) {
  return pages.map(function(page) {
    return new HtmlWebpackPlugin({
      title: page.title,
      filename: page.fileName,
      chunks: page.entry,
      chunksSortMode: 'none',
      // favicon: path.resolve(__dirname, 'src/img/favicon.ico'),
      template: page.template
    })
  });
}

module.exports = config;
