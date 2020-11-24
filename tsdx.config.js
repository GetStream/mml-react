const fs = require('fs');
const path = require('path');
const ignoreImport = require('rollup-plugin-ignore-import');
const scss = require('rollup-plugin-scss');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const compileScss = scss({
  /**
   * Custom output function, in order to create separate stylesheets
   *
   * Resources about tsdx kind-of-native-support for this:
   * - https://stackoverflow.com/q/63656844
   * - https://github.com/formium/tsdx/pull/535
   * - https://github.com/formium/tsdx/issues/175
   */
  output: function(styles, styleNodes) {
    const dest = path.join(__dirname, 'dist/styles');
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);

    Object.keys(styleNodes).forEach((filepath) => {
      const name = path.basename(filepath, '.scss');
      const source = styleNodes[filepath];
      const compiled = sass.renderSync({
        data: source,
        includePaths: [path.join(__dirname, 'src/styles')],
      });
      const result = postcss([autoprefixer]).process(compiled.css).css;
      fs.writeFileSync(`${dest}/${name}.css`, result);
    });
  },
  failOnError: true,
  watch: 'src/styles',
});
const ignoreScss = ignoreImport({ extensions: ['.scss', '.css'] });

let firstBundle = true;
module.exports = {
  rollup(config, options) {
    config.plugins.push(firstBundle ? compileScss : ignoreScss);
    firstBundle = false;
    return config;
  },
};
