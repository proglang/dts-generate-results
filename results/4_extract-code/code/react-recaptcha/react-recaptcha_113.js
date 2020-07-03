var Recaptcha = require('react-recaptcha');

// create a variable to store the component instance
let recaptchaInstance;

// manually trigger reCAPTCHA execution
const executeCaptcha = function () {
  recaptchaInstance.execute();
};

// executed once the captcha has been verified
// can be used to post forms, redirect, etc.
const verifyCallback = function (response) {
  console.log(response);
  document.getElementById("someForm").submit();
};

ReactDOM.render(
  <div>
    <form id="someForm" action="/search" method="get">
      <input type="text" name="query">
    </form>
    <button
      onClick={executeCaptcha}
    >
     Submit
    </button>

    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey="xxxxxxxxxxxxxxxxxxxx"
      size="invisible"
      verifyCallback={verifyCallback}
    />
  </div>,
  document.getElementById('example')
);
