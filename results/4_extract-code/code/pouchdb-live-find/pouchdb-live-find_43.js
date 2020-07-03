var debounce = require('lodash.debounce');
var debouncedRefresh = debounce(refreshUI, 50);

liveFeed.on('update', function(update, aggregate) {
  debouncedRefresh(aggregate);
});
