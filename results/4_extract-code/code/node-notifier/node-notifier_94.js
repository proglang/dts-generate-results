const WindowsToaster = require('node-notifier').WindowsToaster;

var notifier = new WindowsToaster({
  withFallback: false, // Fallback to Growl or Balloons?
  customPath: void 0 // Relative/Absolute path if you want to use your fork of SnoreToast.exe
});

notifier.notify(
  {
    title: void 0, // String. Required
    message: void 0, // String. Required if remove is not defined
    icon: void 0, // String. Absolute path to Icon
    sound: false, // Bool | String (as defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx)
    wait: false, // Bool. Wait for User Action against Notification or times out
    id: void 0, // Number. ID to use for closing notification.
    appID: void 0, // String. App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible.
    remove: void 0, // Number. Refer to previously created notification to close.
    install: void 0 // String (path, application, app id).  Creates a shortcut <path> in the start menu which point to the executable <application>, appID used for the notifications.
  },
  function(error, response) {
    console.log(response);
  }
);
