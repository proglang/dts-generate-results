    const { Transform } = require("json2csv");
    const { Readable } = require('stream');

    const input = new Readable({ objectMode: true });
    input._read = () => {};
    // myObjectEmitter is just a fake example representing anything that emit objects.
    myObjectEmitter.on('object', obj => input.push(obj));
    // Pushing a null close the stream
    myObjectEmitter.end(()) => input.push(null));

    const output = process.stdout;

    const opts = {};
    const transformOpts = { objectMode: true };

    const json2csv = new Transform(opts, transformOpts);
    const processor = input.pipe(json2csv).pipe(output);
