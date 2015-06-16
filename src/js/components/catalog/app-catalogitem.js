"use strict";
/** @jsx React.DOM */
var React = require('react');
var AddToCart = require('./app-addtocart.js');
var Link = require('react-router').Link;
var defaultImgPath = '/assets/product.png';

var CatalogItem =
    React.createClass({
        render: function () {
            var itemStyle = {
                padding: 10
            };
            var imgStyle = {
                width: "100%",
                height: "100%"
            };
            return (
                <div className="col-sm-3" style={itemStyle}>
                    <div className="thumbnail">
                        <img src={this.props.item.img || defaultImgPath} alt="" style={imgStyle}/>

                        <div className="caption">
                            <h3>{this.props.item.title}</h3>

                            <p>{this.props.item.summary}</p>

                            <p>${this.props.item.cost} <span
                                className="text-success">{this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}</span>
                            </p>

                            <div className="btn-group btn-group-sm">
                                <Link to={'item'} params={{item: this.props.item.id}} className="btn btn-default">Learn
                                    More</Link>
                                <AddToCart item={this.props.item}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    });
module.exports = CatalogItem;
