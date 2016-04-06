import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './dev.config';

const compiler = webpack(webpackConfig);
const server = new Express();

server.use(Express.static('static'));
server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  quiet: true,
  publicPath: webpackConfig.output.publicPath
}));

var listener = server.listen(3000, function () {
  let host = listener.address().address;
  let port = listener.address().port;
  console.log('Webpack Dev Server listening at http://%s:%s', host, port);
});
