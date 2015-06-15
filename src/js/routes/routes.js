var React = require('react');
var Catalog = require('../components/catalog/app-catalog.js');
var Cart = require('../components/cart/app-cart.js');
var CatalogDetail = require('../components/product/app-catalogdetail.js');
var Template = require('../components/app-template.js');
var LoginPage = require('../components/session/login.js');
var SignupPage = require('../components/session/signup.js');
var BlankPage = require('../components/common/blank-page.js');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route path="/" handler={Template}>
    <DefaultRoute handler={Catalog} />
    <Route name="catalog" path="/catalog" handler={Catalog} />
    <Route name="cart" path="/cart" handler={Cart} />
    <Route name="item" path="/item/:item" handler={CatalogDetail} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <NotFoundRoute handler={BlankPage} />
  </Route>
);

module.exports = routes;
