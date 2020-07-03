var java = require('js-to-java');

// Java: com.java.Object o = new com.java.Object();
java('com.java.Object', { foo: 'bar' });
// => {$class: 'com.java.Object', $: { foo: 'bar' }}

// Java: Boolean r;
java.Boolean(true);
// => {$class: 'java.lang.Boolean', $: true}

// Java: short[] shorts = new short[] {1, 2, 3};
java.array('short', [1, 2, 3]);
// => {$class: '[short', $: [1, 2, 3]}

// Java: int[] ints = new int[] {1, 2, 3};
java.array('int', [1, 2, 3]);
// same to the next example
java.array.int([1, 2, 3]);
// => {$class: '[int', $: [1, 2, 3]}
