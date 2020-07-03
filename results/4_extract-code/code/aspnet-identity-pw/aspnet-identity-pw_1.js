  var passwordHasher = require('aspnet-identity-pw');
  
  var hashedPassword = passwordHasher.hashPassword('SomePassword');
  
  var isValid = passwordHasher.validatePassword('SomePassword', hashedPassword);
  ```

