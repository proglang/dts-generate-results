require(['dompurify'], function(DOMPurify) {
    var clean = DOMPurify.sanitize(dirty);
});
