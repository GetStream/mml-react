const path = require('path')

module.exports = {
  title: 'Message Markup Language MML React - Docs',
  styleguideDir: 'docs',
  serverPort: 6069,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  require: [path.join(path.resolve(path.dirname('')), 'dist/css/index.css')],
  template: {
    favicon: 'https://getstream.imgix.net/images/favicons/favicon-96x96.png',
    link: {
      rel: 'stylesheet',
      type: 'text/css',
      href: './dist/css/index.css'
    }
  }
}
