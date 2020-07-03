// In a React Native application
const Parse = require('parse/react-native');

// On React Native >= 0.50 and Parse >= 1.11.0, set the Async
const AsyncStorage = require('react-native').AsyncStorage;
Parse.setAsyncStorage(AsyncStorage);
