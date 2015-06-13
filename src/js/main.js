/** @jsx React.DOM */
var React = require('react');
var Catalog = require('./components/catalog/app-catalog.js');
var Cart = require('./components/cart/app-cart.js');
var CatalogDetail = require('./components/product/app-catalogdetail.js');
var Template = require('./components/app-template.js');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route path="/" handler={Template}>
    <DefaultRoute handler={Catalog} />
    <Route path="/cart" handler={Cart} />
    <Route path="/item/:item" name='item' handler={CatalogDetail} />
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});
