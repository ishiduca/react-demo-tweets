'use strict'
var React = require('react')
var Compo = require('./compo')

module.exports = React.createClass({
    render: function () {
        var data = this.props.data
        return (
            <ul id="result-list">
                {data.map(function (tweet) {
                    return <Compo key={tweet.id} data={tweet} />
                })}
            </ul>
        )
    }
})
