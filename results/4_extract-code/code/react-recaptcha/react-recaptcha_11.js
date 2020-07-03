var Recaptcha = require('react-recaptcha');

// specifying your onload callback function
var callback = function () {
  console.log('Done!!!!');
};

ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
    render="explicit"
    onloadCallback={callback}
  />,
  document.getElementById('example')
);
