/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header.js');
var Router = require('react-router')
var RouteHandler = Router.RouteHandler;
var SessionStore = require('../stores/session-store.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');

function getStateFromStores() {
    return {
        isLoggedIn: SessionStore.isLoggedIn(),
        email: SessionStore.getEmail()
    };
}

var Template =
    React.createClass({
        getInitialState: function () {
            return getStateFromStores();
        },

        componentDidMount: function () {
            SessionStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function () {
            SessionStore.removeChangeListener(this._onChange);
        },

        _onChange: function () {
            this.setState(getStateFromStores());
        },

        render: function () {
            return (
                <div className="container">
                    <Header
                        isLoggedIn={this.state.isLoggedIn}
                        email={this.state.email} />
                    <RouteHandler
                        isLoggedIn={this.state.isLoggedIn}
                        email={this.state.email} />
                </div>
            )
        }
    });
module.exports = Template;
