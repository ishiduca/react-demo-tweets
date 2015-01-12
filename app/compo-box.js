'use strict'
var React = require('react')
var shoe  = require('shoe')

var CompoList = require('./compo-list')

module.exports = React.createClass({
    render: function () {
        return (
            <main>
                <CompoList data={this.state.data} />
            </main>
        )
    }
  , getInitialState: function () {
          var me = this
        var stream = shoe(this.props.url)
        stream.on('connect', function () {
            console.log('connected')
        })

        stream.on('data', function (chnk) {
            var _data
            try {
                _data = JSON.parse(chnk)
            } catch (err) {
                return console.error(err)
            }

            var data = me.state.data
            me.setState({data: [_data].concat(data)})
        })

        return {
            stream: stream
          , data: []
        }
    }
})
