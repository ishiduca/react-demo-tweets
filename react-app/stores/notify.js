'use strict'
var events     = require('events')
var assign     = require('object-assign')
var printf     = require('printf')
var dispatcher = require('../dispatcher')
var handle     = require('../utils/handle')

var StoreNotify = module.exports = assign({}, events.EventEmitter.prototype)
var buffer      = []

handle.call(StoreNotify, {get: 'shift'}, buffer)

StoreNotify.dispatchToken = dispatcher.register(function (payload) {
    var actionType = payload.actionType
    var value      = payload.value

    if ('error.push' === actionType) {
        buffer.push(value)
        StoreNotify.emit('change')
    }

    if ('tweet.push' === actionType) {
        buffer.push(printf('"%s" tweet "%s"', value.user.screen_name, value.text))
        StoreNotify.emit('change')
    }
})
