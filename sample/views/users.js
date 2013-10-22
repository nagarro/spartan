// View for displaying users.
define(function(require){
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	var UserTemplate = require('text!templates/users.html');
	var GridView = require('components/system/grid/grid-view.js');
	
	var UserView = Backbone.View.extend({
					   template: _.template(UserTemplate),
					   initialize: function(){
					   },
					   render: function(){
							this.$el.append(this.template(null));
							
							var gridView = new GridView({id: '#usersList', collection: this.collection});
							gridView.render();
							
							this.$el.find("#usersListContainer").append(gridView.el);
							return this;
					   }
				   });
	
	return UserView;
});