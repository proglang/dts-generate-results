import TextareaAutosize from 'react-textarea-autosize';

// If you use CommonJS syntax:
// var TextareaAutosize = require('react-textarea-autosize').default;

React.renderComponent(
  <div>
    <TextareaAutosize />
  </div>,
  document.getElementById('element')
);
