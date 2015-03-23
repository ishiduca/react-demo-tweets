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

StoreTweets.dispatchToken = dispatcher.register(function (payload) {
    if ('tweet.push' === payload.actionType) {
        list.unshift(payload.value)
        StoreTweets.emit('change')
    }
})
