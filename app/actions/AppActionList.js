'use strict'
var AppDispatcher = require('../dispatcher/AppDispatcher')

module.exports = {
    add: function add (data) {
        AppDispatcher.dispatch({
            actionType: 'ADD'
          , data: data
        })
    }
}
