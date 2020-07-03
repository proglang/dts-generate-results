const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['h1', 'h2'], localDataCenter: 'datacenter1', keyspace: 'ks1' });

const query = 'SELECT name, email FROM users WHERE key = ?';
client.execute(query, [ 'someone' ])
  .then(result => console.log('User with email %s', result.rows[0].email));
