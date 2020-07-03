const Action = require('oja').Action;
class Greet extends Action {
    execute() {
        this.define('greet', 'Hello');
    }
}
// demonstrate generic function instead of action object
function who(flow) {
    // demonstrate re-mapping
    flow.consume('name', name => {
        flow.define('who', name);
    });
}
class Greeting extends Action {
    execute() {
        this.consume(['greet', 'who'], data => {
            this.define('greeting', `${data.greet} ${data.who}`)
        });
    }
}
const helloAction = new Greeting();
helloAction
    .add(new Hello())
    .add(who)
    .activate()
    .define('name', 'World')
    .consume('greeting', console.log); // prints Hello World
