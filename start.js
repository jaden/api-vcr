// Generated by CoffeeScript 1.8.0
(function() {
  var config, minimist, options, server, url;

  server = require('./src/server');

  minimist = require('minimist');

  url = require('url');

  config = require('./src/config');

  console.log('');

  console.log('Starting apiVCR');

  console.log('---------------');

  options = minimist(process.argv.slice(2));

  if (options.record) {
    if (url.parse(options.record).href) {
      config.record = options.record;
      server.record(config.record);
    } else {
      console.warn("Need to specify a valid url if you want to record: `node start.js --record=api.magicalsailboat.com`");
      console.warn("Your `record` option parsed to this url: ", url.parse(options.record));
      return 61;
    }
  }

  if (options.port) {
    config.port = options.port;
  }

  server.start();

}).call(this);
