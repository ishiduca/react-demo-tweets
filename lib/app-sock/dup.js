'use strict'
var stream = require('stream')
var util   = require('util')

function Dup () {
    stream.Duplex.call(this, {objectMode: true})
}

util.inherits(Dup, stream.Duplex)

module.exports = Dup

Dup.prototype._write = function (_data, enc, done) {
    var data
    try {
        data = JSON.stringify(_data)
    } catch (err) {
        cnosole.error(err)
        return done(err)
    }

    this.push(data)
    done()
}
Dup.prototype._read = function () {}
