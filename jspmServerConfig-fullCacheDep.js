'use strict'

module.exports = {
  root: __dirname,
  ssl: true,
  transformer: {
    files: {
      pattern: [
        'src/*.js'
      ]
    }
  },
  system: {
    configFile: './config.js',
    depCache: ['css', 'babel', 'src/main.js']
  }
}
