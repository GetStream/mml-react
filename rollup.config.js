// @flow
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import scss from 'rollup-plugin-scss'
import json from 'rollup-plugin-json'
import url from 'rollup-plugin-url'
import copy from 'rollup-plugin-copy-glob'
import resolve from 'rollup-plugin-node-resolve'
import builtins from '@stream-io/rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
// eslint-disable-next-line
import { terser } from 'rollup-plugin-terser'

import replace from 'rollup-plugin-replace'
import PropTypes from 'prop-types'

import pkg from './package.json'

import process from 'process'
process.env.NODE_ENV = 'production'

const baseConfig = {
  input: 'src/index.js',
  cache: false,
  watch: {
    chokidar: false
  }
}

const namedExports = {
  'prop-types': Object.keys(PropTypes),
  'node_modules/react-is/index.js': ['isValidElementType'],
  'node_modules/linkifyjs/index.js': ['find']
}

const normalBundle = {
  ...baseConfig,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    /@babel/,
    '@braintree/sanitize-url',
    '@rgrove/parse-xml',
    'date-fns',
    'ical-expander',
    'linkifyjs',
    'prop-types',
    'pure-react-carousel',
    'react-add-to-calendar',
    'react-markdown',
    'react-virtuoso'
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    external(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    scss({
      output: pkg.style,
      failOnError: true
    }),
    copy([{ files: 'src/assets/*', dest: 'dist/assets' }], {
      verbose: true,
      watch: process.env.ROLLUP_WATCH
    }),
    url(),
    commonjs({ namedExports }),
    json()
  ]
}

const fullBrowserBundle = {
  ...baseConfig,
  output: [
    {
      file: pkg.jsdelivr,
      format: 'iife',
      sourcemap: true,
      name: 'window', // write all exported values to window
      extend: true, // extend window, not overwrite it
      browser: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    external(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    {
      name: 'ignore-css-and-scss',
      resolveId: importee => (importee.match(/.s?css$/) ? importee : null),
      load: id => (id.match(/.s?css$/) ? '' : null)
    },
    builtins(),
    resolve({
      browser: true
    }),
    url(),
    commonjs({ namedExports }),
    json(),
    globals({
      process: true,
      globals: false,
      buffer: false,
      dirname: false,
      filename: false
    })
    // terser(),
  ]
}

export default () =>
  process.env.ROLLUP_WATCH ? [normalBundle] : [normalBundle, fullBrowserBundle]
