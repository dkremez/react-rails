var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var Constants = require('../constants/app-constants.js');
var WebAPIUtils = require('../utils/web-api-utils.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

    signup: function (email, password, passwordConfirmation) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.SIGNUP_REQUEST,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation
        });
        WebAPIUtils.signup(email, password, passwordConfirmation);
    },

    login: function (email, password) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.LOGIN_REQUEST,
            email: email,
            password: password
        });
        WebAPIUtils.login(email, password);
    },

    logout: function () {
        AppDispatcher.handleViewAction({
            type: ActionTypes.LOGOUT
        });
    }

};
