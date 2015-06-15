var React = require('react');

var ErrorNotice = React.createClass({
  render: function() {
    return (
      <div className="error-notice">
        <ul>
          {this.props.errors.map(function(error, index){
            return <li className="alert alert-danger" key={"error-"+index}>{error}</li>;
          })}
        </ul>
      </div>
      );
  }
});

module.exports = ErrorNotice;
