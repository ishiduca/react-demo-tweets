'use strict'
var React = require('react')
var Box   = require('./components/box')
var AppActionList = require('./actions/AppActionList')

var shoe = require('shoe')

shoe('/echo').on('data', function (chnk) {
    try {
        AppActionList.add(JSON.parse(chnk))
    } catch (err) {
        console.log(err)
    }
})

React.render(
    <Box />
  , document.querySelector('#content')
)
