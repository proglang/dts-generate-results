connect: {
  options: {
    port: 3000,
    hostname: 'localhost'
  },
  dev: {
    options: {
      middleware: function (connect) {
        return [
          require('connect-livereload')(), // <--- here
          checkForDownload,
          mountFolder(connect, '.tmp'),
          mountFolder(connect, 'app')
        ];
      }
    }
  }
}
