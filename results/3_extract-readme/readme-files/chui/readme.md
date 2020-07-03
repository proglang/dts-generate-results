chui
=======
[![npm version](https://badge.fury.io/js/chui.svg)](https://badge.fury.io/js/chui)

[![NPM](https://nodei.co/npm/chui.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/chui/)

![Example Apps Built with ChocolateChip-UI](./Landing-Page.png)

- Make mobile web apps
- Get hard work done fast
- Use platform-specific themes


For iOS, ChocolateChip-UI supports versions 9 and 10 using Swift 3 and WkWebView for fast JavaScript rendering. For Android it supports Jelly Bean up to Nougat (4.2 - 7.0).

Installation
------------

Just run (depending on your setup, you may need to run it with `sudo`):

```sh
npm i -g chui
```


Updating
--------

`chui` is dependent on `chocolatechipui` for its resources. Since we update `chocolatechipui` frequently, it's a good idea to run `npm update` at least once a week. This will pull down the latest version for `chui` to use.

Testing
-------

You can test this after running `npm i` in this directory. The tests use Mocha and Chai. Because this tool create folders and files on the user's desktop, we do not physically test for those results. Instead we use mocks of internal functions to test the logic used to determine who files should be created. To run the tests:

```sh
npm test
```

Creating Projects
-----------------

`Chui` helps you quickly create a ChocolateChip-UI project. There are two types of projects: 

When you create a project, `chui` add Rollup and Babel to the build process. This lets you write your code with modern ES6 code patterns and transpile it to work on older Android phones.

To create a simple JavaScript project without the need to running a server, you have the following options:

1. -n (project name)
2. -o (ios or android)
3. -t (basic, navigation, slideout, tabbar)
4. -x (support for JSX)

Here are example's of using `chui` with these options:

```sh
# For Android:
chui -n myProject -o android -t basic
chui -n myProject -o android -t navigation
chui -n myProject -o android -t slideout
chui -n myProject -o android -t tabbar
# Default (basic):
chui -n myProject -o android
# Same project with support for JSX:
chui -n myProject -o android -x
```

```sh
# For iOS:
chui -n myProject -o ios -t basic
chui -n myProject -o ios -t navigation
chui -n myProject -o ios -t slideout
chui -n myProject -o ios -t tabbar
# Default (basic):
chui -n myProject
# Same project with support for JSX:
chui -n myProject -x
```

If you leave off the  `-o` flag, it will default to iOS. Similarly, if you leave off the `-t` flag it will default to type basic. So, you could create a basic project with this:

```
// Basic iOS project:
chui -n myProject

// Basic Anrdroid project:
chui -n myProject -o android
```

Paths
-----

You can provide a path for where you want to create your project. You do this with the `-p` flag. The path should be appropriate for the platform you are on. Paths for Linux and Mac will be different from paths for Windows:

```sh
// For Mac:
chui -n myProj -o andoid -t navigation -p "~/Documents/Dev"

// For Windows:
chui -n myProj -o andoid -t navigation -p "~\Documents\Dev"
```

Build Your Project
------------------

After creating a project, you'll need to build it before launching it in a browser. Chui provides everything to make this easy for you.

After creating a project, `cd` to the project folder and run:

```sh
npm i
```
When that finishes, just run:

```sh
gulp
```

This will run Rollup, which will bundle your files, then transpile the result with Babel. It will also launch watchers on you `index.html` file and the contents of your project's `dev` folder. Finally, it will launch your app in the default browser. 

Running gulp will build and launch your project in your default browser. It will also watch your dev folder and reload the browser whenever you make and save chages to the code in that folder.

When you create a new project for ES6, you'll find all your development code in the project's `dev` folder. When you run `gulp`, it takes those files and compiles them into ES5 and puts them in the `js` folder, which your project loads.

Importing Utilities and Widgets
-------------------------------

After creating a project, you can go the the `app.js` file in your project's `dev` folder. This is the core of your app. In that file you can import whatever utilities and widgets you will need for you app:

```javascript
import './src/widgets/switches';
import './src/widgets/range';
import './src/widgets/popup';
import './src/utils/debounce';
import './src/utils/capitalize';
```

You may also need to import widgets, components, and other resources into your project's other files. Make sure you have the paths correct for importation. You'll get an error message during build time about a file being ENOENT. This means the import couldn't find the file. Either it does not exist (possibly you forgot to create it or put it in another location), or the path you are using to import it is wrong.

Hybrid Apps
-----------

Chui can also convert your completed app into a hybrid app for Android and iOS. It does this by create a simple webview shell that loads your web app. This allows your to open your Android project in Android Studio and your iOS porject in Xcode. You can then build and test these on the respective emulator/simulator or load them directly on tethered devices. When you're satisfied with the performance of your app, you can then submit it for review on Android Play or the Apple App Store.

To create a hybrid app, you use the `-h` flag. You can also use the `-w` followed by the path to your web app. After typing `-w` followed by a space, you can drag your project folder on to the terminal, and the path will be added automatically. Or you can leave `-w` out and copy your app in later. To do this for iOS, open the Xcode project and copy your app's files into the `Website` folder. For Android, copy your app's files into the Android Studio Project's assets folder at `app/src/main/assets`.

Icons
-----

When you create a hybrid app for Android or iOS, `chui` includes default icons for your app. You'll of course want to replace those with ones for your app. Android and iOS put have different sized apps and store them in different places. Note down the dimensions of the icons provided in your hybrid project and replace them with your custom images with the same dimensions and names. 

Website
-------
You can learn about how to build apps with ChocolateChip-UI at the website: [chocolatechip-ui.github.io](https://chocolatechip-ui.github.io).


Installing ChUI for Older Versions of ChocolateChip-UI
------------------------------------------------------

__ChocolateChip-UI Version 3.x__

If you want to create a project for an earlier version of ChocolateChip-UI (version 3.9.2), use chui 1.2.13:

```sh
npm i -g chui@1.2.13
```

__ChocolateChip-UI Version 4.x__

And for support for ChocolateChip-UI version 3.9.x, run:

```sh
npm i -g chui@2.6.10
```

Please be aware that this might pull in ChocolateChip-UI version 5.x as a dependency. If it did, you'll need to go to where your ChUI module is installed on your system (`usr/local/lib/node_modules/chui` on Linux and macOS, `C:\Users\<your_user_name>\AppData\Roaming\npm\node_modules\chui` on Windows). Open the `chui` folder and replace the `chocolatechipui` folder with version 4.9.10.
