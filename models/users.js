// Model for user.
define(function(require){
	var Backbone = require('backbone');
	var UserModel = require('models/user');
	
	var UserCollection = Backbone.Collection.extend({
						   model: UserModel
					     });
	
	return UserCollection;
});