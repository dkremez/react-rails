"use strict";
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = AppConstants.ActionTypes;
var request = require('superagent');
var APIEndpoints = AppConstants.APIEndpoints;

var CHANGE_EVENT = "change";


var _catalog = [];

function _getErrors(res) {
    var errorMsgs = ["Something went wrong, please try again"];
    var json = JSON.parse(res.text);
    if (json) {
        if (json['errors']) {
            errorMsgs = json['errors'];
        } else if (json['error']) {
            errorMsgs = [json['error']];
        }
    }
    return errorMsgs;
}

function _getItems() {
    request.get(APIEndpoints.ITEMS)
        .set('Accept', 'application/json')
        .end(function (error, res) {
            if (res) {
                if (res.error) {
                    var errorMsgs = _getErrors(res);
                    console.log(errorMsgs);
                } else {
                    var json = JSON.parse(res.text);
                    _catalog = json['items'];
                    AppStore.emitChange();
                }
            }
        });
}

var _cartItems = [];


function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

function _increaseItem(index) {
    _cartItems[index].qty++;
}

function _decreaseItem(index) {
    if (_cartItems[index].qty > 1) {
        _cartItems[index].qty--;
    }
    else {
        _removeItem(index);
    }
}

function _addItem(item) {
    if (!item.inCart) {
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
    }
    else {
        _cartItems.forEach(function (cartItem, i) {
            if (cartItem.id === item.id) {
                _increaseItem(i);
            }
        });
    }
}

function _cartTotals() {
    var qty = 0, total = 0;
    _cartItems.forEach(function (cartItem) {
        qty += cartItem.qty;
        total += cartItem.qty * cartItem.cost;
    });
    return {'qty': qty, 'total': total};
}

var AppStore = merge(EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    getCart: function () {
        return _cartItems
    },

    getCatalog: function () {
        if (!_catalog.length)
            _getItems();
        return _catalog
    },

    getItem: function (id) {
        var thisItem
        _catalog.forEach(function (item) {
            if (item.id.toString() === id) {
                thisItem = item;
            }
        });
        return thisItem;
    },

    getCartTotals: function () {
        return _cartTotals();
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action; // this is our action from handleViewAction
        switch (action.actionType) {
            case ActionTypes.ADD_ITEM:
                _addItem(payload.action.item);
                break;
            case ActionTypes.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;

            case ActionTypes.INCREASE_ITEM:
                _increaseItem(payload.action.index);
                break;

            case ActionTypes.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
                break;

            case ActionTypes.LOAD_ITEMS:
                this.getCatalog();
                break;
        }
        AppStore.emitChange();

        return true;
    })
});

module.exports = AppStore;
