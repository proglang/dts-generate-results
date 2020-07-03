const { createReadStream, createWriteStream } = require('fs');
const { AsyncParser } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };
const transformOpts = { highWaterMark: 8192 };

const input = createReadStream(inputPath, { encoding: 'utf8' });
const output = createWriteStream(outputPath, { encoding: 'utf8' });
const asyncParser = new JSON2CSVAsyncParser(opts, transformOpts);
asyncParser.fromInput(input).toOutput(output).promise()
  .then(csv => console.log(csv))
  .catch(err => console.error(err));;
