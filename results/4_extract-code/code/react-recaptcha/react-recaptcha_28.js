var Recaptcha = require('react-recaptcha');

// specifying your onload callback function
var callback = function () {
  console.log('Done!!!!');
};

// specifying verify callback function
var verifyCallback = function (response) {
  console.log(response);
};

ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
    render="explicit"
    verifyCallback={verifyCallback}
    onloadCallback={callback}
  />,
  document.getElementById('example')
);
