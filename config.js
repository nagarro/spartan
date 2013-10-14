// configuring require.js
require.config({
  map: {
      '*': {
        'css': 'lib/css'
      } 
  },
  paths: {
    'jquery': 'lib/jquery',
	'underscore': 'lib/underscore',
	'backbone': 'lib/backbone',
	'text': 'lib/text'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(["app"], function (app) {
	app.initialize();
});