const createXpub = require('create-xpub');

const tpub = createXpub({
  networkVersion: createXpub.testnet,
  depth: 3,
  childNumber: 2147483648,
  chainCode: '84cf7d9029cdd9fcadbb3717fd92ec0db7d7d9787c57c13c08fc887c389b566b',
  publicKey: '048bcdcf59f046b13f1eb35b608d1211265fde8cc44fc7a5a7f7107c5cf238095328a0e0d7be17c7d3e48490e8c6433af6d2c3dacc687f3fecaa98a3d05f17de97'
});
// => 'tpubDD3z8RPRoNYRcwRJ9JPyPgkgdiyE6Eghiud3R8ThkD2hdAXgTJh7WUTEg6mxskyBP3Fb1NnwahnwgdgC3DgYe3MRfZd2NYLWLkmBn7UWZXk'
