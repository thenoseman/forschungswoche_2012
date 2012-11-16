(function appClosure() {
  'use strict';
  var express = require('express');
  var http = require('http');
  var path = require('path');
  var url = require('url');
  var stylus = require('stylus');

  // routes/index.js
  var routes = require('./routes');

  var app = express();

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('geheim'));
    app.use(express.session());
    app.use(app.router);

    app.use(stylus.middleware({
      dest : __dirname + '/public',
      src : __dirname + '/app'})
    );
    app.use(express.static(path.join(__dirname, 'public')));
  });

  app.configure('development', function(){
    app.use(express.errorHandler());
  });

  app.get('/', routes.index);

  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });

})();
