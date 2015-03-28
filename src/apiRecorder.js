// Generated by CoffeeScript 1.8.0
(function() {
  var createWatcher, proxy;

  proxy = require('express-http-proxy');

  createWatcher = function(api) {
    var host, port;
    host = api.split(':')[0];
    port = api.split(':')[1];
    console.log("constructing a watcher for api: `" + host + ":" + port + "`");
    return function(req, res, next) {
      var apiReq;
      console.log("Proxying request: ", req.path);
      apiReq = http.get("" + req.protocol + "://" + host + ":" + port + req.path, onApiResponse);
      return apiReq.on('error', onApiErr);
    };
  };

  module.exports = {
    createWatcher: createWatcher
  };

}).call(this);
