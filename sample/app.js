// View for displaying users.
define(function(require){
	return {
		initialize: function () {
			var Backbone = require('backbone');
			var AppRouter = Backbone.Router.extend({
				routes: {
					"*others" : "defaultRoute"
				},
				defaultRoute: function(){
					var UserModel, UserCollection, UserView, userModel, userCollection, userView;
					
					UserModel = require('models/user');
					UserCollection = require('models/users');
					UserView = require('views/users');
					
					userCollection = new UserCollection();
					userModel = new UserModel({
									id: '1',
									Name: 'Dheeraj Lalwani',
									Age: 27,
									IsSingle: true
								});
					userCollection.add(userModel);
					
					userModel = new UserModel({
									id: '2',
									Name: 'Sumeet Malik',
									Age: 26,
									IsSingle: true
								});
					userCollection.add(userModel);
					
					userModel = new UserModel({
									id: '3',
									Name: 'Anup Bishnoi',
									Age: 28,
									IsSingle: false
								});
					userCollection.add(userModel);
					
					userModel = new UserModel({
									id: '4',
									Name: 'Anshul Rastogi',
									Age: 28,
									IsSingle: false
								});
					userCollection.add(userModel);
					
					userModel = new UserModel({
									id: '5',
									Name: 'Vinay Jha',
									Age: 25,
									IsSingle: true
								});
					userCollection.add(userModel);
					
					userModel = new UserModel({
									id: '6',
									Name: 'Prateek Kumar Pradeep',
									Age: 23,
									IsSingle: false
								});
					userCollection.add(userModel);

					userView = new UserView({
								el: '#container',
								collection: userCollection
							  });
					userView.render();
				}
			});

			var myAppRouter = new AppRouter();
			Backbone.history.start();
		}
	}; 
});