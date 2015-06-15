/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var CatalogItem = require('./app-catalogitem.js');
var BlankPage = require('../common/blank-page.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function getCatalog(){
  return {items: AppStore.getCatalog()}
}

var Catalog =
  React.createClass({
    mixins: [new StoreWatchMixin(getCatalog)],
    render:function(){
        var items = []
        if(this.props.isLoggedIn) {
            items = this.state.items.map(function (item, i) {
                return <CatalogItem item={item} key={i} />
            });
        } else {
            items = <div className='row'><div className='col-sm-6 col-sm-offset-3'><BlankPage /></div></div>
        }
      return (
          <div className="row">
            {items}
          </div>
        )
    }
  });
module.exports = Catalog;
