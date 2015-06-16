"use strict";
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SessionStore = require('../stores/session-store.js');

var App = React.createClass({
    statics: {
        willTransitionTo: function (transition) {
            if (!SessionStore.isLoggedIn()) {
                transition.redirect('/login');
            }
        }
    },

    render: function () {
        return (
            <div><RouteHandler /></div>
        )
    }

});

module.exports = App;
