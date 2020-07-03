const EventHooksPlugin = require('event-hooks-webpack-plugin');
const { CallbackTask } = require('event-hooks-webpack-plugin/lib/tasks');

module.exports = {
    // ...
    plugins: [
        new EventHooksPlugin({
            eventName: new CallbackTask((compiler, callback) => {
                // ...
                callback();
            })
        })
    ]
};
