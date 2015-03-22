'use strict'
module.exports = function handle (pair, she) {
    var me = this
    Object.keys(pair).forEach(function (myMethod) {
        var herMethod = pair[myMethod]
        if ('function' === typeof she[herMethod]) {
            me[myMethod] = function () {
                return she[herMethod].apply(she, arguments)
            }
        }
    })
}
