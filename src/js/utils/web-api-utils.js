var ServerActionCreators = require('../actions/server-actions.js');
var Constants = require('../constants/app-constants.js');
var request = require('superagent');

function _getErrors(res) {
    var errorMsgs = ["Something went wrong, please try again"];
    if ((json = JSON.parse(res.text))) {
        if (json['errors']) {
            errorMsgs = json['errors'];
        } else if (json['error']) {
            errorMsgs = [json['error']];
        }
    }
    return errorMsgs;
}

var APIEndpoints = Constants.APIEndpoints;

module.exports = {

    login: function (email, password) {
        request.post(APIEndpoints.LOGIN)
            .send({user: {email: email, password: password, grant_type: 'password'}})
            .set('Accept', 'application/json')
            .end(function (error, res) {
                if (res) {
                    if (res.error) {
                        var errorMsgs = _getErrors(res);
                        ServerActionCreators.receiveLogin(null, errorMsgs);
                    } else {
                        json = JSON.parse(res.text);
                        ServerActionCreators.receiveLogin(json, null);
                    }
                }
            });
    },

    signup: function (email, username, password, passwordConfirmation) {
        request.post(APIEndpoints.REGISTRATION)
            .send({
                user: {
                    email: email,
                    username: username,
                    password: password,
                    password_confirmation: passwordConfirmation
                }
            })
            .set('Accept', 'application/json')
            .end(function (error, res) {
                if (res) {
                    if (res.error) {
                        var errorMsgs = _getErrors(res);
                        ServerActionCreators.receiveLogin(null, errorMsgs);
                    } else {
                        json = JSON.parse(res.text);
                        ServerActionCreators.receiveLogin(json, null);
                    }
                }
            });
    }
    // ...
};
