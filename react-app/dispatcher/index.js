'use strict'
var dispatcher = module.exports = new (require('flux').Dispatcher)

var dispatch = dispatcher.dispatch
var register = dispatcher.register

dispatcher.dispatch = function (actionType, value) {
    var payload = {actionType: actionType}
    if ('undefined' !== typeof value) payload.value = value
    return dispatch.apply(this, [payload])
}

dispatcher.register = function (f) {
    return register.apply(this, [function (payload) {
        return f(payload.actionType, payload.value)
    }])
}
