var AppConstants = require('../constants/app-constants.js');
var ActionTypes = AppConstants.ActionTypes;
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
    addItem: function (item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ADD_ITEM,
            item: item
        })
    },
    removeItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.REMOVE_ITEM,
            index: index
        })
    },
    decreaseItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.DECREASE_ITEM,
            index: index
        })
    },
    increaseItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.INCREASE_ITEM,
            index: index
        })
    },
    loadItems: function () {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.LOAD_ITEMS
        })
    },
}

module.exports = AppActions;
