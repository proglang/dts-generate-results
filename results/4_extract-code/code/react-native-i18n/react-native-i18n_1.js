import I18n from 'react-native-i18n';
// OR const I18n = require('react-native-i18n').default

class Demo extends React.Component {
  render() {
    return <Text>{I18n.t('greeting')}</Text>;
  }
}

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  fr: {
    greeting: 'Bonjour!',
  },
};
