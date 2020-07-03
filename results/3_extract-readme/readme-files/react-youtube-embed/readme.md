# react-youtube-embed

A responsive YouTube embed component for React.

## Install

With npm:

```bash
npm install --save react-youtube-embed
```

With Yarn:

```bash
yarn add react-youtube-embed
```

## Usage

```jsx
import YouTube from 'react-youtube-embed'

...

<YouTube id='A71aqufiNtQ' />
```

## Options

- `aspectRatio`: Set an aspect ratio or percentage. Default: `"16:9"`
- `prependSrc`: Prepends a string to the embed URL (before the YouTube ID). Default: `"https://www.youtube.com/embed/"`
- `appendSrc`: Appends a string to the embed URL. Default: `""`
