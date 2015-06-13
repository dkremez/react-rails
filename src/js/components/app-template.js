/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header.js');
var Router = require('react-router')
var RouteHandler = Router.RouteHandler;


var Template =
  React.createClass({
    render:function(){
      return  (
        <div className="container">
          <Header />
          <RouteHandler/>
        </div>
        )
    }
  });
module.exports = Template;
