var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: true //去掉复杂的log信息
});

server.listen(8888, 'localhost', function (err, result) {
  if (err) 
    console.log(err);
  console.log('Listening at localhost:8888');
});