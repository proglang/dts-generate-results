require({paths: {xregexp: 'xregexp-all'}}, ['xregexp'], (XRegExp) => {
    console.log(XRegExp.version);
});
