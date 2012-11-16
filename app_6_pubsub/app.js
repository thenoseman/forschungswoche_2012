(function appClosure() {
  'use strict';
  var util = require('util');
  var redis = require('redis');
  var consumer = redis.createClient();
  var sender = redis.createClient();
  var prompt = require('prompt');
  var name;

  consumer.on('subscribe', function (channel, count) {
    console.log('');
    console.log('consumer is subscribed to ' + count + ' channels');
  });

  consumer.on('message', function (channel, message) {
    console.log('');
    console.log('Channel ' + channel + ' : ' + message);
  });
  consumer.subscribe('channel');

  prompt.start();

  var sendToChannel = function (err, input) {
    sender.publish('channel', input.message);
    if (input.message !== 'exit') {
      getMessage();
    } else {
      consumer.end();
      sender.end();
      process.exit(0);
    }
  };

  prompt.get('name', function (err, input) {
    if (err) { throw err; }
    name = input.name;
    getMessage();
  });

  var getMessage = function () {
    prompt.get('message', sendToChannel);
  };

})();
