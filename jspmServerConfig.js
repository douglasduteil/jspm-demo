'use strict'

module.exports = {
  root: __dirname,
  ssl: true,
  watch: {
    // TODO(@douglasduteil): live reload
    files: ['src/**/*']
  },
  transformer: {
    files: {
      pattern: [
        'jspm_packages/npm/jspm-loader-css*@*.js',
        // TODO(@dougalsduteil): fix __moduleName is not defined when compiling CSSModuleLoaderProcess
        // 'jspm_packages/npm/jspm-loader-css*@*/**/*.js',
        'src/*.js'
      ]
    }
  },
  system: {
    configFile: './config.js',
    depCache: ['css', 'babel'],
    bundles: [
      'npm:css-modules-loader-core@1.0.0',
    ]
  }
}
