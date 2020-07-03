var tldjs = require('tldjs');

tldjs.parse('https://spark-public.s3.amazonaws.com/dataanalysis/loansData.csv');
// { hostname: 'spark-public.s3.amazonaws.com',
//   isValid: true,
//   isIp: false,
//   tldExists: true,
//   publicSuffix: 's3.amazonaws.com',
//   domain: 'spark-public.s3.amazonaws.com',
//   subdomain: ''
// }

tldjs.parse('gopher://domain.unknown/');
// { hostname: 'domain.unknown',
//   isValid: true,
//   isIp: false,
//   tldExists: false,
//   publicSuffix: 'unknown',
//   domain: 'domain.unknown',
//   subdomain: ''
// }

tldjs.parse('https://192.168.0.0')
// { hostname: '192.168.0.0',
//   isValid: true,
//   isIp: true,
//   tldExists: false,
//   publicSuffix: null,
//   domain: null,
//   subdomain: null
// }
