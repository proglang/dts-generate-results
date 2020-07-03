var b = require('b_').with('b-button');
// or
var b = require('b_').lock('b-button');
// which is `require('b_').bind(null, 'b-button');` but much convenient

function render() {
    return (
        <div className={b()}>
            <span className={b('icon', {type: 'add'})}></span>
            <span className={b('text')}></span>
        </div>
        <div className={b({size: 'small'})}>
            <span className={b('icon', {type: 'add'})}></span>
            <span className={b('text')}></span>
        </div>
    );
}
