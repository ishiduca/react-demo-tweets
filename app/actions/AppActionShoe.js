'use strict'
var shoe = require('shoe')
var AppDispatcher = require('../dispatcher/AppDispatcher')

shoe('/echo')
.on('connect', function () {
    console.log('[connected]')
})
.on('data', function (chnk) {
    var data
    try {
        AppActionShoe.add(JSON.parse(chnk))
    } catch (err) {
        console.log(err)
    }
})

var AppActionShoe = module.exports = {
    add: function (data) {
        AppDispatcher.dispatch({
            actionType: 'ADD'
          , data: data
        })
    }
}
