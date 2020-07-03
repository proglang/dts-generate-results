const EventHooksPlugin = require('event-hooks-webpack-plugin');

module.exports = {
    // ...
    plugins: [
        new EventHooksPlugin({
            eventName: () => {
                // ...
            }
        })
    ]
};
