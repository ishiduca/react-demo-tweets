'use strict'
var React  = require('react')
var Notify = require('./notify')
var Tweets = require('./tweets')

module.exports = React.createClass({
    render: function () {
        return (
            <section id="react-app">
                <Notify />
                <Tweets />
            </section>
        )
    }
})
