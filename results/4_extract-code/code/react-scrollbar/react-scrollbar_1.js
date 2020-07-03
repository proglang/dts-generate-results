    var React = require('react');
    var ReactDOM = require('react-dom');
    var ScrollArea = require('react-scrollbar');

    var App = React.createClass({
      render() {
        return (
          <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >
            <div>Some long content.</div>
          </ScrollArea>
        );
      }
    });

    ReactDOM.render(<App/>, document.body);
