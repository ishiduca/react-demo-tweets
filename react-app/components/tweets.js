'use strict'
var printf      = require('printf')
var React       = require('react')
var StoreTweets = require('../stores/tweets')
var Item        = require('./item')

module.exports = React.createClass({
    render: function () {
        return (
            <ul id="result-list">
                {this.state.list.map(m)}
            </ul>
        )

        function m (data) {
            return (
                <Item key={data.id} data={data} />
            )
        }
    }
  , getInitialState: function () {
        return {list: []}
    }
  , componentDidMount: function () {
        var me = this
        StoreTweets.on('change', function () {
            me.setState(getList())
        })
    }
})

function getList () {
    return {list: StoreTweets.getAll().slice(0, 10)}
}
