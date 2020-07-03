require(['linkify'], function (linkify) {
  linkify.test('github.com'); // true
  linkify.test('github.com', 'email'); // false
});

require(['linkify-element'], function (linkifyElement) {

  // Linkify the #sidebar element
  linkifyElement(document.getElementById('sidebar'), {
    className: 'my-link'
  });

  // Linkify all paragraph tags
  document.getElementsByTagName('p').map(linkifyElement);
});

