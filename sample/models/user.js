// Model for user.
define(function(require){
	var Backbone = require('backbone');
	
	var UserModel = Backbone.Model.extend({
					   defaults: {
							id: '1',
							Name: 'Default Name',
							Age: 25,
							IsSingle: true
					   },
					   initialize: function(){
							console.log('New user created with following details: ' + JSON.stringify(this));
					   }
				   });
	
	return UserModel;
});