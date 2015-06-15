var Dispatcher = require('./dispatcher.js');
var merge = require('react/lib/Object.assign');

var AppDispatcher = merge(Dispatcher.prototype, {
    handleViewAction: function (action) {
        console.log('action', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    },

    handleServerAction: function (action) {
        console.log('action', action);
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        })
    },
})

module.exports = AppDispatcher;
