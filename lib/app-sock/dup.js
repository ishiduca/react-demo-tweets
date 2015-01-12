'use strict'
var stream = require('stream')
var util   = require('util')

function Dup () {
    stream.Duplex.call(this, {objectMode: true})
}

util.inherits(Dup, stream.Duplex)

module.exports = Dup

Dup.prototype._write = function (data, enc, done) {
    this.push(JSON.stringify(data))
    done()
}
Dup.prototype._read = function () {}
