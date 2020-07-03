var algoliasearch = require('algoliasearch');
var algoliasearchHelper = require('algoliasearch-helper');

var client = algoliasearch('appId', 'apiKey');

var helper = algoliasearchHelper(client, 'indexName', {
  facets: ['mainCharacterFirstName', 'year'],
  disjunctiveFacets: ['director']
});

helper.on('result', function(data){
  console.log(data.hits);
});

helper.addDisjunctiveFacetRefinement('director', 'Clint Eastwood');
helper.addDisjunctiveFacetRefinement('director', 'Sofia Coppola');

helper.addNumericRefinement('year', '=', 2003);

// Search for any movie filmed in 2003 and directed by either C. Eastwood or S. Coppola
helper.search();
