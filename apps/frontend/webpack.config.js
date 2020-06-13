const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = (config, context) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new WebpackNotifierPlugin({title: 'Frontend Project build completed'}),
    ]
  };
};