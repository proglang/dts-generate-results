    var istanbul = require('istanbul'),
        collector = new istanbul.Collector(),
        reporter = new istanbul.Reporter(),
        sync = false;

    collector.add(obj1);
    collector.add(obj2); //etc.

    reporter.add('text');
    reporter.addAll([ 'lcov', 'clover' ]);
    reporter.write(collector, sync, function () {
        console.log('All reports generated');
    });
