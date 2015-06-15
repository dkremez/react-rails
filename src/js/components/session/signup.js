var React = require('react');
var SessionActionCreators = require('../../actions/session-actions.js');
var SessionStore = require('../../stores/session-store.js');
var ErrorNotice = require('../../components/common/error-notice.js');

var SignupPage = React.createClass({

  getInitialState: function() {
    return { errors: [] };
  },

  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ errors: SessionStore.getErrors() });
  },

  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var email = this.refs.email.getDOMNode().value;
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var passwordConfirmation = this.refs.passwordConfirmation.getDOMNode().value;
    if (password !== passwordConfirmation) {
      this.setState({ errors: ['Password and password confirmation should match']});
    } else {
      SessionActionCreators.signup(email, username, password, passwordConfirmation);
    }
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <div className="card card--login col-sm-4 col-sm-offset-4">
            <form onSubmit={this._onSubmit}>
              <div className="form-group">
                <label name="email">Email</label>
                <input type="text" name="email" ref="email" className="form-control" />
              </div>
              <div className="form-group">
                <label name="username">Username</label>
                <input type="text" name="username" ref="username" className="form-control" />
              </div>
              <div className="form-group">
                <label name="password">Password</label>
                <input type="password" name="password" ref="password" className="form-control" />
              </div>
              <div className="form-group">
                <label name="password-confrimation">Password confirmation</label>
                <input type="password" name="password-confirmation" ref="passwordConfirmation" className="form-control" />
              </div>
              <button type="submit" className="btn btn-default">Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SignupPage;
