const VisibilitySensor = require('react-visibility-sensor');

function onChange (isVisible) {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

function MyComponent (props) {
  return (
    <VisibilitySensor onChange={onChange}>
      <div>...content goes here...</div>
    </VisibilitySensor>
  );
}
