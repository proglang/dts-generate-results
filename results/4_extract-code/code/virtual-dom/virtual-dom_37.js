var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');

function render(data) {
    return new VNode('div', {
        className: "greeting"
    }, [
        new VText("Hello " + String(data.name))
    ]);
}

module.exports = render;
