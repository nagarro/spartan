// configuring require.js
require.config({
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

// intializing application
require(["jquery", "app"],
  function($, appConfig) {
    $(function() {
      $('[spartan-template][load-at-init="true"]').each(function(){
			var element = this;
			var templateName = $(this).attr('spartan-template');
			var controllerName = appConfig[templateName];
			
			require(['controllers/' + controllerName, 'views/' + templateName, 'text!templates/' + templateName + '.html'], 
			function(ControllerClass, ViewClass, Template){
				var controller = new ControllerClass();
				var view = new ViewClass(controller, Template);
				
				view.initialize(element);
			});
	  });
    });
  }
);