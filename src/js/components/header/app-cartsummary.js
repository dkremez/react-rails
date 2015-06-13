/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var AppStore = require('../../stores/app-store');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function CartTotals(){
  return AppStore.getCartTotals();
}


var CartSummary =
  React.createClass({
    mixins:[StoreWatchMixin(CartTotals)],
    render:function(){
      return (
        <div>
          <Link
            to="/cart"
            className="btn btn-success">
            Cart Items: {this.state.qty} / ${this.state.total}
            </Link>
        </div>

        )
    }
  });
module.exports = CartSummary;
