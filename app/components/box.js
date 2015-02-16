'use strict'
var React = require('react')
var Item  = require('./item')
var AppStoreList = require('../stores/AppStoreList')
var AppActionShoe = require('../actions/AppActionShoe')

function setList () {
    return {list: AppStoreList.getList().slice(-10).reverse()}
}

var Box = React.createClass({
    render: function () {
        var list = this.state.list
        return (
            <ul id="result-list">
                {list.map(function (data) {
                    return <Item key={data.id} data={data} />
                })}
            </ul>
        )
    }
  , getInitialState: function () {
        return setList()
    }
  , componentDidMount: function () {
        var me = this
        AppStoreList.on('change', function () {
            me.setState(setList())
        })
    }
})

module.exports = Box
