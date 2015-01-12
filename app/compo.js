'use strict'
var React = require('react')

module.exports = React.createClass({
    render: function () {
        var tweet = this.props.data
        return (
            <li className="tweet">
                <div className="tweet-mata">
                    <img src={tweet.user.profile_image_url} />
                    <span>{tweet.user.screen_name + '/' + tweet.user.name}</span>
                </div>
                <blockquote>{tweet.text}</blockquote>
            </li>
        )
    }
})
