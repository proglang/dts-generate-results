
    co(function*() {
      const fs = require('fs');
      const yaml = require('js-yaml');

      const contents = fs.readFileSync('./example/basic/file.yml');
      const parsed = yaml.safeLoad(contents);

      const mongodbUri = 'mongodb://localhost:27017/test';
      // Insert data into dookie
      // Or, at the command line:
      // `dookie push --db test --file ./example/basic/file.yml`
      yield dookie.push(mongodbUri, parsed);

      // ------------------------
      // Now that you've pushed, you should see the data in MongoDB
      const db = yield mongodb.MongoClient.connect(mongodbUri);
      const collections = (yield db.listCollections().toArray()).
        map(v => v.name).filter(v => !v.startsWith('system.')).sort();
      assert.equal(collections.length, 2);
      assert.equal(collections[0], 'bands');
      assert.equal(collections[1], 'people');

      const people = yield db.collection('people').find().toArray();
      people.forEach((person) => { person._id = person._id.toString() });
      assert.deepEqual(people, [
        { _id: '561d87b8b260cf35147998ca', name: 'Axl Rose' },
        { _id: '561d88f5b260cf35147998cb', name: 'Slash' }
      ]);
      const bands = yield db.collection('bands').find().toArray();
      assert.deepEqual(bands, [
        { _id: `Guns N' Roses`, members: ['Axl Rose', 'Slash'] }
      ]);
    })
  
