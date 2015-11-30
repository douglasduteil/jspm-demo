'use strict'

module.exports = {
  root: __dirname,
  ssl: true,
  system: {
    configFile: './config.js',
    depCache: [],
    bundles: [
      'css + src/main - [src/**/*] - [src/**/*.css!]',
    ]
  }
}
