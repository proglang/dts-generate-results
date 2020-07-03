import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

// for Vue storybook 
import { addReadme } from 'storybook-readme/vue'; // <---- vue subpackage

// for HTML storybook 
import { addReadme } from 'storybook-readme/html'; // <---- html subpackage

addDecorator(addReadme);

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
