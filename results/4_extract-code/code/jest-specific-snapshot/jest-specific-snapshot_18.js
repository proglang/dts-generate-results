// extend jest to have 'toMatchSpecificSnapshot' matcher
const addSerializer = require('jest-specific-snapshot').addSerializer;

addSerializer(/* Add custom serializer here */);

test('test', () => {
  expect(/* thing that matches the custom serializer */).toMatchSpecificSnapshot(
    './specific/custom_serializer/test.shot'
  );
});
