var Recaptcha = require('react-recaptcha');

// create a variable to store the component instance
let recaptchaInstance;

// create a reset function
const resetRecaptcha = () => {
  recaptchaInstance.reset();  
};

ReactDOM.render(
  <div>
    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey="xxxxxxxxxxxxxxxxxxxx"
    />
    <button
      onClick={resetRecaptcha}
    >
     Reset
    </button>
  </div>,
  document.getElementById('example')
);
