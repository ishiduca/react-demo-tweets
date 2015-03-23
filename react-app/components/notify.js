'use strict'
var printf      = require('printf')
var React       = require('react')
var StoreNotify = require('../stores/notify')

var timeout = 5000

var DisplayOff = 'display-off'
var DisplayOn  = 'display-on'
var NotifError = 'error'
var NotifInfo  = 'info'

module.exports = React.createClass({
    render: function () {
        return (
            <section id="notify">
                {
                    this.state.message
                        ? (
                            <div
                                className={this.state.classNames}
                                onClick={  this.handleClick}
                            >
                                {this.state.message}
                            </div>
                          )
                        : ''
                }
            </section>
        )
    }
  , getInitialState: function () {
        return displayOff()
    }
  , componentDidMount: function () {
        var me = this
        StoreNotify.on('change', function () {
            setTimeout(function () {
                me.setState(displayOff())
            }, timeout)

            me.setState(displayMsg())
        })
    }
  , handleClick: function () {
        this.setState(displayOff())
    }
})

function displayOff () {
    return {
        classNames: DisplayOff
      , message: ''
    }
}

function displayMsg () {
    var msg = StoreNotify.get()

    if (msg instanceof Error) {
        return {
            classNames: printf('%s %s', DisplayOn, NotifError)
          , message: String(msg)
        }
    }

    if (null !== msg && 'object' === typeof msg) {
        return {
            classNames: printf('%s %s', DisplayOn, NotifInfo)
          , message: printf('%O', msg)
        }
    }

    if ('string' === typeof msg) {
        return {
            classNames: printf('%s %s', DisplayOn, NotifInfo)
          , message: msg
        }
    }
}
