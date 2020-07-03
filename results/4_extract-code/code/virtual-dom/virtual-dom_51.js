var h = require('virtual-dom/h');

function render(data) {
    return h('.greeting', ['Hello ' + data.name]);
}

module.exports = render;
