/** @jsx React.DOM */
var Loader = require('react-loader');

var MyComponent = React.createClass({
  getInitialState: function () {
    return { loaded: false, profile: null };
  },

  componentDidMount: function () {
    new Profile({ id: this.props.id }).fetch({
      success: this.onSuccess,
      error: this.onError
    })
  },

  onSuccess: function (profile) {
    this.setState({ profile: profile, loaded: true });
  },

  onError: function (err) {
    // error handling goes here
  },

  render: function () {
    return (
      <Container>
        <Header>My Profile</Header>
            <Loader loaded={this.state.loaded}>
              <Profile model={this.state.profile} />
            </Loader>
      </Container>
    );
  }
});
