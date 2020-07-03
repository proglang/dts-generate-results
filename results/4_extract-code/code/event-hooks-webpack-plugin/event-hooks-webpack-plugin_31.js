const EventHooksPlugin = require('event-hooks-webpack-plugin');
const { PromiseTask } = require('event-hooks-webpack-plugin/lib/tasks');

module.exports = {
    // ...
    plugins: [
        new EventHooksPlugin({
            eventName: new PromiseTask(async () => {
                // ...
            })
        })
    ]
};
