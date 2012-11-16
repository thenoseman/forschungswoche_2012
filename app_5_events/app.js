(function appClosure() {
  'use strict';
  var Emitter = require('events').EventEmitter;
  var util = require('util');

  var Hello = function () {
    this.talk = function (name) {
      console.log('Hello, ' + name);
      this.emit('talked', name);
    };
  };
  util.inherits(Hello, Emitter);

  // Instantiate
  var say = new Hello();

  // Listen
  say.on('talked', function (name) { console.log('Hello said "hello" to ' + name);  });

  // Talk
  say.talk('node.js');

})();
