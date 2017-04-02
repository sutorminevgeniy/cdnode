const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.once('start', message => console.log(message));
emitter.emit('start', 'Started');
emitter.removeAllListeners();
emitter.emit('start', 'Started');