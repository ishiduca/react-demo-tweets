'use strict'
var React = require('react')

module.exports = React.createClass({
    render: function () {
        var tweet = this.props.data
        return (
            <li className="tweet">
                <span>{tweet.user.screen_name + '/' + tweet.user.name}</span>
                <p>{tweet.text}</p>
            </li>
        )
    }
})
