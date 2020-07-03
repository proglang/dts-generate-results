const request = require('google-oauth-jwt').requestWithJWT();

const googleStorageOptions = {
  url: `https://www.googleapis.com/storage/v1/b/m-bucket-name/o/my-object-name`,
  qs: { alt: 'media' },
  jwt: {
      email: google.storage.credentials.client_email,
      key: google.storage.credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/devstorage.read_only']
  }
});

async function getFile(req, res, next) {
  const directory = await unzipper.Open.url(request, googleStorageOptions);
  const file = zip.files.find((file) => file.path === 'my-filename');
  return file.stream().pipe(res);
});
