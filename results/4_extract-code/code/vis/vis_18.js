var moment = require('moment');
var DataSet = require('vis/lib/DataSet');
var Timeline = require('vis/lib/timeline/Timeline');

var container = document.getElementById('visualization');
var data = new DataSet([
  {id: 1, content: 'item 1', start: moment('2013-04-20')},
  {id: 2, content: 'item 2', start: moment('2013-04-14')},
  {id: 3, content: 'item 3', start: moment('2013-04-18')},
  {id: 4, content: 'item 4', start: moment('2013-04-16'), end: moment('2013-04-19')},
  {id: 5, content: 'item 5', start: moment('2013-04-25')},
  {id: 6, content: 'item 6', start: moment('2013-04-27')}
]);
var options = {};
var timeline = new Timeline(container, data, options);
