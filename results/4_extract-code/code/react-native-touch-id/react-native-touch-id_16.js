import React from "react"
var TouchID = require('react-native-touch-id');
//or import TouchID from 'react-native-touch-id'

class YourComponent extends React.Component {
  _pressHandler() {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  },

  render() {
    return (
      <View>
        ...
        <TouchableHighlight onPress={this._pressHandler}>
          <Text>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};
