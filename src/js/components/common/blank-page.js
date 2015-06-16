"use strict";
var React = require('react');

var BlankPage = React.createClass({
    render: function () {
        return (
            <div className="alert alert-danger">Page not found.</div>
        )
    }
});

module.exports = BlankPage;
