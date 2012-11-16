(function appClosure() {
  'use strict';
  var kue = require('kue');
  var jobs = kue.createQueue();

  var job = jobs.create('email', {
    subject: 'Ein Betreff',
    to: 'somebody@example.com'
  }).attempts(5);

  job.on('complete', function () {
    console.log('Job fertig!');
  });

  job.on('progress', function (progress) {
    console.log('Job zu ' + progress + ' % fertig.');
  });

  job.save();
})();
