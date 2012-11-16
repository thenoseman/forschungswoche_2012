(function appClosure() {
  "use strict";

  var Client = require("mariasql");
  var connection = new Client();
  var _ = require('lodash');

  var counter = 0;

  connection.connect({host: "127.0.0.1", user: "root", db: "employees"});

  connection.on("connect", function onConnect() { console.log("Client connected");  });
  connection.on("close", function onClose() { clearInterval(interval); } );

  var doQuery = function () {
    console.log("Executing Query #" + counter);
    counter += 1;

    var executeQuery = function (counter) {
      connection.query("SELECT SLEEP(1)").on("result", function onResult(result) {
        result.on("end", function onRow(row) {
          console.log("Ended Query #" + counter);
        });
      });
      connection.end();
    };
    executeQuery(counter);
  };

  _(_.range(1,10)).each(function onRange(element) {
    doQuery();
  });

  var interval = setInterval(function () { console.log("Ich mache auch noch was anderes!"); }, 224);

})();
