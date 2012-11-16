(function appClosure() {
  'use strict';
  var fs = require('fs');
  var zlib = require('zlib');

  var count = 0;

  // Callback Funktion
  var echo = function(whatever) {
    count += 1;
    console.log(count);
  };

  // Datei aus einer GZIP Datei gelsen und als Stream verarbeiten
  var readFile = fs.createReadStream('random_large_file.txt.gz').pipe(zlib.createUnzip());

  // Was tun, wenn daten aus dem Stream ankommen?
  readFile.on("data", echo);

  // Was tun, wenn keine Daten zum lesen mehr da sind (EOF)?
  readFile.on("end", function() { clearInterval(otherOperation) });

  // Noch etwas anderes machen
  var otherOperation = setInterval(function() {
    console.log("\nANOTHER OPERATION\n");
  }, 10);

})();
