"use strict";
/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var routes = require('./routes.js');

Router.run(routes, Router.HashLocation, function (Root) {
    React.render(<Root />, document.body);
});
