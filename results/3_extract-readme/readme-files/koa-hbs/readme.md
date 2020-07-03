[koa]:https://github.com/koajs/koa/
[handlebars]:http://handlebarsjs.com

koa-hbs [![Build Status](https://travis-ci.org/koajs/koa-hbs.svg?branch=master)](https://travis-ci.org/koajs/koa-hbs)
=======

[Handlebars][handlebars] templates for [Koa][koa]

## &nbsp;
<p align="center">
  <b>:rocket: &nbsp; Are you ready to tackle ES6 and hone your JavaScript Skills?</b> &nbsp; :rocket:<br/>
  Check out these outstanding <a href="https://es6.io/friend/POWELL">ES6 courses</a> by <a href="https://github.com/wesbos">@wesbos</a>
</p>

---

## Usage
koa-hbs is middleware. We stash an instance of koa-hbs for you in the library
so you don't have to manage it separately. Configure the default instance by
passing an [options](#options) hash to #middleware. To render a template then,
just `yield this.render('templateName');`. Here's a basic app demonstrating all that:

```javascript
var koa = require('koa');
var hbs = require('koa-hbs');

var app = koa();

// koa-hbs is middleware. `use` it before you want to render a view
app.use(hbs.middleware({
  viewPath: __dirname + '/views'
}));

// Render is attached to the koa context. Call `this.render` in your middleware
// to attach rendered html to the koa response body.
app.use(function *() {
  yield this.render('main', {title: 'koa-hbs'});
})

app.listen(3000);
```

After a template has been rendered, the template function is cached. `#render`
accepts two arguments - the template to render, and an object containing local
variables to be inserted into the template. The result is assigned to Koa's
`this.response.body`.

## Options
The plan for koa-hbs is to offer identical functionality as express-hbs
(eventaully). These options are supported _now_.

#### `viewPath` _required_
Type: `Array|String`  
Full path from which to load templates

#### `handlebars`
Type:`Object:Handlebars`  
Pass your own instance of handlebars

#### `templateOptions`
Type: `Object`  
Hash of [handlebars options](http://handlebarsjs.com/execution.html#Options) to
pass to `template()`

#### `extname`
Type:`String`  
Alter the default template extension (default: `'.hbs'`)

#### `partialsPath`
Type:`Array|String`  
Full path to partials directory

#### `defaultLayout`
Type:`String`  
Name of the default layout

#### `layoutsPath`
Type:`String`  
Full path to layouts directory

#### `contentHelperName`
Type:`String`  
Alter `contentFor` helper name

#### `blockHelperName`
Type:`String`  
Alter `block` helper name

#### `disableCache`
Type:`Boolean`  
Disable template caching

## Registering Helpers
Helpers are registered using the #registerHelper method. Here is an example
using the default instance (helper stolen from official Handlebars
[docs](http://handlebarsjs.com):

```javascript
hbs = require('koa-hbs');

hbs.registerHelper('link', function(text, url) {
  text = hbs.Utils.escapeExpression(text);
  url  = hbs.Utils.escapeExpression(url);

  var result = '<a href="' + url + '">' + text + '</a>';

  return new hbs.SafeString(result);
});
```
Your helper is then accessible in all views by using, `{{link "Google" "http://google.com"}}`

The `registerHelper`, `Utils`, and `SafeString` methods all proxy to an
internal Handlebars instance. If passing an alternative instance of
Handlebars to the middleware configurator, make sure to do so before
registering helpers via the koa-hbs proxy of the above functions, or
just register your helpers directly via your Handlebars instance.

You can also access the current Koa context in your helper. If you want to have
a helper that outputs the current URL, you could write a helper like the following
and call it in any template as `{{requestURL}}`.

```
hbs.registerHelper('requestURL', function() {
  var url = hbs.templateOptions.data.koa.request.url;
  return url;
});
```

## Registering Partials
The simple way to register partials is to stick them all in a directory, and
pass the `partialsPath` option when generating the middleware. Say your views
are in `./views`, and your partials are in `./views/partials`. Configuring the
middleware via

```
app.use(hbs.middleware({
  viewPath: __dirname + '/views',
  partialsPath: __dirname + '/views/partials'
}));
```

will cause them to be automatically registered. Alternatively, you may register
partials one at a time by calling `hbs.registerPartial` which proxies to the
cached handlebars `#registerPartial` method.

## Layouts
Passing `defaultLayout` with the a layout name will cause all templates to be
inserted into the `{{{body}}}` expression of the layout. This might look like
the following.

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  {{{body}}}
</body>
</html>
```

In addition to, or alternatively, you may specify a layout to render a template
into. Simply specify `{{!< layoutName }}` somewhere in your template. koa-hbs
will load your layout from `layoutsPath` if defined, or from `viewPath`
otherwise. If `viewPath` is set to an Array of paths, **_the first path in the
array will be assumed to contain the layout named._**

At this time, only a single content block (`{{{body}}}`) is supported.

## Overriding Layouts using Locals

As of version 0.9.0, it's possible to override the layout used for rendering,
using `locals`. For example:

```js
router.get('/', function *() {
  yield this.render('foo', {
    layout: 'bar'
  });
 });
 ```

See the [tests](https://github.com/gilt/koa-hbs/blob/master/test/app/index.js#L44)
for more.

## Block content
Reserve areas in a layout by using the `block` helper like so.

```html
{{#block "sidebar"}}
  <!-- default content for the sidebar block -->
{{/block}}
```

Then in a template, use the `contentFor` helper to render content into the
block.

```html
{{#contentFor "sidebar"}}
  <aside>
    <h2>{{sidebarTitleLocal}}</h2>
    <p>{{sidebarContentLocal}}</p>
  </aside>
{{/contentFor}}
```

## Disable Template Caching
To disable the caching of templates and partials, use the `disableCache` option.
Set this option to `true` to disable caching. Default is `false`.
*Remember to set this option to `false` for production environments, or performance
could be impacted!*

## Locals

Application local variables (```[this.state](https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxstate)```) are provided to all templates rendered within the application.

```javascript
app.use(function *(next) {
  this.state.title = 'My App';
  this.state.email = 'me@myapp.com';
  yield next;
});
```

The state object is a JavaScript Object. The properties added to it will be
exposed as local variables within your views.

```
<title>{{title}}</title>

<p>Contact : {{email}}</p>
```

## Koa2

Koa2 is supported via the `@next` module version. It is considered experimental
and **_requires Node v7 or higher_**. You can obtain this version by running:

```bash
npm install koa-hbs@next --save
```

For information on using this version, please read the branch's
[README](https://github.com/gilt-labs/koa-hbs/tree/next). If using a version of
node older than v7.6, we recommend using
[harmonica](https://www.npmjs.com/package/harmonica) to enable the `--harmony`
flags, which activates native `async/await` support.


If you'd rather not use an experimental version, or you need to use an older
version of Node, you can reference this example
repo that demonstrates how to use `koa-hbs` with Koa2:
[koa-hbs-koa2-howto](https://github.com/shellscape/koa-hbs-koa2-howto)

Credit to [@chrisveness](https://github.com/chrisveness) for the initial investigation.

## Example
You can run the included example via `npm install koa` and
`node --harmony app.js` from the example folder.

## Unsupported Features

Here's a few things _koa-hbs_ does not plan to support unless someone can
provide really compelling justification.

### Async Helpers
_koa-hbs_ does not support asynchronous helpers. No, really - just load your
data before rendering a view. This helps on performance and separation of
concerns in your app.

## Handlebars Version

As of koa-hbs@0.9.0, the version of the Handlebars dependency bundled with this
module has been updated to 4.0.x. If this causes conflicts for your project, you
may pass your own instance of Handlebars to the module, or downgrade to the last
0.8.x version.

## Credits
Functionality and code were inspired/taken from
[express-hbs](https://github.com/barc/express-hbs/).
Many thanks to [@jwilm](https://github.com/jwilm) for authoring this middleware.

[travis-badge]: https://travis-ci.org/gilt/koa-hbs.png?branch=master
[repo-url]: https://travis-ci.org/gilt/koa-hbs
