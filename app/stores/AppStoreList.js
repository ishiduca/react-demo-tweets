'use strict'
var events        = require('events')
var AppDispatcher = require('../dispatcher/AppDispatcher')

var list = []

var AppStoreList  = new events.EventEmitter
AppStoreList.getList = function () {
    return list
}

function add (data) {
    list.push(data)
}

AppDispatcher.register(function (payload) {
    var actionType = payload.actionType
    var data       = payload.data
    if ('ADD' === actionType) {
        add(data)
        AppStoreList.emit('change')
    }
})

module.exports = AppStoreList
