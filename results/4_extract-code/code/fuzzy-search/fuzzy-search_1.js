// This can be excluded when loaded via <script>
import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');

const people = [{
  name: {
    firstName: 'Jesse',
    lastName: 'Bowen',
  },
  state: 'Seattle',
}];

const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
  caseSensitive: true,
});
const result = searcher.search('ess');
