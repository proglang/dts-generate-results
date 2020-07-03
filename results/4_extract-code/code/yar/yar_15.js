let options = {
    storeBlank: false,
    cookieOptions: {
        password: 'the-password-must-be-at-least-32-characters-long',
        isSecure: true
    }
};
/*
Please note that there are other default cookie options that can impact your security.
Please look at the description of the cookie options below to make sure this is doing
what you expect.
*/

const server = new Hapi.Server();

try {
  await server.register({
      plugin: require('@hapi/yar'),
      options: options
  });
} catch(err) {
    console.error(err);
}

await server.start();
