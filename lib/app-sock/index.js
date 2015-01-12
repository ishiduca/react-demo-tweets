'use strict'
var Dup = require('./dup')
var dup = new Dup

var config  = require('../../.config')
var Twitter = require('twitter')
var tw      = new Twitter(config)

tw.stream('statuses/filter', {track: 'react'}, function (stream) {
    stream.on('data', function (chnk) {
        dup.write(chnk)
    })
    stream.on('error', console.log.bind(console))
})

var shoe = require('shoe')
var sock = module.exports = shoe(function (stream) {
    dup.pipe(stream)
    console.log(String(stream) + ' connected')
})
