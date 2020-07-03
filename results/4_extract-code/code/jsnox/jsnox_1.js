var React = require('react')
var MyOtherComponent = require('./some/path.js')
var d = require('jsnox')(React)

var LoginForm = React.createClass({
    submitLogin: function() { ... },

    render: function() {
        return d('form[method=POST]', { onSubmit: this.submitLogin },
            d('h1.form-header', 'Login'),
            d('input:email[name=email]'),
            d('input:password[name=pass]'),
            d(MyOtherComponent, { myProp: 'foo' }),
            d('button:submit', 'Login')
        )
    }
})
