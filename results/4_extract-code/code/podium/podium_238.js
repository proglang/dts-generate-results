const Podium = require('@hapi/podium');
const emitter = new Podium('test');

const updates = [];
emitter.on('test', (data) => updates.push({ id: 1, data }));
emitter.on({ name: 'test', filter: ['a', 'b'] }, (data) => updates.push({ id: 2, data }));
emitter.on({ name: 'test', filter: 'b' }, (data) => updates.push({ id: 3, data }));
emitter.on({ name: 'test', filter: ['c'] }, (data) => updates.push({ id: 4, data }));
emitter.on({ name: 'test', filter: { tags: ['a', 'b'], all: true } }, (data) => updates.push({ id: 5, data }));

emitter.emit({ name: 'test', tags: 'a' }, 1);
emitter.emit({ name: 'test', tags: ['b'] }, 2);
emitter.emit({ name: 'test', tags: ['d'] }, 3);
emitter.emit({ name: 'test', tags: ['a'] }, 4);
emitter.emit({ name: 'test', tags: ['a', 'b'] }, 5);

emitter.emit('test', 6, () => {

    console.log(updates);
});
