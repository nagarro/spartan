// Making views modular.
define(['jquery', 'underscore'], 
function ($, _) {
	var CharacterListView = function(controller, Template){
		var context = this;
		// reference to the controller object.
		this.controller = controller;
		
		// saving reference to template to be used for this instance.
		this.Template = Template;
		
		// containing element
		this.Container = null;
		
		// link to character details view.
		this.CharacterDetailsView = null;
		
		// the first function to call on a controller.
		this.initialize = function(element){
			this.Container = element;
			this.setHTML(controller.getInitialCharacterList());
						
			// handling click of save button
			$(element).on('click', '#btnSave', function(){
				var firstName, lastName, playedBy;
				
				firstName = $('#txtFirstName').val();
				lastName = $('#txtLastName').val();
				playedBy = $('#txtPlayedBy').val();
				
				context.controller.saveNewCharacter(firstName, lastName, playedBy);
				context.setHTML(controller.getLatestCharacterList());
			});
			
			// handling click of details link
			$(element).on('click', '.aCharacterDetails', function(){
				var index = parseInt($(this).attr('index'), 10);
				
				if(context.CharacterDetailsView == null){
					require(['views/CharacterDetails', 'text!templates/CharacterDetails.html'], 
					function(ViewClass, Template){
						context.CharacterDetailsView = new ViewClass(context.controller, Template);	
						context.showCharacterDetails(index);
					});
				}
				else{
					context.showCharacterDetails(index);
				}
			});
		};
		
		// shows details of a character
		this.showCharacterDetails = function(index){
			var model = context.controller.getCharacterDetails(index);
			context.CharacterDetailsView.render('#employeeDetails', model, index);
		};
		
		// sets HTML
		this.setHTML = function(model){
			var compiledTemplate = _.template(context.Template);
			var htmlFromTemplate = compiledTemplate(model);
			
			$(context.Container).html('');
			$(context.Container).html(htmlFromTemplate);
		};
		
		return this;
	};
	
	return CharacterListView;
});