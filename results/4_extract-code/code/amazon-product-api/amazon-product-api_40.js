var co = require('co');

co(function *(){

  pulpFiction   = client.itemSearch({ keywords: 'Pulp fiction',   searchIndex: 'DVD'});
  killBill      = client.itemSearch({ keywords: 'Kill Bill',      searchIndex: 'DVD'});
  reservoirDogs = client.itemSearch({ keywords: 'Reservoir Dogs', searchIndex: 'DVD'});

  movies = yield [pulpFiction, killBill, reservoirDogs];
  console.log(movies);

})();
