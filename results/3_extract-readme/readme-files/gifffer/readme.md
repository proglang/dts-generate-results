# Gifffer

---

> JavaScript library that prevents the autoplaying of the animated Gifs.

## Demo

[http://krasimir.github.io/gifffer](http://krasimir.github.io/gifffer)

## Usage

Include `gifffer.min.js` in your page.

```html
<script type="text/javascript" src="gifffer.min.js"></script>
```

Instead of setting `src` attribute on your image use `data-gifffer`.

```html
<img data-gifffer="image.gif" />
```

At the end, call `Gifffer();` so you replace the normal gifs with playable gifs. For example:

```js
window.onload = function() {
  Gifffer();
}
```

For accessibility reasons, instead of setting `alt` attribute on your image, you may use `data-gifffer-alt` (optional).

```html
<img data-gifffer="image.gif" data-gifffer-alt="some alt description"/>
```

The Gifffer function returns an array of nodes that could be used to simulate clicks. For Example:

```js
window.onload = function() {
  var gifs = Gifffer();

  setTimeout( function() {
    gifs[0].click(); //will play the first gif
  }, 1000);
}
```

Gifffer will show the controls immediately if you set `data-gifffer-width` and `data-gifffer-height` even if the image is not fully loaded.

```html
<img data-gifffer="image.gif" data-gifffer-width="250" data-gifffer-height="237" />
```

*(`data-gifffer-width` accepts percentages value)*

Have in mind that the library keeps the value of the `class` and `id` attributes. They are applied to the newly created element.

If you want to stop the Gif and reset it to its original position afetr a given time interval use `data-gifffer-duration` (in milliseconds).

```
<img data-gifffer="image.gif" data-gifffer-duration="4000" data-gifffer-width="250" data-gifffer-height="237" />
```

### Module Loading (Webpack or Angular ect)

Install npm module

```
npm i --save gifffer
```

Import

```
import Gifffer from 'gifffer';

let gifs = Gifffer();
```

### Typescript

```
npm i --save-dev @types/gifffer
```

## Styling

The `Gifffer()` function accepts a few options for styling:

```
Gifffer({
  playButtonStyles: {
    'width': '60px',
    'height': '60px',
    'border-radius': '30px',
    'background': 'rgba(0, 0, 0, 0.3)',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'margin': '-30px 0 0 -30px'
  },
  playButtonIconStyles: {
    'width': '0',
    'height': '0',
    'border-top': '14px solid transparent',
    'border-bottom': '14px solid transparent',
    'border-left': '14px solid rgba(0, 0, 0, 0.5)',
    'position': 'absolute',
    'left': '26px',
    'top': '16px'
  }
});
```

That's about the *play* button. Note that if you decide to use `playButtonStyles` or `playButtonIconStyles` you have to provide the full style of the elements. For example providing only `{ top: '20px' }` property results in `top:20px;`.

## How it works

It replaces your `<img>` tag with newly generated `<div>` that contains only the first frame (roughly) of your animated Gif. It creates a *play* button on top of it and when the element is clicked it returns the original image.

## Compatibility

Chrome, FF, Safari, Opera, IE9+

## Side effects

Your `<img>` tag is replaced by a `<div>`. Consider the fact that it is a block element.

## Inspiration

[http://stackoverflow.com/a/4276742/642670](http://stackoverflow.com/a/4276742/642670)
