'use strict'
var React = require('react')
var App   = require('./components/app')
var ActShoe = require('./actions/shoe')

window.onload = ActShoe.start

React.render(
    <App />
  , document.querySelector("#content")
)
