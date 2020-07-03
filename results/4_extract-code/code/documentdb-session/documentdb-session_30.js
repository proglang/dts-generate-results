const documentdb = require('documentdb');
const DocumentDBStore = require('documentdb-session');

const store = new DocumentDBStore({ /* config options */ });

const PartitionResolver = documentdb.HashPartitionResolver;

const databaseLink = 'dbs/mysessionsdb';
const coll1 = `${databaseLink}/colls/coll1`;
const coll2 = `${databaseLink}/colls/coll2`;

const partitionFunction = doc => {
  /* your partition function */
};

const resolver = new PartitionResolver(partitionFunction, [coll1, coll2]);

store.client.partitionResolvers[databaseLink] = resolver;
