const Flow = require('.').Flow;
const buffer = [];
const flow = new Flow();
// create consumer stream
const reader = flow.getReader('foo');
// generate some data
flow.define('foo', 'one');
flow.define('foo', 'two');
flow.define('foo', 'three');
flow.define('foo', null);

async function read() {
    while(true) {
        const data = await reader.next()
        if (data === undefined) {
            break;
        }
        console.log(data);
    }
}

read();
