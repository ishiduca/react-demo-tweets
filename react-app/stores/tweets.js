'use strict'
var events     = require('events')
var assign     = require('object-assign')
var lodash     = require('lodash')
var dispatcher = require('../dispatcher')

var list = []

var StoreTweets = module.exports = assign({
    getAll: function () {
        return lodash.cloneDeep(list)
    }
}, events.EventEmitter.prototype)

StoreTweets.dispatchToken = dispatcher.register(function (actionType, value) {
    if ('tweet.push' === actionType) {
        list.unshift(value)
        StoreTweets.emit('change')
    }
})
