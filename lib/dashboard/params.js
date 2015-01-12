'use strict'
var pack = require('../../package')

module.exports = {
    title: pack.name + ' v' + pack.version
  , bundle_js: '/js/bundle.js'
  , styles: [
        {href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css'}
      , {href: '/css/dashboard.css'}
    ]
}
