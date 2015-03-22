'use strict'
var shoe       = require('shoe')
var dispatcher = require('../dispatcher')

var prefix = '/echo'

module.exports = {
    start: function () {
        shoe(prefix).on('data', function (chnk) {
            var data
            try {
                data = JSON.parse(chnk)
            } catch (err) {
                return dispatcher.dispatch('error.push', err)
            }

            dispatcher.dispatch('tweet.push', data)
        })
    }
}
