const generateSecureRandom = require('react-native-securerandom').generateSecureRandom
const format = require('nanoid/async/format')
const url = require('nanoid/url')

async function createUser () {
  user.id = await format(generateSecureRandom, url, 21);
}
