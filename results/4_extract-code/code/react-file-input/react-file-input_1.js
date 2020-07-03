var React = require('react'),
  FileInput = require('react-file-input');

var Form = React.createClass({
  handleChange: function(event) {
    console.log('Selected file:', event.target.files[0]);
  },

  render: function() {
    return (
      <form>
        <FileInput name="myImage"
                   accept=".png,.gif"
                   placeholder="My Image"
                   className="inputClass"
                   onChange={this.handleChange} />
      </form>
    );
  },
});

