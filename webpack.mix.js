let mix = require('laravel-mix');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


mix.js('src/js/app.js', 'dist').setPublicPath('dist');
mix.js('src/js/worker-decoder-opus.js', 'dist').setPublicPath('dist');
mix.copy('src/index.html', 'dist/index.html');
mix.copy('src/css/app.css', 'dist/app.css');

mix.webpackConfig({
  plugins: [new NodePolyfillPlugin()],
  resolve: { fallback: { fs: false }}
});