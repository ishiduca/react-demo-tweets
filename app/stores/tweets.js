'use strict'
var events     = require('events')
var assign     = require('object-assign')
var lodash     = require('lodash')
var dispatcher = require('../dispatcher')

var StoreTweets = module.exports = assign({}, events.EventEmitter.prototype)
var list        = []

StoreTweets.getAll = function () {
    return lodash.cloneDeep(list)
}

StoreTweets.dispatchToken = dispatcher.register(function (payload) {
    var actionType = payload.actionType
    var value      = payload.value

    if ('tweet.push' === actionType) {
        list.unshift(value)
        StoreTweets.emit('change')
    }
})
