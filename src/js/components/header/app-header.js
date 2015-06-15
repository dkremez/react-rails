/** @jsx React.DOM */
var React = require('react');
var CartSummary = require('./app-cartsummary.js');
var Link = require('react-router').Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../../actions/session-actions.js');

var Header = React.createClass({

  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },
  render: function() {
    var rightNav = this.props.isLoggedIn ? (
      <ul className="nav navbar-nav navbar-right">
        <li><CartSummary /></li>
        <li>
          <a href='#' onClick={this.logout}>Logout</a>
        </li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="login">Login</Link></li>
        <li><Link to="signup">Sign up</Link></li>
      </ul>
    );

    var leftNav = this.props.isLoggedIn ? (
      <ul className="nav navbar-nav navbar-left">
        <li >
          <a href="#">{this.props.email}</a>
        </li>
      </ul>
    ) : (
      <div><h3>Items Shop</h3></div>
    );

    return (
      <nav className="navbar navbar-default" data-topbar role="navigation">
        <section className="top-bar-section">
          {rightNav}
          {leftNav}
        </section>
      </nav>
    );
  }
});

module.exports = Header;
