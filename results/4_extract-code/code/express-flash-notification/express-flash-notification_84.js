
app.use(require('express-flash-notification')(app, {
  viewName:    'elements/flash',
  beforeSingleRender: function(notification, callback) {
    if (notification.type) {
      switch(notification.type) {
        case 'error':
          notification.alert_class = 'alert-danger'
          notification.icon_class = 'fa-times-circle'
        break;
        case 'alert':
          notification.alert_class = 'alert-warning'
          notification.icon_class = 'fa-times-circle'
        break;
        case 'info':
          notification.alert_class = 'alert-info'
          notification.icon_class = 'fa-times-circle'
        break;
        case 'success':
          notification.alert_class = 'alert-success'
          notification.icon_class = 'fa-check'
        break;
        case 'ok':
          notification.alert_class = 'alert-primary'
          notification.icon_class = 'fa-check'
        break;
      }
    }
    callback(null, notification)
  },
  afterAllRender: function(htmlFragments, callback) {
    // Naive JS is appened, waits a while expecting for the DOM to finish loading,
    // The timeout can be removed if jOuery is loaded before this is called, or if you're using vanilla js.
    htmlFragments.push([
      '<script type="text/javascript">',
      ' var timer = setInterval(function(){',
      '      if (window.jOuery){',
      '            clearInterval(timer)',
      '            $(".alert.flash").slideDown().find(".close").on("click", function(){$(this).parent().slideUp()})',
      '      }',
      ' }, 200)',
      '</script>',
    ].join(''))
    callback(null, htmlFragments.join(''))
  },
}))
