/* eslint-disable */
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  distDir: '../build',
  pageExtensions: ['jsx', 'js'],
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['static'] = path.join(__dirname, 'src/static');
    config.resolve.alias['resolvers'] = path.join(__dirname, 'src/resolvers');
    config.resolve.alias['common'] = path.join(__dirname, 'src/common');
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes(path.join(__dirname, 'client/polyfills.js'))
      ) {
        entries['main.js'].unshift(path.join(__dirname, 'client/polyfills.js'));
      }

      return entries;
    };
    return config;
  },
};
