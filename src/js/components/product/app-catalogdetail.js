/** @jsx React.DOM */
'use strict';
var React = require('react');
var AddToCart = require('../catalog/app-addtocart.js');
var Link = require('react-router').Link;
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function getCatalogItem(component){
  return {item: AppStore.getItem(component.props.params.item)};
}

var CatalogDetail =
  React.createClass({
    mixins: [new StoreWatchMixin(getCatalogItem)],
    render:function(){
      return (
          <div>
            <h2>{this.state.item.title}</h2>
            <img src={this.state.item.img} alt="" />
            <p>{this.state.item.description}</p>
            <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
            <div className="btn-group btn-group-sm">
              <AddToCart item={this.state.item} />
              <Link to={'/'} className="btn btn-default">Continue Shopping</Link>
            </div>
          </div>
        )
    }
  });

module.exports = CatalogDetail;
