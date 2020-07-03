[![Dependency status](http://img.shields.io/david/peterdemartini/html5-to-pdf.svg?style=flat)](https://david-dm.org/peterdemartini/html5-to-pdf)
[![devDependency Status](http://img.shields.io/david/dev/peterdemartini/html5-to-pdf.svg?style=flat)](https://david-dm.org/peterdemartini/html5-to-pdf#info=devDependencies)
[![Build Status](https://travis-ci.org/peterdemartini/html5-to-pdf.svg?branch=master)](https://travis-ci.org/peterdemartini/html5-to-pdf)

Node module that converts HTML files to PDFs.

The PDF looks great because it is styled by HTML5 Boilerplate or Bootstrap. What? - Yes! HTML is pushed into the HTML5 template `index.html`. Electron renders the page and saves it to a PDF. You can customize the page by adding custom CSS and JS assets.

# v3.0.0 (BREAKING CHANGES)

* Uses [Puppeteer](https://github.com/GoogleChrome/puppeteer) in order to get more fine-grain PDF options.
* Use async/await and ES6 - no more coffee-script
* For migration in your current code, consider using the new `async` functionality in your existing promise chains (see example)

Getting started
---------------

`npm install --save html5-to-pdf`

or

`npm install --global html5-to-pdf`


Out in the Wild
--------------

### [CV](https://github.com/dwjohnston/cv/)

Uses `webpack` and `webpack-dev-server` to let you see your changes live, and has the option to publish to HTML or PDF.

Output Example usage 
--------------

```javascript
const HTML5ToPDF = require("../lib")
const path = require("path")

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "assets", "basic.html"),
    outputPath: path.join(__dirname, "..", "tmp", "output.pdf"),
    templatePath: path.join(__dirname, "templates", "basic"),
    include: [
      path.join(__dirname, "assets", "basic.css"),
      path.join(__dirname, "assets", "custom-margin.css"),
    ],
  })

  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
  console.log("DONE")
  process.exit(0)
}


// Use the function in an existing promise chain
Promise.resolve( 'something' )
.then( result => {
  return doSomething( result )
} )
.then( result => {
  // Because async functions are promises under the hood we can treat the run function as a promise
  return run()
} )
.catch( handleErrors )

// Usage in try/catch block
try {
  run()
} catch (error) {
  console.error(error)
}

```

---

Typescript
---
A Typescript definition for this library can be obtained by installing [@types/html5-to-pdf](https://www.npmjs.com/package/@types/html5-to-pdf).

Reference:
---

### Options

Options are passed into the constructor.

#### options.inputPath
Type: `String`
Required: true

Path to the input HTML

#### options.inputBody
Type: `String` or `Buffer`

Path to the input html as a `String`, or `Buffer`. If specified this will override inputPath.

#### options.outputPath
Type: `String`

Path to the output pdf file.

#### options.include
Type: `Array<Object|String>`

An array of strings or objects containing a type of `['css', 'js']` and a filePath pointing to the asset.

**Example:**

```javascript
[
  "/path/to/asset.css"
  // ...
]
```

or

```javascript
[
  {
    "type": "css",
    "filePath": "/path/to/asset.css"
  }
  // ...
]
```


#### options.renderDelay
Type: `Number`
Default value: `0`

Delay in milli-seconds before rendering the PDF (give HTML and CSS a chance to load)

#### options.template
Type: `String`
Default value: `html5bp`

The template to use when rendering the html. You can choose between `html5bp` (HTML5 Boilerplate) or `htmlbootstrap` (Boostrap 3.1.1)

#### options.templatePath
Type: `String`
Default value: the `html5-to-pdf/templates/#{options.template}`

The template to use for rendering the html. If this is set, it will use this instead of the template path.

#### options.templateUrl
Type: `String`

The url to use for rendering the html. If this is set, this will be used for serving up the html. This will override `options.templatePath` and `options.template`

#### options.pdf
Type: `Object`

This object will be passed directly to [puppeteer](https://github.com/GoogleChrome/puppeteer). The full list of options can be found [here](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions).

#### options.launchOptions
Type: `Object`

This object will be passed directly to [puppeteer](https://github.com/GoogleChrome/puppeteer). The full list of options can be found [here](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions).

### Legacy Options

**[ DEPRECATED ]**

See `options.pdf` above for pdf options. Since some of these options are converted over to work with [puppeteer](https://github.com/GoogleChrome/puppeteer), this is automatically done if `options.pdf` is left empty.

#### options.options.pageSize **[COMPATIBLE]**
Type: `String`
Default value: `A4`

'A3', 'A4', 'Legal', 'Letter' or 'Tabloid'

#### options.options.landscape **[COMPATIBLE]**
Type: `Boolean`
Default value: `false`

true for landscape, false for portrait.

#### options.options.marginsType **[NOT COMPATIBLE]**
Type: `Number`
Default value: `0`

* 0 - default
* 1 - none
* 2 - minimum

#### options.options.printBackground **[COMPATIBLE]**
Type: `Boolean`
Default value: `false`

Whether to print CSS backgrounds.

---

CLI interface
---

### Installation

To use html5-to-pdf as a standalone program from the terminal run

```sh
npm install --global html5-to-pdf
```

### Usage

```sh
Usage: html5-to-pdf [options] <path/to/html-file-path>

Options:

  -V, --version                               output the version number
  -i --include <path>..<path>                 path to either a javascript asset, or a css asset
  --page-size [size]                          'A3', 'A4', 'Legal', 'Letter' or 'Tabloid'
  --landscape                                 If set it will change orientation to landscape from portriat
  --print-background                          Whether to print CSS backgrounds
  -t --template [template]                    The template to used. Defaults to html5bp.
  --template-path [/path/to/template/folder]  Specifies the template folder path for static assets, this will override template.
  --template-url [http://localhost:8080]      Specifies the template url to use. Cannot be used with --template-path.
  -d --render-delay [milli-seconds]           Delay before rendering the PDF (give HTML and CSS a chance to load)
  -o --output <path>                          Path of where to save the PDF
  -h, --help                                  output usage information
```

---
Note for running in docker
---

See [Example Dockerfile](/examples/Dockerfile). Make sure to container with
`--cap-add=SYS_ADMIN`.

```sh
docker build -t local/html5-to-pdf-example -f examples/Dockerfile .
docker run --rm -i --cap-add=SYS_ADMIN local/html5-to-pdf-example
```

Refer to puppeteer [documentation](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker).

---
Note for running headlessly on Linux
---
_(like on a server without X)_:

html5-to-pdf uses Puppeteer, which Google Chrome Headlessly, which in turn relies on an X server to render the pdf.
If for whatever reason it can't find a running X server, it will silently fail.

To fix, just run whatever display server you prefer (that's implementing X).
If you have no X server, chances are you are running on a headless server anyway, in which case there is no point in running a full-blown GUI (that's not facing any users).
You can instead use [Xvfb](https://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml), a virtual frame buffer.

#### Installation:

    apt-get install -y libgtk2.0-0 libgconf-2-4 libasound2 libxtst6 libxss1 libnss3 xvfb

(might need sudo)
#### Usage:

    Xvfb -ac -screen scrn 1280x2000x24 :9.0 &
    export DISPLAY=:9.0

(might need sudo)

#### Troubleshooting:

It's ok if Xvfb can't find fonts or shows other warnings.
If Xvfb can't start, it probably thinks there's another X server running. Check that.
If there is no other X server running but Xvfb insists there is, run this:

    rm /tmp/.X11-unix/X1
    rm /tmp/.X1

(might need sudo)
