(function appClosure() {
  'use strict';
  var http = require('http');

  function processRequest(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" } );
    if(req.url.indexOf("/node") === 0) {
      res.write("NODE");
    } else if(req.url.indexOf("/rails") === 0)  {
      res.write("Nope");
    } else {
      res.write("Homepage")
    }
    res.end();
  }

  var server = http.createServer(processRequest);
  server.listen(5000);
})();
