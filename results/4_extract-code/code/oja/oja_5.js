const Action = require('oja').Action;
class MyAction extends Action {
    execute() {
        this.define('foo', 'bar');
    }
}
new MyAction()
    .activate()
    .consume('foo', data => console.log(data)); // will print bar
