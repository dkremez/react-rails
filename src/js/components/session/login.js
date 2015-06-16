"use strict";
var React = require('react');
var SessionActionCreators = require('../../actions/session-actions.js');
var SessionStore = require('../../stores/session-store.js');
var ErrorNotice = require('../../components/common/error-notice.js');

var LoginPage = React.createClass({
    statics: {
        willTransitionTo: function (transition) {
            if (SessionStore.isLoggedIn()) {
                transition.redirect('/catalog');
            }
        }
    },

    getInitialState: function () {
        return {errors: []};
    },

    componentDidMount: function () {
        SessionStore.addChangeListener(this._onChange);
        this.setState({errors: []});
    },

    componentWillUnmount: function () {
        SessionStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({errors: SessionStore.getErrors()});
    },

    _onSubmit: function (e) {
        e.preventDefault();
        this.setState({errors: []});
        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        SessionActionCreators.login(email, password);
    },

    render: function () {
        var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
        return (
            <div>
                {errors}
                <div className="row">
                    <div className="card card--login col-sm-4 col-sm-offset-4">
                        <form onSubmit={this._onSubmit}>
                            <div className="form-group">
                                <label name="email">Email</label>
                                <input type="text" name="email" ref="email" className="form-control"
                                       placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label name="password">Password</label>
                                <input type="password" name="password" ref="password" className="form-control"
                                       placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LoginPage;
