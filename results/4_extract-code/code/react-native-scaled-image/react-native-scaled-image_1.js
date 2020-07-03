import { Component } from 'react';
import ScaledImage from 'react-native-scaled-image';

const localImage = require('images/local-image.png');

class CustomView extends Component {

  render() {
    return (
      <ScaledImage source={localImage} height={100} />
    );
  }
}
