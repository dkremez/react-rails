var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var Constants = require('../constants/app-constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

    receiveLogin: function (json, errors) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.LOGIN_RESPONSE,
            json: json,
            errors: errors
        });
    },

    receiveLogout: function (json, errors) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.LOGOUT,
            json: json,
            errors: errors
        });
    },

    receiveItems: function (json) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_ITEMS,
            json: json
        });
    },

    receiveItem: function (json) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_ITEM,
            json: json
        });
    },

    receiveCreatedItem: function (json, errors) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_CREATED_ITEM,
            json: json,
            errors: errors
        });
    }

};
