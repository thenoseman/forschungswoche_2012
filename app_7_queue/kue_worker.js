(function kueWorkerClosure() {
  'use strict';
  var kue = require('kue');
  var jobs = kue.createQueue();

  jobs.process('email', function (job, done) {
    console.log('JOB: Sende Email an : ' + job.data.to);
    console.log('JOB: Betreff : ' + job.data.subject);
    for (var i = 0; i < 1000; i += 1) {
      if (i % 10 === 0) {
        job.progress(i, 1000);
      }
    }
    done();
  });


})();
