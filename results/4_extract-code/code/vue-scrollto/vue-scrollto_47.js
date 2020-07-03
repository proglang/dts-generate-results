var VueScrollTo = require('vue-scrollto');

var options = {
    container: '#container',
    easing: 'ease-in',
    offset: -60,
    force: true,
    cancelable: true,
    onStart: function(element) {
      // scrolling started
    },
    onDone: function(element) {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    },
    x: false,
    y: true
}

var cancelScroll = VueScrollTo.scrollTo(element, duration, options)

// or alternatively inside your components you can use
cancelScroll = this.$scrollTo(element, duration, options)

// to cancel scrolling you can call the returned function
cancelScroll()
