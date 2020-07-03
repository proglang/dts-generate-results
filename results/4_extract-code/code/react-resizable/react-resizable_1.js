const Resizable = require('react-resizable').Resizable; // or,
const ResizableBox = require('react-resizable').ResizableBox;

// ES6
import { Resizable, ResizableBox } from 'react-resizable';

// ...
render() {
  return (
    <ResizableBox width={200} height={200} draggableOpts={{...}}
        minConstraints={[100, 100]} maxConstraints={[300, 300]}>
      <span>Contents</span>
    </ResizableBox>
  );
}
