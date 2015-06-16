"use strict";
var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

module.exports = {

    APIEndpoints: {
        LOGIN: APIRoot + "/v1/login",
        LOGOUT: APIRoot + "/v1/logout",
        REGISTRATION: APIRoot + "/v1/users",
        ITEMS: APIRoot + "/v1/items"
    },

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    }),

    ActionTypes: keyMirror({
        // Session
        LOGIN_REQUEST: null,
        LOGIN_RESPONSE: null,
        LOGOUT_REQUEST: null,
        LOGOUT: null,

        // Routes
        REDIRECT: null,

        LOAD_ITEMS: null,
        RECEIVE_ITEMS: null,
        LOAD_ITEM: null,
        RECEIVE_ITEM: null,
        CREATE_ITEM: null,
        RECEIVE_CREATED_ITEM: null,
        ADD_ITEM: null,
        REMOVE_ITEM: null,
        INCREASE_ITEM: null,
        DECREASE_ITEM: null
    })


};
