const path = require('path')

module.exports = {
  title: 'Message Markup Language MML React - Docs',
  styleguideDir: 'docs',
  assetsDir: 'src/assets',
  serverPort: 6069,
  require: [
    path.join(path.resolve(path.dirname('')), 'dist/css/index.css')
    //path.join(path.resolve(path.dirname('')), 'styleguidist.css'),
  ],
  template: {
    favicon: 'https://getstream.imgix.net/images/favicons/favicon-96x96.png',
    link: {
      rel: 'stylesheet',
      type: 'text/css',
      href: './dist/css/index.css'
    }
  }
}
