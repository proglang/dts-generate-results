const React = require('react');
const ReactDOM = require('react-dom');

const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

const config = {
  /* HighchartsConfig */
};

ReactDOM.render(<ReactHighcharts config = {config}></ReactHighcharts>, document.body);
