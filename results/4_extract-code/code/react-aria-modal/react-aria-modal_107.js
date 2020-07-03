var AriaModal = require('react-aria-modal');

var MyModal = React.createClass({
  ..
  render: function() {
    return (
      <AriaModal
        onExit={this.myExitHandler}
        alert={true}
        focusDialog={true}
        titleId='modal-title'
        underlayClickExits={false}
        verticallyCenter={true}
      >
        <div
          style={{ outline: 0 }}
          className='my-modal-dialog'
        >
          <h2 id='modal-title'>Alert!</h2>
          ..
        </div>
      </AriaModal>
    )
  }
})
