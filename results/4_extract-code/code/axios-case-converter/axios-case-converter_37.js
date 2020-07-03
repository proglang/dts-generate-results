import { Platform } from 'react-native';

// ...

if (Platform.OS === 'android') {
  require('./polyfill.js');
}
