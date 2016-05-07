import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config.js';

const compiler = webpack(webpackConfig);

const staticPath = path.join(__dirname, 'static');

const app = express();

const port = process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static(staticPath));

app.get('*', (req, res) => res.sendFile(path.join(staticPath, 'index.html')));

app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on http://localhost:' + port);
});
