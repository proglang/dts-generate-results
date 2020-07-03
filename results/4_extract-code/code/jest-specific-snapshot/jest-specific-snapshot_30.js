const toMatchSpecificSnapshot = require('jest-specific-snapshot').toMatchSpecificSnapshot;

expect.extend({
  toMatchDecoratedSpecificSnapshot(received, snapshotFile) {
    // You can modify received data or create dynamic snapshot path
    const data = doSomeThing(received);
    return toMatchSpecificSnapshot.call(this, data, snapshotFile);
  },
});
