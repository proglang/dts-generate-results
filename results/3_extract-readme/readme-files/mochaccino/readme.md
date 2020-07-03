# mochaccino 1.2.0 [![Build Status](https://travis-ci.org/pawelgalazka/mochaccino.svg?branch=master)](https://travis-ci.org/pawelgalazka/mochaccino) [![npm version](https://badge.fury.io/js/mochaccino.svg)](https://badge.fury.io/js/mochaccino)
United js test tools

Mocha is great but having asserts, assert plugins and spies spread out as separate projects is a bit frustrating,
especially when you have to jump around all of the different documentations or setup test environment.

Mochaccino goals:
- documentation for expectations/spies/tests in ONE place
- providing all of the mocha important components together already setup
- shallow learning curve, quick to start and work with

## Quick start
```
npm install --save-dev mochaccino mocha babel-core babel-register babel-preset-es2015
```

add the following to your `package.json` :
```
{
 ...
 "scripts": {
   "test": "mocha --compilers js:babel-register"
 }
 "babel": {
   "presets": ["es2015"]
 }
 ...
}
```

create a directory `test` with a file `index.js`:

```javascript
import {expect, spy, dom} from 'mochaccino';

describe('mochaccino', () => {
  it('do basic expectations', () => {
    expect(true).toBeTruthy();
  });
  
  it('do spy expectations', () => {
    let s = spy();
    s(1, 2);
    expect(s).toHaveBeenCalledWith(1, 2);
  });
  
  it('do DOM testing', () => {
    dom.create();
    document.body.appendChild(document.createElement('p'));
    expect(document.getElementsByTagName('p').length).toEqual(1);
    dom.destroy();
  });
});
```
and then just run in the command line:

```
npm test
```



## Expectations

* expect(a).toBe(b)
* expect(a).toEqual(b)
* expect(a).toBeTruthy()
* expect(a).toBeFalsy()
* expect(a).toBeDefined()
* expect(a).toBeUndefined()
* expect(a).toBeNull()
* expect(a).toBeLessThan(b)
* expect(a).toBeGreaterThan(b)
* expect([1,2]).toContain(1)
* expect(f).toThrow()
* expect(f).toThrowError(ErrorType)
* expect(s).toMatch(regexp)

for spies:

* expect(s).toHaveBeenCalled()
* expect(s).toHaveBeenCalledWith(a1, a2)
* expect(s).toHaveBeenCalledTimes(n)

each expectation can be combined with `not` flag:

```javascript
expect(a).not.toBe(b)
```


## Spies

```javascript
import {spy} from 'mochaccino';
```

**spy(obj, 'funcName');** - spy on objects

```javascript
spy(obj, 'funcName');
obj.funcName();
expect(obj.funcName).toHaveBeenCalled();
```

**spy();** - create standalone spy

```javascript
let s = spy();
s();
expect(s).toHaveBeenCalled();
```

**spy(obj, 'funcName').and.callFake(func);** - spy on object and call given function instead original one

```javascript
spy(obj, 'funcName').and.callFake(() => {
  return 123;
});
expect(obj.funcName()).toEqual(123);
expect(obj.funcName).toHaveBeenCalled();
```

**spy(obj, 'funcName').restore();** - restore original behaviour by removing the spy

```javascript
spy(obj, 'funcName');
obj.funcName.restore();
```

**spy(obj, 'funcName').and.callThrough();** - spy on object but call original method

**spy(obj, 'funcName').and.returnValue(5);** - spy will return a value when called


## DOM testing

Mochaccino dom helper lets you run a dom implementation (jsdom) inside the node enviroment.
No browser required.

```javascript
import {expect, dom} from 'mochaccino';

describe('dom testing', () => {
    beforeEach(() => {
        dom.create();
    });

    afterEach(() => {
        dom.destroy();
    });

    it('should append a child to the body', () => {
        let par = document.createElement('P');
        let text = document.createTextNode('some text');
        par.appendChild(text);
        document.body.appendChild(par);
        let parCount = document.getElementsByTagName('P');

        expect(document.body.innerHTML).toBeDefined();
        expect(parCount.length).toEqual(1);
    });

    it('should not find the previously appended child', () => {
        let parCount = document.getElementsByTagName('P');

        expect(document.body.innerHTML).toEqual('');
        expect(parCount.length).toEqual(0);
    });
});
```

Unfortunately approach above is not recommended for testing React
component as React's source code makes several assumptions about
the environment it is running in, and one of them is that the
`document` that is found at "require time" is going to be
the one and only document it ever needs to worry about.
As a result, this type of "reloading" ends up causing more pain
than it prevents.

In that case `document` needs to be created only once before
requiring React. This can be done by:

```
mocha --require mochaccino/dom-setup --compilers js:babel-register
```

and then "clearing" existing document between the tests to make
sure that components do not leak:

```javascript
import React from 'react';
import { shallow } from 'enzyme';
import { expect, dom } from 'mochaccino';
import App from '../../app/components/App/App';

describe('<App>', () => {

  beforeEach(() => {
    dom.clear();
  });

  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
```
