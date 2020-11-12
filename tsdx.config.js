const ignoreImport = require('rollup-plugin-ignore-import');
const scss = require('rollup-plugin-scss');
const pkg = require('./package.json');

const compileScss = scss({ output: pkg.style, failOnError: true });
const ignoreScss = ignoreImport({ extensions: ['.scss', '.css'] });

let firstBundle = true;
module.exports = {
  rollup(config, options) {
    config.plugins.push(firstBundle ? compileScss : ignoreScss);
    firstBundle = false;
    return config;
  },
};
