import { configure, addDecorator } from '@storybook/vue';
import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
