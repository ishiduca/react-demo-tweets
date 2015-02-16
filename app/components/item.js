'use strict'
var React = require('react')
var Item  = React.createClass({
    render: function () {
        var tweet = this.props.data
        var user  = tweet.user
        return (
            <li className="tweet">
                <div className="tweet-meta">
                    <img src={user.profile_image_url} />
                    <span>{user.screen_name + '/' + user.name}</span>
                </div>
                <blockquote>{tweet.text}</blockquote>
            </li>
        )
    }
})

module.exports = Item
